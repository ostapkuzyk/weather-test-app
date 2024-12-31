import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WeatherResponse } from '@/types/OpenWeatherMap';
import { testData } from '@/constants/mockData';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { blackGradientProps } from '@/constants/gradient';
import Header from '@/components/header';
import { WeatherIcon } from '@/components';
import CurrentWeather from '@/components/currentWeather';
import Forecast from '@/components/forecast';

const lat = 49.810628;
const lng = 24.016317;

export default function StandalonePage() {
  const { top, bottom } = useSafeAreaInsets();
  const [weather, setWeather] = useState<WeatherResponse>();
  const fetchWeatherData = async (lat: number, lon: number): Promise<WeatherResponse> => {
    // try {
    //   const response = await axiosInstance.get('/onecall', {
    //     params: {
    //       lat,
    //       lon,
    //       exclude: 'minutely,hourly',
    //       units: 'metric',
    //     },
    //   });
    //   console.log('Weather data:', response);
    //   return response;
    // } catch (error) {
    //   console.error('Error fetching weather data:', error);
    // }
    return testData;
  };

  useEffect(() => {
    (async () => {
      const response = await fetchWeatherData(lat, lng);
      setWeather(response);
    })();
  }, []);

  return (
    <LinearGradient
      {...blackGradientProps}
      style={[styles.background, { paddingTop: top, paddingBottom: bottom }]}
    >
      {weather && (
        <View>
          <Header />
          <WeatherIcon name={weather.current.weather[0].icon as string} />
          <CurrentWeather
            temp={weather.current.temp}
            feelTemp={weather.current.feels_like}
            humidity={weather.current.humidity}
            dewPoint={weather.current.dew_point}
            windSpeed={weather.current.wind_speed}
          />
          <Forecast daily={weather.daily} />
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 34,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});