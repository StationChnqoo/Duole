import PlayerCards from '@src/components/PlayerCards';
import SoftKeyboard from '@src/components/SoftKeyboard';
import React from 'react';
import { View } from 'react-native';

const Baohuang = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <PlayerCards />
      <SoftKeyboard />
    </View>
  );
};

export default Baohuang;
