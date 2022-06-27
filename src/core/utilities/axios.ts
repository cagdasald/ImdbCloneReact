import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {LocalStorage} from './localStorage';

axios.interceptors.request.use((req: AxiosRequestConfig) => {
  const token = LocalStorage.get(LocalStorage.token);
  if (token && req.headers) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
