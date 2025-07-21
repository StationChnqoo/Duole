import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface MyProps {
  checked: boolean;
  size?: number;
  label?: string;
  onPress?: () => void;
  activeColor?: string;
  inactiveColor?: string;
}

const CheckBox: React.FC<MyProps> = props => {
  const {
    checked,
    size = 16,
    label,
    onPress,
    activeColor = '#987123',
    inactiveColor = '#ccc',
  } = props;

  return (
    <TouchableOpacity
      hitSlop={{ top: 4, left: 4, right: 4, bottom: 4 }}
      style={styles.view}
      activeOpacity={0.8}
      onPress={() => {
        onPress?.();
      }}
    >
      {checked ? (
        <Image
          source={require('./assets/checked.png')}
          style={{ height: size, width: size, tintColor: activeColor }}
        />
      ) : (
        <Image
          source={require('./assets/unchecked.png')}
          style={{ height: size, width: size, tintColor: inactiveColor }}
        />
      )}
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    lineHeight: 16,
    color: '#333',
    marginLeft: 4,
  },
});
export default CheckBox;
