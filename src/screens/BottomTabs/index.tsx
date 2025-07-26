import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useFocusEffect } from '@react-navigation/native';
import { useCaches } from '@src/constants/store';
import React, { useCallback, useRef } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Find from '../Find';
import Home from '../Home';
import My from '../My';
import { RootStacksProp } from '../Screens';
import { NewModalRef } from './components/NewModal';
import dayjs from 'dayjs';

const Tab = createBottomTabNavigator();
interface MyProps {
  navigation?: RootStacksProp;
}

const BottomTabs = (props: MyProps) => {
  const { theme, freeUsed, setFreeUsed } = useCaches();
  const { navigation } = props;
  const modalRef = useRef<NewModalRef>(null);

  const screens = [
    {
      name: 'Home',
      component: Home,
      icon: require('./assets/menu_home.png'),
      label: '首页',
    },
    // {
    //   name: 'Find',
    //   component: Find,
    //   icon: require('./assets/menu_friends.png'),
    //   label: '发现',
    // },
    {
      name: 'My',
      component: My,
      icon: require('./assets/menu_me.png'),
      label: '我的',
    },
  ];

  useFocusEffect(
    useCallback(() => {
      // setIsShowNewModal(true);
      let today = dayjs().format('YYYY-MM-DD');
      if (freeUsed.key != today) {
        setFreeUsed({ key: today, value: 0 });
      }
      return () => {};
    }, []),
  );

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator id={undefined}>
        {screens.map((it, i) => (
          <Tab.Screen
            name={it.name}
            key={i}
            component={it.component}
            options={{
              headerShown: false,
              tabBarLabel: it.label,
              tabBarActiveTintColor: theme,
              tabBarIcon: ({ color }) => (
                <Image
                  source={it.icon}
                  style={{ height: 24, width: 24, tintColor: color }}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  specialButton: {
    top: -12,
    width: 52,
    height: 52,
    borderRadius: 26,
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Android 阴影
    shadowColor: '#000', // iOS 阴影
    shadowOffset: { width: 0, height: 0.1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});
export default BottomTabs;
