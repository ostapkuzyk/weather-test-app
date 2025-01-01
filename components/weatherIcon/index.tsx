import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Image, StyleSheet, View } from 'react-native';

interface IconProps extends SvgProps {
  name: string;
}

export const WeatherIcon: React.FC<IconProps> = ({ name, size = 150, ...props }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: name }} style={{ height: size, width: size }} />
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