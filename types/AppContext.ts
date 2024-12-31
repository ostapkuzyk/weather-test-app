export type TAddress = {
  name: string;
  lat: number;
  lon: number;
};

export interface AppContextType {
  address: TAddress;
  handleChangeAddress: (value: TAddress) => void;
  weatherService: WeatherService;
  setWeatherService: (service: WeatherService) => void;
}

export enum WeatherService {
  OpenWeatherMap = 'openWeatherMap',
  WeatherApi = 'weatherApi',
}
