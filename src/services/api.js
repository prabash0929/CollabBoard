import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend Dev Server URL එක
});

// Requests වලට JWT token එක auto එකතු වෙන්න Interceptor එකක්
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;