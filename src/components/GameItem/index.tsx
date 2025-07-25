import Flex from '@src/components/Flex';
import { parseCard3Groups } from '@src/constants/c';
import { useCaches } from '@src/constants/store';
import { Game } from '@src/constants/t';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MyProps {
  data: Game;
  onPress: (item: Game) => void;
}

const GameItem: React.FC<MyProps> = props => {
  const { games, theme } = useCaches();
  const { data, onPress } = props;

  const it = { ...data };
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => {
        onPress(data);
      }}
    >
      <View>
        <Flex horizontal justify="space-between">
          <Text style={{ fontSize: 14, color: '#333' }}>
            {{ bh: '保皇', gj: '够级' }[it.from]}
          </Text>
          <Text style={{ fontSize: 12, color: '#999' }}>{it.time}</Text>
        </Flex>
        <View style={{ height: 4 }} />
        <Text style={{ fontSize: 12, color: '#999' }}>对局编号：{it.id}</Text>
        <View style={{ height: 4 }} />
        {it.players.map((player, j) => (
          <View key={j} style={{ marginVertical: 1 }}>
            <Flex horizontal>
              <Text style={{ fontSize: 12, color: '#333' }} numberOfLines={1}>
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
export default GameItem;
