import { jwtDecode } from 'jwt-decode';

export function setToken(token, username) {
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
}

export function getToken() {
  return localStorage.getItem("token");
}
export function getUsername() {
  return localStorage.getItem("username");
}
export function getUserId() {
  try {
    const token = getToken();
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.userId;
  } catch (err) {
    console.error("Invalid token:", err);
    return null;
  }
}
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
}