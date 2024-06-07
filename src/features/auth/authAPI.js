import api from './../../app/api';

export function loginApiRequest(data) {
  return api.post("/api/auth/login", data);
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
