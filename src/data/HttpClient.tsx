import axios from 'axios';

const HttpClient = axios.create({
  baseURL: '',
  timeout: 10000,
});

HttpClient.interceptors.request.use(async (request) => {
  const token = '';

  if (token) {
    request.headers.Authorization = token;
  }

  return request;
});

export default HttpClient;
