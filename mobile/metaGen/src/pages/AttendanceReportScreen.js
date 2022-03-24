import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AttendanceReport = () => {
  return (
    <View style={styles.container}>
        <Text>AttendanceReport Pages</Text>
    </View>
  )
}

export default AttendanceReport

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});