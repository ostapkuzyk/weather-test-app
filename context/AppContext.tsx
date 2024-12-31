import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_ADDRESS_KEY } from '@/constants/asuncStorageKeys';
import { AppContextType, TAddress } from '@/types/AppContext';
import { initAsyncStorage } from '@/constants/mockData';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [address, setAddress] = useState<TAddress>(initAsyncStorage);

  useEffect(() => {
    const loadAddress = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_ADDRESS_KEY);
        const parsedValue: TAddress | null = jsonValue != null ? JSON.parse(jsonValue) : null;
        if (parsedValue) {
          setAddress(parsedValue);
        }
      } catch (error) {
        console.error('Error reading object from AsyncStorage:', error);
        return null;
      }
    };

    loadAddress();
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

  return (
    <AppContext.Provider value={{ address, handleChangeAddress }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};