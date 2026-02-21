import { useFocusEffect } from '@react-navigation/native';
import SoftKeyboard from '@src/components/SoftKeyboard';
import { useCaches } from '@src/constants/store';
import { BaohuangPlayer } from '@src/constants/t';
import { fs, uuid } from '@src/constants/u';
import { produce } from 'immer';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Person from './components/Person';
import ToolBar from '@src/components/ToolBar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface MyProps {
  navigation?: NativeStackNavigationProp<any>;
}

const Baohuang: React.FC<MyProps> = props => {
  const { navigation } = props;
  const [players, setPlayers] = useState<BaohuangPlayer[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const { theme, games, setGames, autoRevertGame, gameArea } = useCaches();
  const playersRef = useRef(players);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    playersRef.current = players;
  }, [players]);

  const defaultPlayers = ['上联', '上家', '下家', '下联'].map(
    (name, index) => ({
      id: index,
      name,
      cards: Array(3).fill(''),
      currentCardIndex: 2,
    }),
  );

  // 初始化玩家数据
  useEffect(() => {
    setPlayers(defaultPlayers);
    // if (route.params?.id && games.some(it => it.id == route.params?.id)) {
    //   let game = games.find(it => it.id == route.params.id);
    //   setPlayers(game.players as BaohuangPlayer[]);
    // } else {
    //   let last = games.find(it => it.from == 'bh');
    //   autoRevertGame &&
    //     last &&
    //     setPlayers([...last.players] as BaohuangPlayer[]);
    // }
    return function () {};
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        const latestPlayers = playersRef.current;
        if (
          !(
            latestPlayers.every(it => it.cards.every(card => card == '')) ||
            games.some(
              it => JSON.stringify(it.players) == JSON.stringify(latestPlayers),
            )
          )
        ) {
          setGames([
            {
              id: uuid(),
              from: 'bh',
              time: new Date().getTime(),
              players: latestPlayers,
            },
            ...games,
          ]);
        }
      };
    }, []),
  );

  const handlePlayerPress = (player: BaohuangPlayer, index: number) => {
    // 处理玩家点击事件
    setCurrentPlayerIndex(player.id);
    setPlayers(
      produce(players, draft => {
        draft[player.id].currentCardIndex = index;
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].cards[2] != '' && !draft[i].cards[2].endsWith('#')) {
            draft[i].cards[2] += '#';
          }
        }
      }),
    );
  };

  const onKeyBoardPress = (card: string) => {
    setPlayers(
      produce(players, draft => {
        let p = draft[currentPlayerIndex];
        p.cards[p.currentCardIndex] += card;
      }),
    );
  };

  const onDeletePress = () => {
    setPlayers(
      produce(players, draft => {
        let p = draft[currentPlayerIndex];
        if (p.cards[p.currentCardIndex].length > 0) {
          p.cards[p.currentCardIndex] = p.cards[p.currentCardIndex].slice(
            0,
            -1,
          );
        }
      }),
    );
  };

  const sum = { wf: 40, fk: 30 }[gameArea];

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5', position: 'relative' }}>
      <ToolBar
        title={'保皇'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View style={{ height: 12 }} />
      <View style={{ flex: 1 }}>
        {players.length === 0 ? (
          <View style={{ padding: 16 }}>
            <Text
              style={{ color: '#666', fontSize: fs(14), textAlign: 'center' }}
            >
              正在初始化
            </Text>
          </View>
        ) : (
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Person
                player={players[0]}
                onPlayerPress={handlePlayerPress}
                currentPalyerIndex={currentPlayerIndex}
                sum={sum}
              />
              <View style={{ width: 6 }} />
              <Person
                player={players[3]}
                onPlayerPress={handlePlayerPress}
                currentPalyerIndex={currentPlayerIndex}
                sum={sum}
              />
            </View>
            <View style={{ height: 6 }} />
            <View style={{ flexDirection: 'row' }}>
              <Person
                player={players[1]}
                onPlayerPress={handlePlayerPress}
                currentPalyerIndex={currentPlayerIndex}
                sum={sum}
              />
              <View style={{ width: 6 }} />
              <Person
                player={players[2]}
                onPlayerPress={handlePlayerPress}
                currentPalyerIndex={currentPlayerIndex}
                sum={sum}
              />
            </View>
          </View>
        )}
      </View>
      <View style={{ height: 12 }} />
      <SoftKeyboard
        onKeyBoardPress={onKeyBoardPress}
        onDeletePress={onDeletePress}
        onClearPress={() => {
          setPlayers(defaultPlayers);
        }}
      />
      <View style={{ height: insets.bottom, backgroundColor: '#fff' }} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default Baohuang;
