import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the weather (made by Eunbin Lee)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30, // React Native에서 갖고 있는 css 속성
    paddingVertical: 100,
    backgroundColor: '#ffec99',
  },
  text: {
    color: '#2c2c2c',
    fontSize: 30,
  },
});
