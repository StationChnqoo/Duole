import { View, Text } from 'react-native';
import React from 'react';

interface MyProps {}

const SoftKeyboard: React.FC<MyProps> = props => {
  const nums = Array.from({ length: 7 }, (_, i) => ({
    label: (i + 2).toString(),
    value: (i + 2).toString(),
  }));
  const letters = ['J', 'Q', 'K', 'A']
    .map((item, index) => ({
      label: item,
      value: item,
    }))
    .concat([
      { label: 'X', value: '小王' },
      { label: 'D', value: '大王' },
      { label: 'Y', value: '鹰🦅' },
    ]);
  const actions = [
    { label: 'D(点)', value: 'D' },
    { label: 'S(烧)', value: 'S' },
    { label: 'M(闷)', value: 'M' },
    { label: 'L(落)', value: 'L' },
    { label: 'R(让)', value: 'R' },
    { label: 'D(删除）', value: 'D' },
  ];
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {nums.map((item, index) => (
        <Text key={index} style={{ fontSize: 20, margin: 5 }}>
          {item.label}
        </Text>
      ))}
      {letters.map((item, index) => (
        <Text key={index} style={{ fontSize: 20, margin: 5 }}>
          {item.label}
        </Text>
      ))}
      {actions.map((item, index) => (
        <Text key={index} style={{ fontSize: 20, margin: 5 }}>
          {item.label}
        </Text>
      ))}
    </View>
  );
};

export default SoftKeyboard;
