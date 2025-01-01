import { UnifiedWeatherForecast } from '@/types/UnifiedWeather';
import Forecast from '../index';
import { render } from '@testing-library/react-native';

const mockDaily: UnifiedWeatherForecast[] = [
  {
    date: "2025-01-01",
    maxTemp: 1,
    minTemp: 0,
    condition: "condition",
    icon: "icon",
    precipitation: 0,
    windSpeed: 0
  }
];

describe('forecast', () => {
  it('renders without crashing', () => {
    const comp = render(<Forecast daily={mockDaily} />);
    expect(comp.toJSON()).toMatchSnapshot();
  });
});