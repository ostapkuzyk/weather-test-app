import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '@/components';

interface CurrentWeatherProps {
  temp: number;
  feelTemp: number;
  dewPoint: number;
  humidity: number;
  windSpeed: number;
}

const CurrentWeather = ({ temp, feelTemp, dewPoint, humidity, windSpeed }: CurrentWeatherProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>{Math.floor(temp)}°</Text>
      <Text style={styles.feelTemp}>Feels like: {Math.floor(feelTemp)}°</Text>

      <View style={styles.addWeather}>
        <View style={styles.addWeatherItem}>
          <Icon name={'rain'} color="white" size={28} />
          <Text style={styles.feelTemp}>{dewPoint}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.addWeatherItem}>
          <Icon name={'humidity'} color="white" size={28} />
          <Text style={styles.feelTemp}>{humidity}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.addWeatherItem}>
          <Icon name={'wind'} color="white" size={28} />
          <Text style={styles.feelTemp}>{windSpeed}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -24,
  },
  temp: {
    fontSize: 64,
    color: 'white',
  },
  feelTemp: {
    fontSize: 20,
    color: 'white',
    marginLeft: 6,
  },
  addWeather: {
    marginTop: 12,
    backgroundColor: 'rgba(16,35,70,0.8)',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addWeatherItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    width: 26,
  },
});
export default CurrentWeather;