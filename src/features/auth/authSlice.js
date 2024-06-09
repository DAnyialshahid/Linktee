// src/features/auth/authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { platformsApiRequest, selectPlatformApiRequest, selectThemeApiRequest, themesApiRequest, selectPackageApiRequest, packagesApiRequest, selectUsernameApiRequest, validateUsernameApiRequest, loginApiRequest, loginFacebookApiRequest, loginGoogleApiRequest, signUpApiRequest } from './authAPI';
import { storeToLocalStorage } from './authHelper';

const initialState = {
  is_login: false,
  user_details: {},
  usernameValidation: {
    loading: false,
    valid: false,
    message: "",
  },
  usernameSelect: {
    loading: false,
    valid: false,
    message: "",
  },
  packages: [],
  themes: [],
  platforms: [],
};

export const fetchPlatforms = createAsyncThunk(
  "auth/fetchPlatforms",
  async (_, { rejectWithValue }) => {
    try {
      var response = await platformsApiRequest({});

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const selectPlatform = createAsyncThunk(
  "auth/selectPlatform",
  async (platform, { rejectWithValue }) => {
    try {
      const response = await selectPlatformApiRequest(platform);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const selectTheme = createAsyncThunk(
  'auth/selectTheme',
  async (themeId) => {
    try {
      var response = await selectThemeApiRequest({theme_id: themeId});
     return response.data.message;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

export const fetchThemes = createAsyncThunk(
  'auth/fetchThemes',
  async () => {
    try {
      var response = await themesApiRequest({});
      return response.data.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

export const validateUsername = createAsyncThunk(
  'auth/validateUsername',
  async (username, { rejectWithValue }) => {
    try {
      var response = await validateUsernameApiRequest({username});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const selectPackage = createAsyncThunk(
  'auth/selectPackage',
  async ({ packageId, period }, thunkAPI) => {
    try {
      var response = await selectPackageApiRequest({package_id: packageId,
        period: period});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const selectUsername = createAsyncThunk(
  'auth/selectUsername',
  async (username, { rejectWithValue }) => {
    try {
      var response = await selectUsernameApiRequest({username});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginRequest = createAsyncThunk(
  'login',
  async (data, { rejectWithValue }) => {
    try {
      let response;
      switch (data.type) {
        case 'common':
          response = await loginApiRequest({ ...data, expiresInMins: 30 });
          break;
        case 'google':
          response = await loginGoogleApiRequest({ ...data, expiresInMins: 30 });
          break;
        case 'facebook':
          response = await loginFacebookApiRequest({ ...data, expiresInMins: 30 });
          break;
        default:
          break;
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signUp = createAsyncThunk('auth/signUp', async (data, { rejectWithValue }) => {
  try {
    const response = await signUpApiRequest(data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchPackages = createAsyncThunk(
  "auth/fetchPackages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await packagesApiRequest({});
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.is_login = false;
      state.user_details = {};
      storeToLocalStorage('user', null);
      storeToLocalStorage('is_login', false);
      storeToLocalStorage('token', null);
    },
    logout2: (state) => {
      state.is_login = false;
      state.user_details = {};
    },
    login_via_storage: (state, action) => {
      state.is_login = action.payload.is_login;
      state.user_details = action.payload.user_details;
    },
    emailVerify: (state) => {
      // state.is_login = false;
      // state.user_details = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginRequest.pending, (state) => {
        state.loading = true;
        state.is_login = false;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.loading = false;
        state.is_login = false;
        state.error = action;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.is_login = true;
        state.user_details = action.payload;
        storeToLocalStorage('user', state.user_details.user);
        storeToLocalStorage('is_login', true);
        storeToLocalStorage('token', action.payload.token);
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.is_login = true;
        state.user_details = action.payload;
        storeToLocalStorage('user', state.user_details.user);
        storeToLocalStorage('is_login', true);
        storeToLocalStorage('token', action.payload.token);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.is_login = false;
        state.error = action.payload.message
      })
      .addCase(validateUsername.pending, (state) => {
        state.usernameValidation.loading = true;
      })
      .addCase(validateUsername.fulfilled, (state, action) => {
        state.usernameValidation.loading = false;
        state.usernameValidation.valid = action.payload.success;
        state.usernameValidation.message = action.payload.message;
      })
      .addCase(validateUsername.rejected, (state, action) => {
        state.usernameValidation.loading = false;
        state.usernameValidation.valid = false;
        state.usernameValidation.message = action.payload.message;
      })
      .addCase(selectUsername.pending, (state) => {
        state.usernameSelect.loading = true;
      })
      .addCase(selectUsername.fulfilled, (state, action) => {
        state.usernameSelect.loading = false;
        state.usernameSelect.valid = action.payload.success;
        state.usernameSelect.message = action.payload.message;
      })
      .addCase(selectUsername.rejected, (state, action) => {
        state.usernameSelect.loading = false;
        state.usernameSelect.valid = false;
        state.usernameSelect.message = action.payload.message;
      })
      .addCase(fetchPackages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.packages = action.payload;
      })
      .addCase(fetchPackages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(selectPackage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(selectPackage.fulfilled, (state, action) => {
        state.loading = false;
        // Handle the success case if needed
      })
      .addCase(selectPackage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : 'Failed to select package';
      })
      .addCase(fetchThemes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThemes.fulfilled, (state, action) => {
        state.loading = false;
        state.themes = action.payload;
      })
      .addCase(fetchThemes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(selectTheme.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(selectTheme.fulfilled, (state, action) => {
        state.loading = false;
        // Handle success if needed
      })
      .addCase(selectTheme.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

    .addCase(fetchPlatforms.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchPlatforms.fulfilled, (state, action) => {
      state.loading = false;
      state.platforms = action.payload;
    })
    .addCase(fetchPlatforms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message || "Failed to fetch platforms";
    })
    .addCase(selectPlatform.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(selectPlatform.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(selectPlatform.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message || "Failed to select platform";
    })
  },
});

export const { emailVerify, logout, login_via_storage } = authSlice.actions;

export const selectCount = (state) => state.counter.value;

export default authSlice.reducer;
