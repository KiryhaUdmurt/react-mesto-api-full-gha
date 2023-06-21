export const BASE_URL = "http://localhost:3000";
const token = localStorage.getItem('token');

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

const makeRequest = (url, method, body) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  return fetch(`${BASE_URL}${url}`, options).then(checkResponse);
};

export const register = (email, password) => {
  return makeRequest("/signup", "POST", { email, password });
};

export const authorize = (email, password) => {
  return makeRequest("/signin", "POST", { email, password });
};

export const getContent = () => {
  return makeRequest("/users/me", "GET", null);
};
