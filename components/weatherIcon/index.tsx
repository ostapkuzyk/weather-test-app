import React from 'react';
import { weatherIconsCodes } from '@/assets/weatherIcons';
import { SvgProps } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

interface IconProps extends SvgProps {
  name: string;
}

export const WeatherIcon: React.FC<IconProps> = ({ name, size = 280, ...props }) => {
  const SelectedIcon = weatherIconsCodes[name];
  return (
    <View style={styles.container}>
      <SelectedIcon size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
});