import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from '../icon';
import { useRouter } from 'expo-router';
import { useAppContext } from '@/context/AppContext';

const Header = () => {
  const router = useRouter();
  const { address, weatherService } = useAppContext();
  const openSearchAddress = () => {
    router.push('/searchAddress');
  };

  const openSettings = () => {
    router.push('/settings');
  };
  return (
    <View style={styles.header}>
      <Pressable onPress={openSearchAddress} style={styles.locationWrap}>
        <Icon size={40} color="white" name="location" />
        <Text style={styles.locationText}>{address.name}</Text>
      </Pressable>
      <Pressable onPress={openSettings}>
        <Icon size={40} name={'settings'} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 12,
    flexDirection: 'row',
    fontSize: 26,
    color: 'white',
  },
});

export default Header;