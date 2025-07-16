
import React from 'react';
import { AppRegistry, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { name as appName } from './app.json';
import Screens from './src/screens/Screens';

const Duole = () => {

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <Screens />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => Duole);
