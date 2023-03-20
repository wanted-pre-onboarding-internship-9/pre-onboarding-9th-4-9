import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: '/mock/mock_data.json',
};

const instance = axios.create(axiosConfig);

instance.interceptors.response.use(response => {
  return response.data;
});

export default instance;
