import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import colors from '../assets/styles/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TupanaTrail</Text>
      <Button
        title="Find Gyms Near Me"
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.black,
  },
});

export default HomeScreen;
