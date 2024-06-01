import api from './../../app/api';

export function loginApiRequest(data) {
  return api.post("/auth/login", data);
}
