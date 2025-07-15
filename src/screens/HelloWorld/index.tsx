import SoftKeyboard from '@src/components/SoftKeyboard';
import React from 'react';
import { View, Text } from 'react-native';

const HelloWorld = () => {
  return (
    <View style={{ flex: 1}}>
      <Text>Hello World Screen</Text>
      <SoftKeyboard />
    </View>
  );
};
export default HelloWorld;
