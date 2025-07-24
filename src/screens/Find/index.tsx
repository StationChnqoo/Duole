import Flex from '@src/components/Flex';
import React from 'react';
import {
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
import { useCaches } from '@src/constants/store';
import { parseCard3Groups } from '@src/constants/c';

interface MyProps {
  navigation?: RootStacksProp;
}

const Find: React.FC<MyProps> = props => {
  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });

  const { games } = useCaches();
  const { navigation } = props;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height, backgroundColor: 'white' }} />
      <ScrollView style={{ paddingHorizontal: 12 }}>
        <View style={{ height: 6 }} />
        <View style={styles.items}>
          <Text style={{ fontSize: 16, color: '#333', fontWeight: '500' }}>
            最近对局
          </Text>
          {games.length == 0 ? (
            <Flex style={{ padding: 12 }}>
              <Text style={{ fontSize: 12, color: '#666' }}>
                暂时没有对局 ~
              </Text>
            </Flex>
          ) : (
            games.slice(0, 3).map((it, i) => (
              <TouchableOpacity
                key={i}
                style={styles.item}
                activeOpacity={0.8}
                onPress={() => {
                  // @ts-ignore
                  navigation.navigate(
                    // @ts-ignore
                    { bh: 'Baohuang', gj: 'Gouji' }[it.from],
                    { id: it.id },
                  );
                }}
              >
                <View>
                  <Flex horizontal justify="space-between">
                    <Text style={{ fontSize: 14, color: '#333' }}>
                      {{ bh: '保皇', gj: '够级' }[it.from]}
                    </Text>
                    <Text style={{ fontSize: 12, color: '#999' }}>
                      {it.time}
                    </Text>
                  </Flex>
                  <View style={{ height: 4 }} />
                  <Text style={{ fontSize: 12, color: '#999' }}>
                    对局编号：{it.id}
                  </Text>
                  <View style={{ height: 4 }} />
                  {it.players.map((player, j) => (
                    <View key={j} style={{ marginVertical: 1 }}>
                      <Flex horizontal>
                        <Text
                          style={{ fontSize: 12, color: '#333' }}
                          numberOfLines={1}
                        >
                          {`${player.name}`}
                        </Text>
                        <Text
                          style={{
                            color: '#666',
                            flex: 1,
                            marginHorizontal: 4,
                          }}
                          numberOfLines={1}
                        >
                          {player.cards}
                        </Text>
                        <Text
                          style={{
                            width: 36,
                            color: '#333',
                            textAlign: 'right',
                          }}
                        >
                          {parseCard3Groups(player.cards[2]).length}张
                        </Text>
                      </Flex>
                    </View>
                  ))}
                </View>
              </TouchableOpacity>
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
