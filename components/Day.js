import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Day(props) {
  return (
    <View style={[props.style, styles.container]}>
      <View style={styles.container}>
        <Text style={{color: 'white'}}>{props.day}</Text>
      </View>
      <View style={styles.container}>
        <Text style={{color: 'white'}}>{props.weather}</Text>
      </View>
      <View style={styles.container}>
        <Text style={{color: 'white'}}>{props.temperature}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
});
