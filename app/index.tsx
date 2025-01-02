import React, { useEffect, useState } from 'react';
import { ActivityIndicator, RefreshControl, StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { blackGradientProps } from '@/constants/gradient';
import Header from '@/components/header';
import { WeatherIcon } from '@/components';
import CurrentWeather from '@/components/currentWeather';
import Forecast from '@/components/forecast';
import { useAppContext } from '@/context/AppContext';
import { UnifiedWeatherResponse } from '@/types/UnifiedWeather';
import { useAxiosInstance } from '@/api';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { address, weatherService } = useAppContext();
  const [weather, setWeather] = useState<UnifiedWeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { fetchWeather } = useAxiosInstance(weatherService);
  const [error, setError] = useState<string>();

  const fetchWeatherData = async () => {
    if (!address.lat || !address.lon) return;

    setIsLoading(true);
    
    try {
      let weather = await fetchWeather(address);
      setError(undefined);
      setWeather(weather);
    } catch (error) {
      const errorStr = `Error fetching weather data:${error}`;
      setError(errorStr);
      console.error(errorStr);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setIsRefreshing(true);
    await fetchWeatherData();
    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchWeatherData();
  }, [address, weatherService]);

  return (
    <LinearGradient
      {...blackGradientProps}
      style={[styles.background, { paddingTop: top, paddingBottom: bottom }]}
    >
      <Header />
      {error && <Text style={styles.errorText}>{error}</Text>}
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      ) : (
        weather && (
          <ScrollView
            style={styles.scrollView}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={onRefresh}
                tintColor="#ffffff"
                colors={['#ffffff']}
              />
            }
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
          >
            
            <WeatherIcon name={weather.current.icon} />
            <CurrentWeather
              temp={weather.current.temperature}
              feelTemp={weather.current.feelsLike}
              humidity={weather.current.humidity}
              dewPoint={weather.current.pressure}
              windSpeed={weather.current.windSpeed}
            />
            <Forecast daily={weather.forecast} />
          </ScrollView>
        )
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 34,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default Home;