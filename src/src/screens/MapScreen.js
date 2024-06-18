import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import colors from '../assets/styles/colors';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
