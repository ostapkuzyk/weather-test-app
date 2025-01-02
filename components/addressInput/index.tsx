import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { TAddress } from '../../../weather/types/AppContext';
import _ from 'lodash';
import { useAppContext } from '@/context/AppContext';
import { useAxiosInstance } from '@/api';

interface AddressInputProps {
  address: string;
  setAddress: (value: string) => void;
  onSave: (value: TAddress) => void;
}

const AddressInput = ({ address, setAddress, onSave }: AddressInputProps) => {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<Location[]>([]);
  const addressRegex = /^[a-zA-Z0-9\s,]+$/;
  const [inputText, setInputText] = useState(address);
  const [error, setError] = useState<string>();
  const { weatherService } = useAppContext();
  const { fetchGeoCodingData } = useAxiosInstance(weatherService);

  const fetchAddresses = async (query: string) => {
    try {
      const response = await fetchGeoCodingData(query);
      setError(undefined);
      setSearchResults(response.data);
    } catch (error) {
      const errorStr = `Error fetching addresses: ${error}`
      console.error(errorStr);
      setError(errorStr);
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
        testID='input'
        style={[styles.input]}
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
            <Text style={styles.resultText}>{`${[item.name, item.state, item.country].filter(str => str !== undefined).join(', ')}`}</Text>
          </TouchableOpacity>
        )}
      />
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