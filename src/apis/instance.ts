import axios from 'axios';

const baseURL = '/mock/mock_data.json';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
