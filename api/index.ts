// https://home.openweathermap.org/
// email:weather.test@mailto.plus
// pass:SXXm+5$y!3wfN&F
// apiKey:15ccbcc5f047f14b04d1ada34df4c710
// -----------------------
// https://www.weatherapi.com/
// email:weather.test@mailto.plus
// pass:@4zNuJ%VCUDj$sK
// apiKey:2177b147ec464aeb83891514243112 (for 14 Jan)
import {API_KEY, BASE_URL} from '@env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const apiKey = API_KEY;
    if (config.params) {
      config.params.appid = apiKey;
    } else {
      config.params = { appid: apiKey };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
