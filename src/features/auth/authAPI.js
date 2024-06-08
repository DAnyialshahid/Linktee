import api from './../../app/api';

export function loginApiRequest(data) {
  return api.post("/api/auth/login", data);
}

export function platformsApiRequest(data) {
  return api.post("/api/platforms/all", data);
}

export function selectPlatformApiRequest(platformArray) {
  
  const formdata = new FormData();

  platformArray.forEach(({ key, value }) => {
    formdata.append(key, value);
  });

  return api.post("/api/platforms/update", formdata);
}

export function selectThemeApiRequest(data) {
  return api.post("/api/themes/select_theme", data);
}

export function selectPackageApiRequest(data) {
  return api.post("/api/packages/select_package", data);
} 

export function themesApiRequest(data) {
  return api.post("/api/themes/all", data);
}

export function packagesApiRequest(data) {
  return api.post("/api/packages/all", data);
}

export function selectUsernameApiRequest(data) {
  return api.post("/api/profile/select_username", data);
}

export function validateUsernameApiRequest(data) {
  return api.post("/api/validate/username", data);
}

export function loginGoogleApiRequest(data) {
  return api.post("/api/auth/google", data);
}

export function loginFacebookApiRequest(data) {
  return api.post("/api/auth/facebook", data);
}

export function signUpApiRequest(data) {
  return api.post("/api/auth/signup", data);
}
