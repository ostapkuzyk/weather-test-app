import { WeatherService } from '@/types/AppContext';
import Home from '../index';
import { act, render } from '@testing-library/react-native';
import { UnifiedWeatherForecast, UnifiedWeatherResponse } from '@/types/UnifiedWeather';

const mockService = WeatherService.OpenWeatherMap;

const mockForecast: UnifiedWeatherForecast = {
  date: "2025-01-01",
  maxTemp: 1,
  minTemp: 1,
  condition: 'condition',
  icon: 'icon',
  precipitation: 1,
  windSpeed: 1
};

const mockWeatherResponse: UnifiedWeatherResponse = {
  current: {
    temperature: 1,
    feelsLike: 1,
    humidity: 1,
    windSpeed: 1,
    condition: 'condition',
    pressure: 1,
    icon: 'icon'
  },
  forecast: [
    mockForecast
  ]
}

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn().mockReturnValue({
    top: 0, 
    bottom: 0  
  })
}));

jest.mock('@/context/AppContext', () => ({
  useAppContext: jest.fn().mockReturnValue({
    weatherService: mockService,
    address: {
      name: 'name',
      lat: 1,
      lon: 1
    }
  })
}));

jest.mock('@/api', () => ({
  useAxiosInstance: jest.fn().mockReturnValue({
    fetchWeather: jest.fn().mockReturnValue(mockWeatherResponse)
  })
}));

describe('Home', () => {
  it('renders without crashing', async () => {    
    const { toJSON, findByTestId} = render(<Home />);
    expect(toJSON()).toMatchSnapshot();
    expect(findByTestId('header')).toBeTruthy();

    await act(() => {
      expect(findByTestId('currentWeather')).toBeTruthy()
    })
  });
});