import Flex from '@src/components/Flex';
import { useCaches } from '@src/constants/store';
import React, { useEffect, useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStacksProp } from '../Screens';

interface MyProps {
  navigation?: RootStacksProp;
}

const My: React.FC<MyProps> = props => {
  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });

  const { games, theme } = useCaches();
  const { navigation } = props;
  const state = useCaches();
  const [caches, setCaches] = useState([]);

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
        <View style={styles.items}>
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
  items: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  item: {
    marginVertical: 5,
  },
});
export default My;
