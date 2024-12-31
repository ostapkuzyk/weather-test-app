import { UnifiedWeatherResponse } from '@/types/UnifiedWeather';
import { WeatherApiResponse } from '@/types/WeatherApi';
import { OpenWeatherResponse } from '@/types/OpenWeatherMap';

export const adaptWeatherApiResponse = (data: WeatherApiResponse): UnifiedWeatherResponse => {
  return {
    current: {
      temperature: data.current.temp_c,
      feelsLike: data.current.feelslike_c,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph / 3.6, // convert to ms
      condition: data.current.condition.text,
      pressure: data.current.pressure_mb,
      icon: `https:${data.current.condition.icon}`,
    },
    forecast: data.forecast.forecastday.map((day: any) => ({
      date: day.date,
      maxTemp: day.day.maxtemp_c,
      minTemp: day.day.mintemp_c,
      condition: day.day.condition.text,
      icon: `https:${day.day.condition.icon}`,
      precipitation: day.day.totalprecip_mm,
      windSpeed: day.day.maxwind_kph / 3.6, // convert to ms
    })),
  };
};

export const adaptOpenWeatherResponse = (data: OpenWeatherResponse): UnifiedWeatherResponse => {
  return {
    current: {
      temperature: data.current.temp,
      feelsLike: data.current.feels_like,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_speed,
      condition: data.current.weather[0]?.description || 'Unknown',
      pressure: data.current.pressure,
      icon: `https://openweathermap.org/img/wn/${data.current.weather[0]?.icon}@4x.png`,
    },
    forecast: data.daily.map((day) => ({
      date: new Date(day.dt * 1000).toISOString().split('T')[0],
      maxTemp: day.temp.max,
      minTemp: day.temp.min,
      condition: day.weather[0]?.description || 'Unknown',
      icon: `https://openweathermap.org/img/wn/${day.weather[0]?.icon}@2x.png`,
      precipitation: day.snow || 0,
      windSpeed: day.wind_speed,
    })),
  };
};