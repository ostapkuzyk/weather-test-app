// https://home.openweathermap.org/
// email:weather.test@mailto.plus
// pass:SXXm+5$y!3wfN&F
// apiKey:15ccbcc5f047f14b04d1ada34df4c710
// -----------------------
// https://www.weatherapi.com/
// email:weather.test@mailto.plus
// pass:@4zNuJ%VCUDj$sK
// apiKey:2177b147ec464aeb83891514243112 (for 14 Jan)
import axios from 'axios';

interface WeatherServiceConfig {
  apiKey: string;
  baseUrl: string;
}

console.log('process.env.WEATHERAPI_API_KEY: ', process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY);
export const weatherServiceConfigs = {
  openWeatherMap: {
    apiKey: process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY || '',
    baseUrl: 'https://api.openweathermap.org',
  } as WeatherServiceConfig,
  weatherApi: {
    apiKey: process.env.EXPO_PUBLIC_WEATHERAPI_API_KEY || '',
    baseUrl: 'https://api.weatherapi.com/v1',
  } as WeatherServiceConfig,
};

export const createAxiosInstance = (service: keyof typeof weatherServiceConfigs) => {
  const { apiKey, baseUrl } = weatherServiceConfigs[service];

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      if (service === 'openWeatherMap') {
        config.params = config.params || {};
        config.params.appid = apiKey;
      } else if (service === 'weatherApi') {
        config.params = config.params || {};
        config.params.key = apiKey;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response.data,
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

  return axiosInstance;
};
