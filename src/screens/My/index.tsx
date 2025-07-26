import Flex from '@src/components/Flex';
import { useCaches } from '@src/constants/store';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useInterval } from 'ahooks';
import { useFocusEffect } from '@react-navigation/native';

interface MyProps {
  navigation?: RootStacksProp;
}

const My: React.FC<MyProps> = props => {
  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });

  const { games, theme, freeUsed } = useCaches();
  const { navigation } = props;
  const state = useCaches();
  const [caches, setCaches] = useState([]);
  const [interval, setInterval] = useState(undefined);
  const [countdown, setCountdown] = useState('23:59:59');

  useInterval(() => {
    dayjs.extend(duration);
    // 当前时间
    const now = dayjs();
    // 今晚 23:59:59
    const endOfDay = dayjs().endOf('day').set('millisecond', 0);
    // 计算剩余毫秒
    const diffMs = endOfDay.diff(now);
    // 转换成 duration 并格式化为 HH:mm:ss
    const remaining = dayjs.duration(diffMs);
    const formatted = [
      String(remaining.hours()).padStart(2, '0'),
      String(remaining.minutes()).padStart(2, '0'),
      String(remaining.seconds()).padStart(2, '0'),
    ].join(':');
    setCountdown(formatted);
  }, interval);

  const vip = useMemo(() => {
    return `试用版 | 每天试用${freeUsed.value}/5次，${countdown}后恢复`;
  }, [countdown, freeUsed]);
  
  useFocusEffect(
    useCallback(() => {
      setInterval(1000);
      return () => {
        setInterval(undefined);
      };
    }, []),
  );

  useEffect(() => {
    let array = [];
    const entries = Object.entries(state).filter(
      ([_, value]) => typeof value !== 'function',
    );
    entries.forEach(([key, value]) => {
      array.push({ key, value });
    });
    setCaches(array);
    return function () {};
  }, [state]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height, backgroundColor: 'white' }} />
      <ScrollView style={{ paddingHorizontal: 12 }}>
        <View style={{ height: 12 }} />
        <View style={styles.card}>
          <Flex horizontal>
            <Image
              source={{ uri: 'https://cctv3.net/i.jpg' }}
              style={{ height: 48, width: 48 }}
            />
            <View style={{ width: 10 }} />
            <View
              style={{ height: 48, justifyContent: 'space-around', flex: 1 }}
            >
              <Text style={{ fontSize: 16, color: '#333', fontWeight: '500' }}>
                陈桥驿站
              </Text>
              <Text style={{ fontSize: 12, color: '#999' }} numberOfLines={1}>
                {vip}
              </Text>
            </View>
            <View style={{ width: 12 }} />
            <TouchableOpacity
              activeOpacity={0.8}
              hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
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
          <Text style={{ fontSize: 16, color: '#333', fontWeight: '500' }}>
            本地缓存
          </Text>
          {caches.map((it, i) => (
            <Flex
              key={i}
              horizontal
              justify={'space-between'}
              style={{ marginTop: 2 }}
            >
              <Text style={{ fontSize: 14, color: '#333' }}>
                {it.key.toUpperCase()}
              </Text>
              <Text style={{ fontSize: 12, color: '#999' }}>
                {(JSON.stringify(it.value).length / 1024).toFixed(2)}KB
              </Text>
            </Flex>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: 'white',
  },
  item: {
    marginVertical: 5,
  },
});

export default My;
