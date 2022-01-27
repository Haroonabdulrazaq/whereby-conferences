/* eslint-disable no-param-reassign */
import axios from 'axios';

const Interceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      config.baseURL = process.env.REACT_APP_BACKEND_URL;
      config.headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      };
      return config;
    }, (error) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    (response) => {
      response.msg = 'Successfull!';
      return response;
    }, (error) => Promise.reject(error),
  );
};

export default Interceptors;
