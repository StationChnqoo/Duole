import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface MyProps {}

const SoftKeyboard: React.FC<MyProps> = props => {
  const nums = Array.from({ length: 9 }, (_, i) => ({
    label: ((i + 2) % 10).toString(),
    value: (i + 2).toString(),
  }));
  const letters = ['J', 'Q', 'K', 'A']
    .map((item, index) => ({
      label: item,
      value: item,
    }))
    .concat([
      { label: '小王', value: 'X' },
      { label: '大王', value: 'D' },
      { label: '鹰', value: 'Y' },
    ]);
  const actions = [
    { label: 'D.点', value: 'D' },
    { label: 'S.烧', value: 'S' },
    { label: 'M.闷', value: 'M' },
    { label: 'L.落', value: 'L' },
    { label: 'R.让', value: 'R' },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.dot} />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        {nums.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            key={index}
            style={styles.button}
          >
            <Text style={{ fontSize: 16, color: '#333' }}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ height: 10 }} />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        {letters.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            key={index}
            style={[styles.button, { width: 36 }]}
          >
            <Text style={{ fontSize: 14, color: '#333' }}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ height: 10 }} />
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          {actions.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {}}
              key={index}
              style={[styles.button, { width: 44 }]}
            >
              <Text style={{ fontSize: 14, color: '#333' }}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          style={[styles.button, { width: 48, borderColor: 'red' }]}
        >
          <Text style={{ fontSize: 14, color: 'red' }}>删除</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 10 + useSafeAreaInsets().bottom }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  dot: {
    width: 64,
    height: 4,
    borderRadius: 3,
    backgroundColor: '#999',
    alignSelf: 'center',
    marginBottom: 12,
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#999',
    backgroundColor: '#eee',
  },
});

export default SoftKeyboard;
