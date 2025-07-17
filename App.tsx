import { NewAppScreen } from '@react-native/new-app-screen';
import React, { useEffect, useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { RootStacksProp } from './src/screens/Screens';
import { useFocusEffect } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CheckBox from '@src/components/CheckBox';
import Flex from '@src/components/Flex';

interface MyProps {
  navigation?: RootStacksProp;
}

const App: React.FC<MyProps> = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const { navigation } = props;
  const [playedCardsMode, setPlayedCardsMode] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      // This will be called when the screen is focused
      setTimeout(() => {
        // props.navigation.navigate('Baohuang');
      }, 1000);
      return () => {
        // This will be called when the screen is unfocused
      };
    }, []),
  );

  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });

  const games = [
    {
      id: 'gj',
      title: '6副牌够级',
      page: 'Gouji',
      message: '带鹰🦅和不带鹰🦅玩法',
    },
    {
      id: 'bh',
      title: '保皇炸弹💣场',
      page: 'Baohuang',
      message: '潍坊保皇和疯狂保皇玩法',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#fff', height }} />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ padding: 12, backgroundColor: '#fff' }}>
            <Text style={{ color: '#333', fontSize: 16, fontWeight: '500' }}>
              游戏列表
            </Text>
            <View style={{ height: 12 }} />
            <View style={{ flexDirection: 'row', gap: 12 }}>
              {games.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.item}
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.navigate(item.page as never);
                  }}
                >
                  <Text
                    style={{ color: '#333', fontSize: 14, fontWeight: '500' }}
                  >
                    {item.title}
                  </Text>
                  <View style={{ height: 5 }} />
                  <Text style={{ fontSize: 12, color: '#666' }}>
                    {item.message}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{ height: 12 }} />
          <View style={{ padding: 12, backgroundColor: '#fff' }}>
            <Text style={{ color: '#333', fontSize: 16, fontWeight: '500' }}>
              游戏设置
            </Text>
            <View style={{ height: 12 }} />

            <View style={styles.settingItem}>
              <Text style={{ fontSize: 14, color: '#333', fontWeight: '500' }}>
                出牌记录模式
              </Text>
              <Flex horizontal align={'center'}>
                <CheckBox
                  checked={playedCardsMode == 0}
                  onPress={() => setPlayedCardsMode(0)}
                  label={'简洁模式'}
                />
                <View style={{ width: 12 }} />
                <CheckBox
                  checked={playedCardsMode == 1}
                  onPress={() => setPlayedCardsMode(1)}
                  label={'详细模式'}
                />
              </Flex>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  item: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
