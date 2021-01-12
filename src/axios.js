import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_IN_INSTANCE';

var requestInterceptor = instance.interceptors.request.use(config => {
    console.log(config);
    return config;
  }, error => {
    console.log(error);
    return Promise.reject(error);
  });
  
// axios.interceptors.request.eject(requestInterceptor);

export default instance;