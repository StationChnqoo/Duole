import Flex from '@src/components/Flex';
import { useCaches } from '@src/constants/store';
import { dip2px, fs } from '@src/constants/u';
import dayjs from 'dayjs';
import React, { useEffect, useRef } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Baohuang from '../Baohuang';
import Gouji from '../Gouji';
import { RootStacksProp } from '../Screens';

interface MyProps {
  navigation?: RootStacksProp;
}

const Home: React.FC<MyProps> = props => {
  const { navigation } = props;
  const {
    theme,
    setTheme,
    defaultGame,
    setDefaultGame,
    cardSound,
    setCardCound,
    isKeyboardFeedback,
    setIsKeyboardFeedback,
    autoRevertGame,
    setAutoRevertGame,
    games,
    setPack,
    pack,
    isEagle,
    setIsEagle,
    gameArea,
    setGameArea,
    setGames,
  } = useCaches();

  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });

  const insets = useSafeAreaInsets();
  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    // if (__DEV__) {
    //   navigation.navigate('Library');
    // }
  }, []);

  const supportedGames = {
    bh: {
      title: '保皇（炸弹 💣 ）',
      page: 'Baohuang',
      message: '潍坊保皇、疯狂保皇',
    },
    gj: {
      title: '够级（鹰 🦅）',
      page: 'Gouji',
      message: '6副牌、4副牌',
    },
  };

  useEffect(() => {
    if (pack == 4) {
      setIsEagle(false);
    }
    return function () {};
  }, [pack]);

  useEffect(() => {
    const now = dayjs();
    const oneMonthAgo = now.subtract(1, 'month');
    const recentMonthGames = games.filter(game =>
      dayjs(game.time).isAfter(oneMonthAgo),
    );
    setGames([...recentMonthGames]);
    return function () {};
  }, []);

  const component = {
    ['bh']: <Baohuang />,
    ['gj']: <Gouji />,
  }[defaultGame];

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#fff', height }} />
      <ScrollView style={{ flex: 1 }} bounces={false}>
        <View style={styles.card}>
          <Text style={{ color: '#333', fontSize: fs(16), fontWeight: '500' }}>
            选择游戏
          </Text>
          <Flex horizontal style={{ gap: 12 }} align={'flex-end'}>
            {Object.keys(supportedGames).map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.item,
                  { borderColor: defaultGame == item ? theme : '#ccc' },
                ]}
                activeOpacity={0.8}
                onPress={() => {
                  // navigation.navigate(item.page as never);
                  setDefaultGame(item);
                }}
              >
                <Text
                  style={{
                    color: item == defaultGame ? theme : '#666',
                    fontSize: fs(14),
                    fontWeight: '500',
                  }}
                >
                  {supportedGames[item].title}
                </Text>
                <View style={{ height: 5 }} />
                <Text
                  style={{
                    fontSize: fs(12),
                    color: item == defaultGame ? theme : '#666',
                  }}
                  numberOfLines={1}
                >
                  {supportedGames[item].message}
                </Text>
              </TouchableOpacity>
            ))}
          </Flex>
          <Flex horizontal justify="flex-end" style={{ marginTop: 12 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.startButton, { backgroundColor: theme }]}
              onPress={() => {}}
            >
              <Text style={{ color: '#fff', fontSize: fs(14) }}>查看教程</Text>
            </TouchableOpacity>
          </Flex>
        </View>
        <View style={{ height: 2 }} />
        {component}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },
  item: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 12,
    flex: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  themeTag: {
    borderRadius: 5,
    borderWidth: 1,
    height: 24,
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 12,
    // borderRadius: 10,
    backgroundColor: '#fff',
  },
  startButton: {
    // borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    height: dip2px(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
