import Flex from '@src/components/Flex';
import React from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HelloWorld = () => {
  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height, backgroundColor: 'white' }} />
      <Flex>
        <Text>Hello World Screen</Text>
      </Flex>
    </View>
  );
};

export default HelloWorld;
