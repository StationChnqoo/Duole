import Flex from '@src/components/Flex';
import Stepper from '@src/components/Stepper';
import {
  calcRemainingRanks,
  hexToRgba,
  parseCard3Groups,
} from '@src/constants/c';
import { useCaches } from '@src/constants/store';
import { GoujiPlayer } from '@src/constants/t';
import { vibrate, fs } from '@src/constants/u';
import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MyProps {
  player: GoujiPlayer;
  onPlayerPress?: (player: GoujiPlayer, cardsIndex: number) => void; // 可选的点击事件处理函数
  currentPalyerIndex?: number; // 当前玩家索引，用于高亮显示
  sum: number;
}

const Person: React.FC<MyProps> = props => {
  const { player, onPlayerPress, currentPalyerIndex, sum } = props;
  const { theme, cardSound, isKeyboardFeedback } = useCaches();

  const borderColor = (index: number) => {
    return player.id == currentPalyerIndex && player.currentCardIndex == index
      ? theme
      : '#ccc';
  };

  const [error, setError] = useState(0);

  const remainingCardsCount =
    sum + error - parseCard3Groups(player.cards).length;
  const remainingCards = calcRemainingRanks(player.cards);

  const renderCards2 = (extraStyle: any) => (
    <View
      style={[
        styles.cards2,
        {
          borderColor: borderColor(2),
          height: fs(16) * 4,
        },
        extraStyle,
      ]}
    >
      <Text
        ellipsizeMode={'head'}
        numberOfLines={3}
        style={{ fontSize: fs(14), lineHeight: fs(16), color: '#666' }}
      >
        {player.cards || '暂无出牌记录 ~'}
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
      <View>
        <Flex horizontal justify={'space-between'}>
          <Text style={{ color: '#333', fontSize: fs(16) }}>
            {player?.name}
          </Text>
          <Text style={[styles.remaingCount, { color: theme }]}>
            {remainingCardsCount}张
          </Text>
        </Flex>
        <View style={{ height: 5 }} />
        <Text style={{ color: theme, fontSize: fs(14) }}>{remainingCards}</Text>
        <View style={{ height: 10 }} />
        <Flex horizontal justify={'space-between'}>
          <Text style={{ color: '#666', fontSize: fs(14) }}>多了几张牌</Text>
          <Stepper value={error} onChange={v => setError(t => t + v)} />
        </Flex>
        <View style={{ height: 5 }} />
        {renderCards2({})}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  border: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  remaingCount: {
    color: '#000',
    fontSize: fs(16),
  },
  cards2: {
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 3,
  },
});

export default Person;
