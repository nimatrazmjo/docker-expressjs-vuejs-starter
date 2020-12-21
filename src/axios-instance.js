import axios from 'axios'
import { config } from './vue.config';

const AxiosInstance = axios.create({
  baseURL: config.BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json'
  }
});

AxiosInstance.interceptors.request.use(async (config) => {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  return config;
});

AxiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response && error.response.status == 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    location.href = '/login';
  }

  return Promise.reject(error);
});
export default AxiosInstance
