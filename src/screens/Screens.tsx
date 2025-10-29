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
import Games from './Games';
import GoujiSheet from './GoujiSheet';
import Library from './Library';

export type RootStacksParams = {
  Library: undefined;
  HelloWorld: { id: string };
  Baohuang: { id?: string; name: string };
  Gouji: { id?: string };
  BottomTabs: undefined;
  Games: undefined;
  GoujiSheet: undefined;  
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
        <RootStack.Screen name="Games" component={Games} />
        <RootStack.Screen name="GoujiSheet" component={GoujiSheet} />
        <RootStack.Screen name="Library" component={Library} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
