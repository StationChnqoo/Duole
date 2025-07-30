import Flex from '@src/components/Flex';
import { buildRandomHexColor } from '@src/constants/c';
import { useCaches } from '@src/constants/store';
import React from 'react';
import {
  Image,
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
  } = useCaches();

  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });

  const frames = useSafeAreaInsets();

  const supportedGames = {
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
                  <Flex horizontal justify={'space-between'}>
                    <Text
                      style={{
                        color: item == defaultGame ? theme : '#666',
                        fontSize: 14,
                      }}
                    >
                      {supportedGames[item].title}
                    </Text>
                  </Flex>
                  <Text
                    style={{
                      fontSize: 12,
                      color: item == defaultGame ? theme : '#666',
                    }}
                    numberOfLines={1}
                  >
                    {supportedGames[item].message}
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
                自动恢复牌局
              </Text>
              <Switch
                value={autoRevertGame}
                onValueChange={value => {
                  setAutoRevertGame(value);
                }}
                trackColor={{ false: '#ccc', true: theme }}
                thumbColor={cardSound ? '#fff' : '#f4f3f4'}
              />
            </View>
            <View style={{ height: 12 }} />
            <View style={styles.settingItem}>
              <Text style={{ fontSize: 14, color: '#333', fontWeight: '500' }}>
                按键反馈（震动效果）
              </Text>
              <Switch
                value={isKeyboardFeedback}
                onValueChange={value => {
                  setIsKeyboardFeedback(value);
                }}
                disabled={Platform.OS != 'android'}
                trackColor={{ false: '#ccc', true: theme }}
                thumbColor={cardSound ? '#fff' : '#f4f3f4'}
              />
            </View>
          </View>
          <View style={{ height: 12 }} />
          <View style={styles.card}>
            <Flex horizontal justify={'space-between'}>
              <Text style={{ fontSize: 16, color: '#333', fontWeight: '500' }}>
                实验室
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
                onPress={() => {
                  navigation.navigate('GoujiSheet');
                }}
              >
                <Image
                  source={require('@src/assets/images/common/arrow_right.png')}
                  style={{ height: 14, width: 14, tintColor: theme }}
                />
              </TouchableOpacity>
            </Flex>
          </View>
          <View style={{ height: 12 }} />
          <View style={styles.card}>
            <Flex horizontal justify={'space-between'}>
              <Text style={{ fontSize: 16, color: '#333', fontWeight: '500' }}>
                最近对局
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
                onPress={() => {
                  navigation.navigate('Games');
                }}
              >
                <Flex horizontal>
                  <Text style={{ fontSize: 14, color: theme }}>
                    {`${games.length}局 | ${(
                      JSON.stringify(games).length /
                      1024 /
                      1024
                    ).toFixed(2)}MB`}
                  </Text>
                  <Image
                    source={require('@src/assets/images/common/arrow_right.png')}
                    style={{ height: 14, width: 14, tintColor: theme }}
                  />
                </Flex>
              </TouchableOpacity>
            </Flex>
          </View>
          <View style={{ height: 12 }} />
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.startButton,
          { backgroundColor: theme, marginBottom: 16 },
        ]}
        onPress={() => {
          navigation.navigate(supportedGames[defaultGame].page);
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
