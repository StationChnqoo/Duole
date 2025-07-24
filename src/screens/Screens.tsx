import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import * as React from 'react';
import HelloWorld from './HelloWorld';
import Baohuang from './Baohuang';
import Gouji from './Gouji';
import BottomTabs from './BottomTabs';

export type RootStacksParams = {
  HelloWorld: { id: string };
  Baohuang: {id?: string};
  Gouji: {id?: string};
  BottomTabs: undefined;
};

const RootStack = createNativeStackNavigator<RootStacksParams>();

export type RootStacksProp = NativeStackNavigationProp<RootStacksParams>;
export const navigationRef = createNavigationContainerRef<RootStacksParams>();

export default function Stacks() {
  // const navigator = useNavigationContainerRef();
  // useFlipper(navigator);
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        id={undefined}
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
          animationDuration: 618,
        }}
      >
        <RootStack.Screen name="BottomTabs" component={BottomTabs} />
        <RootStack.Screen name="HelloWorld" component={HelloWorld} />
        <RootStack.Screen name="Baohuang" component={Baohuang} />
        <RootStack.Screen name="Gouji" component={Gouji} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
