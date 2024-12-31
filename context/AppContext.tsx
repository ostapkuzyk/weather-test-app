import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_ADDRESS_KEY, STORAGE_WEATHER_SERVICE_KEY } from '@/constants/asyncStorageKeys';
import { AppContextType, TAddress, WeatherService } from '@/types/AppContext';
import { initAsyncStorage } from '@/constants/mockData';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [address, setAddress] = useState<TAddress>(initAsyncStorage);
  const [weatherService, setWeatherService] = useState<WeatherService>(WeatherService.WeatherApi);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        // Load address
        const addressJson = await AsyncStorage.getItem(STORAGE_ADDRESS_KEY);
        const parsedAddress: TAddress | null = addressJson != null ? JSON.parse(addressJson) : null;
        if (parsedAddress) {
          setAddress(parsedAddress);
        }

        // Load weather service
        const service = await AsyncStorage.getItem(STORAGE_WEATHER_SERVICE_KEY);
        const parsedService: WeatherService | null = service != null ? JSON.parse(service) : null;

        if (
          parsedService &&
          Object.values(WeatherService).includes(parsedService as WeatherService)
        ) {
          setWeatherService(parsedService as WeatherService);
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };

    loadInitialData();
  }, []);

  const handleChangeAddress = async (newAddress: TAddress) => {
    try {
      const jsonValue = JSON.stringify(newAddress);
      await AsyncStorage.setItem(STORAGE_ADDRESS_KEY, jsonValue);
      setAddress(newAddress);
    } catch (error) {
      console.error('Failed to save address to AsyncStorage:', error);
    }
  };

  const handleSetWeatherService = async (service: WeatherService) => {
    try {
      const jsonValue = JSON.stringify(service);
      await AsyncStorage.setItem(STORAGE_WEATHER_SERVICE_KEY, jsonValue);
      setWeatherService(service);
    } catch (error) {
      console.error('Failed to save weather service to AsyncStorage:', error);
    }
  };

  const contextValues: AppContextType = {
    address,
    handleChangeAddress,
    weatherService,
    setWeatherService: handleSetWeatherService,
  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};