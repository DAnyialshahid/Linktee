import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginApiRequest, loginFacebookApiRequest, loginGoogleApiRequest } from './authAPI';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import { getFromLocalStorage, storeToLocalStorage } from './authHelper';
const initialState = {
  is_login: false,
  user_details: {},
};

export const loginRequest = createAsyncThunk(
  'login',
  async (data) => {
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
  }
);
// Redirect to dashboard after successful login

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    logout: (state, action) => {
      state.is_login = false;
      state.user_details = {};
      storeToLocalStorage('user', null)
      storeToLocalStorage('is_login', false);

      // if(action.payload.cb){
      //   action.payload.cb();
      // }
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
        state.is_login = false
      })
      .addCase(loginRequest.rejected, (state) => {
        state.loading = false;
        state.is_login = false
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.is_login = true
        state.user_details = action.payload;
        storeToLocalStorage('user', state.user_details)
        storeToLocalStorage('is_login', true)

      });
  },
});

export const { emailVerify, logout, login_via_storage } = authSlice.actions;

export const selectCount = (state) => state.counter.value;



export default authSlice.reducer;
