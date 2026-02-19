import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface SwitcherProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  trackColor?: {false: string; true: string};
  thumbColor?: string;
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
  testID?: string;
}

const Switcher: React.FC<SwitcherProps> = ({
  value,
  onValueChange,
  disabled = false,
  trackColor = {false: '#e9e9ea', true: '#34c759'},
  thumbColor = '#ffffff',
  size = 'medium',
  style,
  testID,
}) => {
  const sizes = {
    small: {width: 41, height: 24, thumb: 20, trackBorderRadius: 12},
    medium: {width: 51, height: 31, thumb: 27, trackBorderRadius: 15.5},
    large: {width: 56, height: 34, thumb: 30, trackBorderRadius: 17},
  };

  const currentSize = sizes[size];
  const thumbPosition = value ? currentSize.width - currentSize.thumb - 2 : 2;

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.container, style]}
      onPress={handlePress}
      activeOpacity={0.8}
      disabled={disabled}>
      <View
        style={[
          styles.track,
          {
            width: currentSize.width,
            height: currentSize.height,
            backgroundColor: disabled ? '#e9e9ea' : trackColor[value ? true : false],
            borderRadius: currentSize.trackBorderRadius,
          },
        ]}>
        <View
          style={[
            styles.thumb,
            {
              width: currentSize.thumb,
              height: currentSize.thumb,
              borderRadius: currentSize.thumb / 2,
              backgroundColor: thumbColor,
              transform: [{translateX: thumbPosition}],
            },
          ]}
        />
        {value && (
          <View
            style={[
              styles.thumb,
              {
                width: currentSize.thumb,
                height: currentSize.thumb,
                borderRadius: currentSize.thumb / 2,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                transform: [{translateX: thumbPosition}],
              },
            ]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  track: {
    position: 'relative',
    overflow: 'hidden',
  },
  thumb: {
    position: 'absolute',
    top: 2,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
});

export default Switcher;
