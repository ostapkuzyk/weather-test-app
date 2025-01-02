import { WeatherService } from '@/types/AppContext';
import AddressInput from '../index';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { useAxiosInstance } from '@/api';

const mockService = WeatherService.OpenWeatherMap;

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
    fetchGeoCodingData: jest.fn()
  })
}));

jest.mock('expo-router', () => ({
  useRouter: jest.fn().mockReturnValue({
    back: jest.fn()
  })
}));

describe('addressInput', () => {
  beforeEach(() => {
    jest.useRealTimers();
  })
  it('renders without crashing', () => {
    const { toJSON } = render(<AddressInput
      address={''}
      setAddress={jest.fn()}
      onSave={jest.fn()} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('fetch data and selects one address', async () => {
    jest.useFakeTimers();
    const mockAddress = 'mock initial'
    const mockSetAddress = jest.fn()
    const mockOnSave = jest.fn();

    const mockInputValue = 'new value'

    const mockLocation: Location = {
      country: 'country',
      lat: 1,
      lon: 1,
      name: mockInputValue,
      state: 'state'
    };
    const mockResponseData = {
      data: [mockLocation]
    }

    const axiosInstance = useAxiosInstance(mockService);
    axiosInstance.fetchGeoCodingData.mockResolvedValueOnce(mockResponseData);

    const component = <AddressInput
      address={mockAddress}
      setAddress={mockSetAddress}
      onSave={mockOnSave} />
    const { findByTestId } = render(component);

    const inputField = await findByTestId('input');
    expect(inputField).toBeTruthy();

    await waitFor(() => {
      fireEvent.changeText(inputField, mockInputValue);
    });

    jest.advanceTimersByTime(1000);
    
    const resultItem = await findByTestId('resultItem');

    fireEvent.press(resultItem);

    expect(mockOnSave).toHaveBeenCalled();
    expect(mockSetAddress).toHaveBeenCalledWith(mockInputValue);
  });
});