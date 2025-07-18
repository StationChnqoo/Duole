import { useFocusEffect } from '@react-navigation/native';
import CheckBox from '@src/components/CheckBox';
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
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStacksProp } from './src/screens/Screens';

interface MyProps {
  navigation?: RootStacksProp;
}

const App: React.FC<MyProps> = props => {
  const { navigation } = props;
  const { playedCardsMode, setPlayedCardsMode, theme, setTheme } = useCaches();

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
      title: '够级',
      page: 'Gouji',
      message: '6副牌、带鹰🦅和不带鹰🦅玩法',
    },
    {
      id: 'bh',
      title: '保皇',
      page: 'Baohuang',
      message: '炸弹💣场、潍坊保皇和疯狂保皇玩法',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#fff', height }} />
      <ScrollView>
        <View style={{ flex: 1, paddingHorizontal: 12 }}>
          <View style={{ height: 12 }} />
          <View style={styles.card}>
            <Text style={{ color: '#333', fontSize: 16, fontWeight: '500' }}>
              游戏列表
            </Text>
            {games.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.item}
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate(item.page as never);
                }}
              >
                <Flex horizontal justify={'space-between'}>
                  <Text
                    style={{
                      color: '#333',
                      fontSize: 14,
                      fontWeight: '500',
                    }}
                  >
                    {item.title}
                  </Text>
                  <Flex horizontal>
                    <Text style={{ fontSize: 12, color: '#666' }}>
                      {item.message}
                    </Text>
                    <View style={{ width: 4 }} />
                    <Image
                      source={require('@src/assets/images/common/arrow_right.png')}
                      style={{ height: 14, width: 14, tintColor: theme }}
                    />
                  </Flex>
                </Flex>
              </TouchableOpacity>
            ))}
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
    borderRadius: 5,
    marginTop: 10,
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
});

export default App;
