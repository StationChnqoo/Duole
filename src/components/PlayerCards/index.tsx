import { calcRemainingRanks, parseCard3Groups } from '@src/constants/c';
import { Player } from '@src/constants/t';
import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MyProps {
  player: Player;
  onChildPanelPress?: (cardIndex: number) => void; // 可选的点击事件处理函数
  sum: number; // 用于显示总和或其他信息
}

const PlayerCards: React.FC<MyProps> = props => {
  const { player, onChildPanelPress, sum } = props;
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
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 3 }}>
          <Text style={{ color: '#333', fontSize: 14 }}>
            {player.name} · {remainingCardsCount}张
          </Text>
          <View style={{ height: 2 }} />
          <Text style={{ color: '#000', fontSize: 16 }} numberOfLines={1}>
            {remainingCards}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.gongView,
            {
              borderColor: player.currentCardIndex == 0 ? 'green' : '#ccc',
              backgroundColor: '#e6ffe6',
            },
          ]}
          onPress={() => {
            onChildPanelPress?.(0);
          }}
          activeOpacity={0.8}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 14, color: 'green' }}>进贡</Text>
            <Text style={{ color: '#666', fontSize: 16 }} numberOfLines={1}>
              {player.cards[0] || '--'}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ width: 12 }} />
        <TouchableOpacity
          style={[
            styles.gongView,
            {
              borderColor: player.currentCardIndex == 1 ? 'red' : '#eee',
              backgroundColor: '#ffe6e6',
            },
          ]}
          onPress={() => {
            onChildPanelPress?.(1);
          }}
          activeOpacity={0.8}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 14, color: 'red' }}>吃贡</Text>
            <Text style={{ color: '#666', fontSize: 16 }} numberOfLines={1}>
              {player.cards[1] || '--'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ height: 12 }} />
      <TouchableOpacity
        style={[
          styles.shoupaiView,
          { borderColor: player.currentCardIndex == 2 ? 'blue' : '#eee' },
        ]}
        onPress={() => {
          onChildPanelPress?.(2);
        }}
        activeOpacity={0.8}
      >
        <Text style={{ fontSize: 14, color: 'blue' }}>手牌</Text>
        <Text style={{ color: '#999', fontSize: 14 }} numberOfLines={1}>
          {player.cards[2] || '暂无出牌记录 ~'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  gongView: {
    flex: 1,
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 1,
    paddingHorizontal: 12,
  },
  shoupaiView: {
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    backgroundColor: '#eee',
  },
});

export default PlayerCards;
