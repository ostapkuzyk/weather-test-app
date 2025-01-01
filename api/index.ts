// https://home.openweathermap.org/
// email:weather.test@mailto.plus
// pass:SXXm+5$y!3wfN&F
// apiKey:15ccbcc5f047f14b04d1ada34df4c710
// -----------------------
// https://www.weatherapi.com/
// email:weather.test@mailto.plus
// pass:@4zNuJ%VCUDj$sK
// apiKey:2177b147ec464aeb83891514243112 (for 14 Jan)

import { mapToOpenWeatherResponse, mapToWeatherApiResponse } from '@/services/adapters';
import { TAddress, WeatherService } from '@/types/AppContext';
import { OpenWeatherResponse } from '@/types/OpenWeatherMap';
import { UnifiedWeatherResponse } from '@/types/UnifiedWeather';
import { WeatherApiResponse } from '@/types/WeatherApi';
import axios, { AxiosResponse } from 'axios';

interface WeatherServiceConfig {
  apiKey: string;
  baseUrl: string;
}

const weatherServiceConfigs: Record<WeatherService, WeatherServiceConfig> = {
  [WeatherService.OpenWeatherMap]: {
    apiKey: process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY || '',
    baseUrl: 'https://api.openweathermap.org',
  },
  [WeatherService.WeatherApi]: {
    apiKey: process.env.EXPO_PUBLIC_WEATHERAPI_API_KEY || '',
    baseUrl: 'https://api.weatherapi.com/v1',
  }
};

export const useAxiosInstance = (service: WeatherService) => {
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

  const fetchWeather = async (address: TAddress): Promise<UnifiedWeatherResponse | null> => {
    if (service === WeatherService.OpenWeatherMap) {
      const response: AxiosResponse<OpenWeatherResponse> = await axiosInstance.get('/data/3.0/onecall', {
        params: {
          lat: address.lat,
          lon: address.lon,
          exclude: 'minutely,hourly',
          units: 'metric',
        },
      });
      return mapToOpenWeatherResponse(response);
    }

    if (service === WeatherService.WeatherApi) {
      const response: AxiosResponse<WeatherApiResponse> = await axiosInstance.get('/forecast.json', {
        params: {
          q: `${address.lat},${address.lon}`,
          days: 7,
        },
      });
      return mapToWeatherApiResponse(response);
    }

    return null;
  }

  // TODO: extend geocoging for other providers
  const fetchGeoCodingData = async (query: string): Promise<Location[]> => {
    return await axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
      params: {
        q: query,
        limit: 5,
        appid: process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY,
      },
    });
  }

  return {
    fetchWeather,
    fetchGeoCodingData
  };
};
