import React from 'react';
import { View, Text } from 'react-native';

export default function Hour(props) {
  return (
    <View style={[props.style, {flexDirection: 'column', alignItems: 'center', height: 60}]}>
      <Text style={{color: 'white'}}>{props.hour}</Text>
      <Text style={{color: 'white'}}>{props.weather}</Text>
      <Text style={{color: 'white'}}>{props.temperature}</Text>
    </View>
  );
}
