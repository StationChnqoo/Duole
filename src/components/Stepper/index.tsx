import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fs } from '@src/constants/u';
import Flex from '../Flex';

interface MyProps {
  value: number;
  onChange: (n: number) => void;
}

const Stepper: React.FC<MyProps> = props => {
  const { value, onChange } = props;
  return (
    <Flex horizontal style={{ gap: 2 }}>
      <TouchableOpacity
        style={styles.views}
        activeOpacity={0.8}
        hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}
        onPress={() => {
          onChange(-1);
        }}
      >
        <Text style={{ color: '#666', fontSize: fs(16) }}>-</Text>
      </TouchableOpacity>
      <View style={styles.views}>
        <Text style={{ color: '#333', fontSize: fs(12) }}>{value}</Text>
      </View>
      <TouchableOpacity
        style={styles.views}
        activeOpacity={0.8}
        onPress={() => {
          onChange(1);
        }}
      >
        <Text style={{ color: '#666', fontSize: fs(16) }}>+</Text>
      </TouchableOpacity>
    </Flex>
  );
};

const styles = StyleSheet.create({
  views: {
    borderWidth: 1,
    borderRadius: 4,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#999',
  },
});

export default Stepper;
