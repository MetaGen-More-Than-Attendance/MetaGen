import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Demo = () => {
  return (
    <View style={styles.container}>
        <Text>Demo Pages</Text>
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});