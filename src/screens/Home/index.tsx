import CheckBox from '@src/components/CheckBox';
import Flex from '@src/components/Flex';
import { buildRandomHexColor } from '@src/constants/c';
import { useCaches } from '@src/constants/store';
import React from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStacksProp } from '../Screens';

interface MyProps {
  navigation?: RootStacksProp;
}

const Home: React.FC<MyProps> = props => {
  const { navigation } = props;
  const {
    playedCardsMode,
    setPlayedCardsMode,
    theme,
    setTheme,
    defaultGame,
    setDefaultGame,
    cardSound,
    setCardCound,
  } = useCaches();

  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });

  const frames = useSafeAreaInsets();

  const games = {
    gj: {
      title: '够级（鹰 🦅）',
      page: 'Gouji',
      message: '6副牌、4副牌',
    },
    bh: {
      title: '保皇（炸弹 💣 ）',
      page: 'Baohuang',
      message: '潍坊保皇、疯狂保皇',
    },
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#fff', height }} />
      <ScrollView>
        <View style={{ flex: 1, paddingHorizontal: 12 }}>
          <View style={{ height: 12 }} />
          <View style={styles.card}>
            <Text style={{ color: '#333', fontSize: 16, fontWeight: '500' }}>
              选择游戏
            </Text>
            <Flex horizontal style={{ gap: 12 }} align={'flex-end'}>
              {Object.keys(games).map((item, index) => (
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
                  <Flex horizontal justify={'space-between'}>
                    <Text
                      style={{
                        color: '#333',
                        fontSize: 14,
                      }}
                    >
                      {games[item].title}
                    </Text>
                    {/* <Image
                      source={require('@src/assets/images/common/arrow_right.png')}
                      style={{ height: 14, width: 14, tintColor: theme }}
                    /> */}
                  </Flex>
                  <Text
                    style={{ fontSize: 12, color: '#666' }}
                    numberOfLines={1}
                  >
                    {games[item].message}
                  </Text>
                </TouchableOpacity>
              ))}
            </Flex>
          </View>
          <View style={{ height: 12 }} />
          <View style={styles.card}>
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
                  activeColor={theme}
                  onPress={() => setPlayedCardsMode(0)}
                  label={'简洁模式'}
                />
                <View style={{ width: 12 }} />
                <CheckBox
                  checked={playedCardsMode == 1}
                  activeColor={theme}
                  onPress={() => setPlayedCardsMode(1)}
                  label={'详细模式'}
                />
              </Flex>
            </View>
            <View style={{ height: 12 }} />
            <View style={styles.settingItem}>
              <Text style={{ fontSize: 14, color: '#333', fontWeight: '500' }}>
                主题颜色
              </Text>
              <TouchableOpacity
                style={[styles.themeTag, { borderColor: theme }]}
                activeOpacity={0.8}
                onPress={() => {
                  setTheme(buildRandomHexColor());
                }}
              >
                <Text style={{ fontSize: 14, color: theme }}>
                  换一组：{theme}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 12 }} />
            <View style={styles.settingItem}>
              <Text style={{ fontSize: 14, color: '#333', fontWeight: '500' }}>
                提示音效
              </Text>
              <Switch
                value={cardSound}
                onValueChange={value => {
                  setCardCound(value);
                }}
                disabled={Platform.OS != 'android'}
                trackColor={{ false: '#ccc', true: theme }}
                thumbColor={cardSound ? '#fff' : '#f4f3f4'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.startButton,
          { backgroundColor: theme, marginBottom: frames.bottom + 10 },
        ]}
        onPress={() => {
          navigation.navigate(games[defaultGame].page);
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>快速开始</Text>
      </TouchableOpacity>
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
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  startButton: {
    // borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
  },
});

export default Home;
