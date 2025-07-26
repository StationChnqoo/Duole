import Flex from '@src/components/Flex';
import GameItem from '@src/components/GameItem';
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
import { RootStacksProp } from '../Screens';

interface MyProps {
  navigation?: RootStacksProp;
}

const Find: React.FC<MyProps> = props => {
  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });

  const { games, theme } = useCaches();
  const { navigation } = props;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height, backgroundColor: 'white' }} />
      <ScrollView style={{ paddingHorizontal: 12 }}>
        <View style={{ height: 12 }} />
        <View style={styles.items}>
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
              <Image
                source={require('@src/assets/images/common/arrow_right.png')}
                style={{ height: 14, width: 14, tintColor: theme }}
              />
            </TouchableOpacity>
          </Flex>
          <View style={{marginVertical: 2}}>
            <Text style={{fontSize: 14, color: theme}}>
              {`${games.length}局 | ${(
                JSON.stringify(games).length /
                1024 /
                1024
              ).toFixed(2)}MB`}
            </Text>
          </View>
          {games.length == 0 ? (
            <Flex style={{ padding: 12 }}>
              <Text style={{ fontSize: 12, color: '#666' }}>
                暂时没有对局 ~
              </Text>
            </Flex>
          ) : (
            games.slice(0, 3).map((it, i) => (
              <GameItem
                key={i}
                data={it}
                onPress={it => {
                  // @ts-ignore
                  navigation.navigate(
                    // @ts-ignore
                    { bh: 'Baohuang', gj: 'Gouji' }[it.from],
                    { id: it.id },
                  );
                }}
              />
            ))
          )}
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
export default Find;
