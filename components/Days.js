import React from 'react';
import { View, Text } from 'react-native';

export function Weekdays(props) {


  return (
    <View style={[props.style, {flexDirection: 'row', justifyContent: 'space-around'}]}>
      <Text>{props.day}</Text>
      <Text>{props.weather}</Text>
      <Text>{props.temperature}</Text>
    </View>
  );
}

export function Weathers(props) {
  return (
    <View style={[props.style, {flexDirection: 'row', justifyContent: 'space-around'}]}>
      <Text>{props.day}</Text>
      <Text>{props.weather}</Text>
      <Text>{props.temperature}</Text>
    </View>
  );
}

export function Temperatures(props) {
  return (
    <View style={[props.style, {flexDirection: 'row', justifyContent: 'space-around'}]}>
      <Text>{props.day}</Text>
      <Text>{props.weather}</Text>
      <Text>{props.temperature}</Text>
    </View>
  );
}
