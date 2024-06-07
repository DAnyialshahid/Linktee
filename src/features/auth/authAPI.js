import api from './../../app/api'

export function loginApiRequestGoogle(data) {
  return api.post("/auth/login", data)
}

export function loginApiRequestFacebook(data) {
  return api.post("/auth/login", data)
} 

export function loginApiRequestNormal(data) {
  return api.post("/auth/login", data)
}