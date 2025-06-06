import axios from 'axios';
import { AuthResponse } from '@models/auth-response/AuthResponse';

export const API_URL = process.env.URL;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config.isRetry) {
      originalRequest.isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', response.data.accessToken);
        return await $api.request(originalRequest);
      } catch (e) {
        console.log('Не авторизован');
      }
    }
    throw error;
  },
);

export default $api;
