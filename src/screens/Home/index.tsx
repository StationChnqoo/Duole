import Flex from '@src/components/Flex';
import { useCaches } from '@src/constants/store';
import { dip2px, fs } from '@src/constants/u';
import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  ImageBackground,
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
import { RootStacksProp } from '../Screens';
import { ClassItem } from '@src/constants/t';
import { loadClassesConfig } from '@src/service';

interface MyProps {
  navigation?: RootStacksProp;
}

const Home: React.FC<MyProps> = props => {
  const { navigation } = props;
  const {
    theme,
    defaultGame,
    setDefaultGame,
    games,
    pack,
    setIsEagle,
    setGames,
  } = useCaches();

  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const insets = useSafeAreaInsets();

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

  const loadConfig = async () => {
    let result = await loadClassesConfig();
    if (result.status == 200) {
      let data = result.data as ClassItem[];
      setClasses(data);
    }
  };

  useEffect(() => {
    loadConfig();
  }, []);

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
              onPress={() => {
                const pages = {
                  bh: 'Baohuang',
                  gj: 'Gouji',
                };
                navigation.navigate(pages[defaultGame] as never);
              }}
            >
              <Text style={{ color: '#fff', fontSize: fs(14) }}>开始数牌</Text>
            </TouchableOpacity>
          </Flex>
        </View>
        <View style={{ height: 2 }} />
        <View style={styles.card}>
          <Text style={{ color: '#333', fontSize: fs(16), fontWeight: '500' }}>
            使用教程
          </Text>
          {classes.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              style={{ marginTop: 12 }}
              onPress={() => {
                navigation.navigate('Webviewer', {
                  title: item.title,
                  url: item.biLink,
                });
              }}
            >
              <Flex horizontal>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={{
                    width: '100%',
                    height: dip2px(218),
                    borderRadius: 12,
                  }}
                  resizeMode="stretch"
                />
                <View style={styles.backCover}>
                  <Text
                    style={{
                      fontSize: fs(16),
                      color: '#fff',
                      fontWeight: '500',
                    }}
                  >
                    {item.title}
                  </Text>
                  <View style={{ height: 10 }} />
                  <Text
                    style={{
                      fontSize: fs(14),
                      color: '#fff',
                      textAlign: 'center',
                    }}
                  >
                    {item.content}
                  </Text>
                </View>
              </Flex>
            </TouchableOpacity>
          ))}
        </View>
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
  backCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
    padding: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
