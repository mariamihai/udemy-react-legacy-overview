import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


// Add a request interceptor
axios.interceptors.request.use(config => {
  // console.log(config);
  return config;
}, error => {
  // console.log(error);
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(response => {
  // console.log(response);
  return response;
}, error => {
  // console.log(error);
  return Promise.reject(error);
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
