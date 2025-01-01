import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'expo-router';
import { TAddress } from '../../../weather/types/AppContext';
import _ from 'lodash';

interface AddressInputProps {
  address: string;
  setAddress: (value: string) => void;
  onSave: (value: TAddress) => void;
}

const AddressInput = ({ address, setAddress, onSave }: AddressInputProps) => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState<Location[]>([]);
  const addressRegex = /^[a-zA-Z0-9\s,]+$/;
  const [inputText, setInputText] = useState(address);

  const fetchAddresses = async (query: string) => {
    try {
      const response = (await axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
        params: {
          q: query,
          limit: 5,
          appid: process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY,
        },
      })) as AxiosResponse<Location[]>;
      setSearchResults(response.data);
    } catch (error) {

      console.error('Error fetching addresses:', error);
    }
  };

  const debounceFn = useMemo(() => _.debounce(fetchAddresses, 1000), []);

  const handleChange = (value: string) => {
    if (value.length >= 3 && addressRegex.test(value)) {
      debounceFn(value);
    } else {
      setSearchResults([]);
    }

    setInputText(value)
  };

  const handleSave = () => {
    if (!inputText) {
      setError('Address cannot be empty');
      return;
    }

    if (!addressRegex.test(inputText)) {
      setError('Invalid characters in address');
      return;
    }

    setError('');
    setAddress(inputText);
    router.back();
  };

  const handleChooseResult = (item: Location) => {
    setAddress(item.name);
    onSave({
      name: item.name,
      lon: item.lon,
      lat: item.lat,
    });
    router.back();
  };

  return (
    <View>
      <Text style={styles.label}>Enter your address</Text>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder="Enter address"
        placeholderTextColor="#888"
        value={inputText}
        onChangeText={handleChange}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <FlatList
        data={searchResults}
        keyExtractor={(item, index) => `${item.lat}-${item.lon}-${index}`}
        renderItem={({ item }: { item: Location }) => (
          <TouchableOpacity testID='resultItem' style={styles.resultItem} onPress={() => handleChooseResult(item)}>
            <Text style={styles.resultText}>{`${item.name}, ${item.state}, ${item.country}`}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#0B3B8C',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#0B3B8C',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  resultItem: {
    backgroundColor: 'rgba(30,144,255,0.27)',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  resultText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddressInput;