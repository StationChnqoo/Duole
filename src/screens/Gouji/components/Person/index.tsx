import Flex from '@src/components/Flex';
import Stepper from '@src/components/Stepper';
import {
  calcRemainingRanks,
  hexToRgba,
  parseCard3Groups,
} from '@src/constants/c';
import { useCaches } from '@src/constants/store';
import { GoujiPlayer } from '@src/constants/t';
import { vibrate } from '@src/constants/u';
import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MyProps {
  player: GoujiPlayer;
  onPlayerPress?: (player: GoujiPlayer, cardsIndex: number) => void; // 可选的点击事件处理函数
  currentPalyerIndex?: number; // 当前玩家索引，用于高亮显示
  sum: number;
  direction?: 'column' | 'row';
}

const Person: React.FC<MyProps> = props => {
  const {
    player,
    onPlayerPress,
    currentPalyerIndex,
    sum,
    direction = 'column',
  } = props;
  const { theme, cardSound, isKeyboardFeedback } = useCaches();

  const borderColor = (index: number) => {
    return player.id == currentPalyerIndex && player.currentCardIndex == index
      ? theme
      : '#ccc';
  };

  const [error, setError] = useState(0);

  const remainingCardsCount = useMemo(() => {
    return sum + error - parseCard3Groups(player.cards).length;
  }, [sum, player.cards, error]);

  const remainingCards = useMemo(() => {
    return calcRemainingRanks(player.cards);
  }, [player.cards]);

  const renderCards2 = (extraStyle: any) => (
    <View
      style={[
        styles.cards2,
        {
          borderColor: borderColor(2),
          height: 14 * 4 + 6,
        },
        extraStyle,
      ]}
    >
      <Text
        ellipsizeMode={'head'}
        numberOfLines={4}
        style={{ fontSize: 12, lineHeight: 14, color: '#666' }}
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
      {direction == 'column' ? (
        <View>
          <Flex horizontal justify={'space-between'}>
            <Text style={{ color: '#333', fontSize: 16 }}>{player.name}</Text>
            <Text style={[styles.remaingCount, { color: theme }]}>
              {remainingCardsCount}张
            </Text>
          </Flex>
          <View style={{ height: 4 }} />
          <Text style={{ color: '#666', fontSize: 14 }}>{remainingCards}</Text>
          <View style={{ height: 4 }} />
          {renderCards2({})}
        </View>
      ) : (
        <Flex horizontal justify={'space-between'}>
          <View style={{ flex: 1 }}>
            <Flex horizontal justify={'space-between'} style={{}}>
              <Text style={{ color: '#333', fontSize: 16 }}>{player.name}</Text>
              <Text style={[styles.remaingCount, { color: theme }]}>
                {remainingCardsCount}张
              </Text>
            </Flex>
            <View style={{ height: 4 }} />
            <Text style={{ color: '#666', fontSize: 14 }}>
              {remainingCards}
            </Text>
          </View>
          <View style={{ width: 16 }} />
          {renderCards2({ flex: 1 })}
        </Flex>
      )}
      <View style={{ position: 'absolute', bottom: 16, right: 16 }}>
        <Stepper
          value={error}
          onChange={t => {
            setError(error => error + t);
            isKeyboardFeedback && vibrate();
          }}
        />
      </View>
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
  },
  cards2: {
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingVertical: 3,
  },
});

export default Person;
