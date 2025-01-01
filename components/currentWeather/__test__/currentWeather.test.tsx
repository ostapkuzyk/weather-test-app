import CurrentWeather from '../index';
import { render } from '@testing-library/react-native';

const mockProps = {
  temp: 0,
  feelTemp: 0,
  dewPoint: 0,
  humidity: 0, 
  windSpeed: 0
}

describe('currentWeather', () => {
  it('renders without crashing', () => {
    const comp = render(<CurrentWeather {...mockProps} />);
    expect(comp.toJSON()).toMatchSnapshot();
  });
});