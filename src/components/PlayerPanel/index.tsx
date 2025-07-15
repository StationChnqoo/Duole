import { calcRemainingRanks, parseCard3Groups } from '@src/constants/c';
import { Player } from '@src/constants/t';
import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MyProps {
  player: Player;
  onPlayerPress?: (player: Player) => void; // 可选的点击事件处理函数
  currentPalyerIndex?: number; // 当前玩家索引，用于高亮显示
  sum: number;
}

const PlayerPanel: React.FC<MyProps> = props => {
  const { player, onPlayerPress, currentPalyerIndex, sum } = props;

  const remainingCardsCount = useMemo(() => {
    return (
      sum -
      player.cards[0].length +
      player.cards[1].length -
      parseCard3Groups(player.cards[2]).length
    );
  }, [sum, player.cards]);

  const remainingCards = useMemo(() => {
    return calcRemainingRanks(player.cards[2]);
  }, [player.cards]);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        player.id == currentPalyerIndex
          ? { borderColor: '#ff5252', backgroundColor: '#ffe6e6' }
          : { borderColor: '#eee' },
      ]}
      onPress={() => {
        onPlayerPress?.(player);
      }}
      activeOpacity={0.8}
    >
      <Text style={{ color: '#333', fontSize: 16 }}>{player.name}</Text>
      <View style={{ height: 4 }} />
      <Text style={{ color: '#666', fontSize: 14 }}>{remainingCards}</Text>
      <View style={{ height: 4 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: 'green', fontSize: 12 }}>
          进贡：{player.cards[0] || '--'}
        </Text>
        <Text style={{ color: '#999' }}> | </Text>
        <Text style={{ color: 'red', fontSize: 12 }}>
          吃贡：{player.cards[1] || '--'}
        </Text>
      </View>
      <Text style={styles.remaingCount}>{remainingCardsCount}张</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    position: 'relative',
  },
  border: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  remaingCount: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    position: 'absolute',
    right: 12,
    top: 12,
  },
});

export default PlayerPanel;
