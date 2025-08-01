import { RouteProp, useFocusEffect } from '@react-navigation/native';
import CheckBox from '@src/components/CheckBox';
import Flex from '@src/components/Flex';
import SoftKeyboard from '@src/components/SoftKeyboard';
import ToolBar from '@src/components/ToolBar';
import { useCaches } from '@src/constants/store';
import { BaohuangPlayer } from '@src/constants/t';
import { uuid } from '@src/constants/u';
import { produce } from 'immer';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStacksParams, RootStacksProp } from '../Screens';
import Person from './components/Person';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Baohuang'>;
}

const Baohuang: React.FC<MyProps> = props => {
  const { navigation, route } = props;
  const [players, setPlayers] = useState<BaohuangPlayer[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const { theme, games, setGames, autoRevertGame } = useCaches();
  const [gameArea, setGameArea] = useState<'wf' | 'fk'>('wf'); // 潍坊 | 疯狂
  const playersRef = useRef(players);

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
    if (route.params?.id && games.some(it => it.id == route.params?.id)) {
      let game = games.find(it => it.id == route.params.id);
      setPlayers(game.players);
    } else {
      let last = games.find(it => it.from == 'bh');
      autoRevertGame && last && setPlayers([...last.players]);
    }
    return function () {};
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        const latestPlayers = playersRef.current;
        if (!latestPlayers.every(it => it.cards.every(card => card == ''))) {
          setGames([
            {
              id: uuid(),
              from: 'bh',
              time: new Date().toLocaleString(),
              players: latestPlayers,
            },
            ...games,
          ]);
        }
      };
    }, []),
  );

  const handlePlayerPress = (player: Player, index: number) => {
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

  const sum = useMemo(() => {
    return { wf: 40, fk: 30 }[gameArea];
  }, [gameArea]);

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <ToolBar
        title={'保皇'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {players.length === 0 ? (
            <View style={{ padding: 16 }}>
              <Text
                style={{ color: '#666', fontSize: 14, textAlign: 'center' }}
              >
                正在初始化
              </Text>
            </View>
          ) : (
            <View>
              <View style={{ paddingHorizontal: 12 }}>
                <View style={{ height: 6 }} />
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
            </View>
          )}
          <View style={{ height: 10 }} />
          <View style={{ paddingHorizontal: 12 }}>
            <View style={styles.settingPanel}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#333',
                  fontWeight: '500',
                }}
              >
                设置
              </Text>
              <View style={{ height: 6 }} />
              <Flex horizontal justify={'space-between'}>
                <Text style={{ fontSize: 14, color: '#333' }}>保皇玩法</Text>
                <Flex horizontal>
                  <CheckBox
                    checked={gameArea == 'wf'}
                    activeColor={theme}
                    onPress={() => setGameArea('wf')}
                    label={'Wf.潍坊保皇'}
                  />
                  <View style={{ width: 12 }} />
                  <CheckBox
                    checked={gameArea == 'fk'}
                    activeColor={theme}
                    onPress={() => setGameArea('fk')}
                    label={'Fk.疯狂保皇'}
                  />
                </Flex>
              </Flex>
            </View>
          </View>
        </View>
        <View style={{ height: 12 }} />
      </ScrollView>
      <SoftKeyboard
        onKeyBoardPress={onKeyBoardPress}
        onDeletePress={onDeletePress}
        onClearPress={() => {
          setPlayers(defaultPlayers);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingPanel: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    padding: 12,
  },
});
export default Baohuang;
