import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '@/context/AppContext';
import AddressInput from '@/components/addressInput';

const SearchAddress = () => {
  const router = useRouter();
  const { address, handleChangeAddress } = useAppContext();
  const [localAddress, setLocalAddress] = useState(address.name);

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 2 }} />
        <Text style={styles.title}>Location</Text>
        <Pressable style={{ flex: 2 }} onPress={handleBack}>
          <Text style={styles.close}>Close</Text>
        </Pressable>
      </View>
      <View style={styles.mainWrap}>
        <AddressInput
          address={localAddress}
          setAddress={setLocalAddress}
          onSave={handleChangeAddress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
  },
  header: {
    paddingTop: 16,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    flex: 3,
    textAlign: 'center',
    fontSize: 27,
    color: '#ffffff',
  },
  close: {
    textAlign: 'right',
    color: '#b91212',
  },
  mainWrap: {
    paddingHorizontal: 24,
  },
});

export default SearchAddress;