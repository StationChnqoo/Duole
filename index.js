import { AppRegistry, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { name as appName } from './app.json';
import Screens from './src/screens/Screens';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { useEffect } from 'react';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

dayjs.locale('zh-cn');

const Duole = () => {
  useEffect(() => {
    if (__DEV__) {
      Reactotron.configure() // controls connection & communication settings
        .useReactNative() // add all built-in react native plugins
        .use(reactotronRedux())
        .connect(); // let's connect!
    }
  }, []);

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
