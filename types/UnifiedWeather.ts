export interface UnifiedWeatherResponse {
  current: {
    temperature: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    condition: string;
    pressure: number;
    icon: string;
  };
  forecast: UnifiedWeatherForecast[];
}

export interface UnifiedWeatherForecast {
  date: string;
  maxTemp: number;
  minTemp: number;
  condition: string;
  icon: string;
  precipitation: number;
  windSpeed: number;
}
