import React from 'react';
import { DailyWeather } from '@/types/OpenWeatherMap';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Icon, WeatherIcon } from '@/components';
import { format } from 'date-fns';

interface ForecastProps {
  daily: DailyWeather[];
}

const Forecast = ({ daily }: ForecastProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.containerTitle}>Forecast</Text>
        <Icon name="calendar" color="white" size={28} />
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {daily.map((el) => {
          const date = new Date(el.dt * 1000);
          const dayOfWeek = format(date, 'EEEE');
          return (
            <View key={el.dt + el.sunrise} style={styles.dayItem}>
              <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
              <View style={{ flex: 2 }}>
                <WeatherIcon size={40} name={el.weather[0].icon} />
              </View>
              <View style={styles.tempMaxMin}>
                <Text style={styles.tempMaxTitle}>{Math.floor(el.temp.max)}°C</Text>
                <Text style={styles.tempMinTitle}>{Math.floor(el.temp.min)}°C</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '40%',
    marginTop: 12,
    backgroundColor: 'rgba(16,35,70,0.8)',
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  containerHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerTitle: {
    fontSize: 24,
    color: '#ffffff',
  },
  daysWrap: {},
  dayItem: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 6,
    justifyContent: 'space-between',
  },
  dayOfWeek: {
    flex: 2,
    fontSize: 18,
    color: '#ffffff',
  },
  tempMaxMin: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempMaxTitle: {
    fontSize: 18,
    color: '#ffffff',
    marginRight: 6,
    justifyContent: 'flex-end',
  },
  tempMinTitle: {
    fontSize: 18,
    color: '#FFFFFF80',
  },
});

export default Forecast;