import CheckBox from '@src/components/CheckBox';
import Flex from '@src/components/Flex';
import Switcher from '@src/components/Switcher';
import { useCaches } from '@src/constants/store';
import { dip2px, fs } from '@src/constants/u';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStacksProp } from '../Screens';
import MoreButton from '@src/components/MoreButton';
import { h5 } from '@src/constants/c';

interface MyProps {
  navigation?: RootStacksProp;
}

const My: React.FC<MyProps> = props => {
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

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#fff', height }} />
      <ScrollView style={{ flex: 1 }} bounces={false}>
        <View style={styles.card}>
          <View style={{ height: 12 }} />
          <Flex>
            <Text
              style={{ fontSize: fs(18), color: '#333', fontWeight: '500' }}
            >
              爱数牌
            </Text>
            <View style={{ height: 12 }} />
            <Image
              source={require('@src/assets/images/logo_square.png')}
              style={{ width: 108, height: 108, borderRadius: 16 }}
              resizeMode="stretch"
            />
            <View style={{ height: 12 }} />
            <Text
              style={{ fontSize: fs(12), color: '#999', textAlign: 'center' }}
            >
              让牌局更有把握
            </Text>
          </Flex>
          <View style={{ height: 32 }} />
          <Text style={{ color: '#333', fontSize: fs(16), fontWeight: '500' }}>
            游戏设置
          </Text>
          <View style={{ height: 6 }} />
          <View style={styles.settingItem}>
            <Text style={{ fontSize: fs(14), color: '#333' }}>
              按键反馈（震动效果）
            </Text>
            <Switcher
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
        <View style={{ height: 2 }} />
        <View style={styles.card}>
          <Text style={{ fontSize: fs(16), color: '#333', fontWeight: '500' }}>
            够级
          </Text>
          <View style={{ height: 10 }} />
          <View style={styles.settingItem}>
            <Text style={{ fontSize: fs(14), color: '#333' }}>是否带鹰🦅</Text>
            <Switcher
              disabled={pack == 4}
              value={isEagle}
              onValueChange={value => {
                setIsEagle(value);
              }}
              trackColor={{ false: '#ccc', true: theme }}
              thumbColor={isEagle ? '#fff' : '#f4f3f4'}
            />
          </View>
          <View style={{ height: 5 }} />
          <View style={styles.settingItem}>
            <Text style={{ fontSize: fs(14), color: '#333' }}>几副牌</Text>
            <View style={{ height: 10 }} />
            <Flex horizontal style={{ gap: 12 }}>
              <CheckBox
                activeColor={theme}
                checked={pack == 4}
                label={'4副牌'}
                onPress={() => {
                  setPack(4);
                }}
              />
              <CheckBox
                activeColor={theme}
                checked={pack == 6}
                label={'6副牌'}
                onPress={() => {
                  setPack(6);
                }}
              />
            </Flex>
          </View>
        </View>
        <View style={{ height: 1 }} />
        <View style={styles.card}>
          <Text style={{ fontSize: fs(16), color: '#333', fontWeight: '500' }}>
            保皇
          </Text>
          <View style={{ height: 10 }} />
          <View style={styles.settingItem}>
            <Text style={{ fontSize: fs(14), color: '#333' }}>区域玩法</Text>
            <Flex horizontal style={{ gap: 12 }}>
              <CheckBox
                activeColor={theme}
                checked={gameArea == 'wf'}
                label={'潍坊保皇'}
                onPress={() => {
                  setGameArea('wf');
                }}
              />
              <CheckBox
                activeColor={theme}
                checked={gameArea == 'fk'}
                label={'疯狂保皇'}
                onPress={() => {
                  setGameArea('fk');
                }}
              />
            </Flex>
          </View>
        </View>
        <View style={{ height: 2 }} />
        <View style={styles.card}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <Flex horizontal justify="space-between">
              <Text style={{ fontSize: fs(16), color: '#333' }}>用户政策</Text>
              <MoreButton
                onPress={() => {
                  navigation.navigate('Webviewer', {
                    url: h5(
                      `testMarkdown?src=./docs/duole/terms-of-service.md`,
                    ),
                    title: '用户协议',
                  });
                }}
                label=""
              />
            </Flex>
          </TouchableOpacity>
        </View>
        <View style={{ height: 1 }} />
        <View style={styles.card}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <Flex horizontal justify="space-between">
              <Text style={{ fontSize: fs(16), color: '#333' }}>隐私协议</Text>
              <MoreButton
                onPress={() => {
                  navigation.navigate('Webviewer', {
                    url: h5(`testMarkdown?src=./docs/duole/privacy-policy.md`),
                    title: '隐私政策',
                  });
                }}
                label=""
              />
            </Flex>
          </TouchableOpacity>
        </View>
        <View style={{ height: 1 }} />
        <View style={styles.card}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <Flex horizontal justify="space-between">
              <Text style={{ fontSize: fs(16), color: '#333' }}>关于我们</Text>
              <MoreButton
                onPress={() => {
                  navigation.navigate('Webviewer', {
                    url: 'https://www.xiaopacai.cn',
                    title: '关于我们',
                  });
                }}
                label=""
              />
            </Flex>
          </TouchableOpacity>
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
    padding: 15,
    // borderRadius: 10,
    backgroundColor: '#fff',
  },
  startButton: {
    // borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 15,
    height: dip2px(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default My;
