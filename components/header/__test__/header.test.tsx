import Header from '../index';
import { render } from '@testing-library/react-native';

jest.mock('@/context/AppContext', () => ({
  useAppContext: jest.fn().mockReturnValue({
    address: {
      name: 'name',
      lat: 0,
      lon: 0
    }
  })
}));

describe('header', () => {
  it('renders without crashing', () => {
    const comp = render(<Header />);
    expect(comp.toJSON()).toMatchSnapshot();
  });
});