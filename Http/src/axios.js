import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_IN_INSTANCE';

instance.interceptors.request.use(config => {
    return config;
  }, error => {
    return Promise.reject(error);
  });
  
export default instance;