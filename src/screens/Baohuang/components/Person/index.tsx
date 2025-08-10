import {
  calcRemainingRanks,
  hexToRgba,
  parseCard3Groups,
} from '@src/constants/c';
import { useCaches } from '@src/constants/store';
import { BaohuangPlayer } from '@src/constants/t';
import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Flex from '@src/components/Flex';

interface MyProps {
  player: BaohuangPlayer;
  onPlayerPress?: (player: BaohuangPlayer, cardsIndex: number) => void; // 可选的点击事件处理函数
  currentPalyerIndex?: number; // 当前玩家索引，用于高亮显示
  sum: number;
}

const Person: React.FC<MyProps> = props => {
  const { player, onPlayerPress, currentPalyerIndex, sum } = props;
  const { theme, cardSound } = useCaches();

  const borderColor = (index: number) => {
    return player.id == currentPalyerIndex && player.currentCardIndex == index
      ? theme
      : '#ccc';
  };
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

  const renderCards2 = (extraStyle: any) => (
    <View
      style={[
        styles.cards2,
        {
          borderColor: borderColor(2),
          height: 14 * 3 + 6,
        },
        extraStyle,
      ]}
    >
      <Text
        ellipsizeMode={'head'}
        numberOfLines={3}
        style={{ fontSize: 12, lineHeight: 14, color: '#666' }}
      >
        {player.cards[2] || '暂无出牌记录 ~'}
      </Text>
    </View>
  );

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            player.id == currentPalyerIndex ? hexToRgba(theme, 0.08) : '#fff',
        },
      ]}
      activeOpacity={0.8}
      onPress={() => {
        onPlayerPress(player, 2);
      }}
    >
      <Text style={{ color: '#333', fontSize: 16 }}>{player.name}</Text>
      <View style={{ height: 4 }} />
      <Text style={{ color: '#666', fontSize: 14 }}>{remainingCards}</Text>
      <View style={{ height: 4 }} />
      <Flex
        justify={'space-between'}
        // @ts-ignore
        align={'flex-start'}
      >
        <View>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <TouchableOpacity
              style={[styles.cards01, { borderColor: borderColor(0) }]}
              activeOpacity={0.8}
              onPress={() => {
                onPlayerPress(player, 0);
              }}
            >
              <Text style={{ color: 'green', fontSize: 12 }}>进贡：</Text>
            </TouchableOpacity>
            <View style={[styles.cards01, { borderColor: borderColor(0) }]}>
              <Text style={{ color: 'green', fontSize: 12 }}>
                {player.cards[0] || '--'}
              </Text>
            </View>
          </View>
          <View style={{ height: 4 }} />
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <TouchableOpacity
              style={[styles.cards01, { borderColor: borderColor(1) }]}
              activeOpacity={0.8}
              onPress={() => {
                onPlayerPress(player, 1);
              }}
            >
              <Text style={{ color: 'red', fontSize: 12 }}>吃贡：</Text>
            </TouchableOpacity>
            <View style={[styles.cards01, { borderColor: borderColor(1) }]}>
              <Text style={{ color: 'red', fontSize: 12 }}>
                {player.cards[1] || '--'}
              </Text>
            </View>
          </View>
        </View>
      </Flex>
      {renderCards2({ marginTop: 10 })}
      <Text style={[styles.remaingCount, { color: theme }]}>
        {remainingCardsCount}张
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
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
    position: 'absolute',
    right: 12,
    top: 12,
  },
  cards2: {
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingVertical: 3,
  },
  cards01: {
    borderRadius: 5,
    borderWidth: 1,
    // borderColor: 'transparent',
    borderColor: '#333',
    justifyContent: 'center',
    paddingHorizontal: 4,
    height: 24,
  },
});

export default Person;
