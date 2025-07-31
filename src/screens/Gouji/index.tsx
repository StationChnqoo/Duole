import { RouteProp, useFocusEffect } from '@react-navigation/native';
import CheckBox from '@src/components/CheckBox';
import Flex from '@src/components/Flex';
import SoftKeyboard from '@src/components/SoftKeyboard';
import ToolBar from '@src/components/ToolBar';
import { useCaches } from '@src/constants/store';
import { GoujiPlayer } from '@src/constants/t';
import { produce } from 'immer';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStacksParams, RootStacksProp } from '../Screens';
import KingCounter from './components/KingCounter';
import Person from './components/Person';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Baohuang'>;
}

const Gouji: React.FC<MyProps> = props => {
  const { navigation, route } = props;
  const [players, setPlayers] = useState<GoujiPlayer[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [isEagle, setIsEagle] = useState(true); // 是否带鹰
  const { theme, games, setGames, autoRevertGame, pack, setPack } = useCaches();
  const [me, setMe] = useState('');
  const playersRef = useRef(players);

  useEffect(() => {
    playersRef.current = players;
  }, [players]);

  const defaultPlayers = ['对门', '上家', '下家'].map((name, index) => ({
    id: index,
    name,
    cards: '',
    currentCardIndex: 2,
  }));

  // 初始化玩家数据
  useEffect(() => {
    setPlayers(defaultPlayers);
    return function () {};
  }, []);

  // 初始化玩家数据
  useEffect(() => {
    setPlayers(defaultPlayers);
    if (route.params?.id && games.some(it => it.id == route.params?.id)) {
      let game = games.find(it => it.id == route.params.id);
      // setPlayers(game.players);
    } else {
      let last = games.find(it => it.from == 'gj');
      // autoRevertGame && last && setPlayers([...last.players]);
    }
    return function () {};
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        const latestPlayers = playersRef.current;
      };
    }, []),
  );

  useEffect(() => {
    if (pack == 4) {
      setIsEagle(false);
    }
    return function () {};
  }, [pack]);

  const handlePlayerPress = (player: GoujiPlayer, index: number) => {
    // 处理玩家点击事件
    setCurrentPlayerIndex(player.id);
    setPlayers(
      produce(players, draft => {
        draft[player.id].currentCardIndex = index;
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].cards != '' && !draft[i].cards.endsWith('#')) {
            draft[i].cards += '#';
          }
        }
      }),
    );
  };

  const onKeyBoardPress = (card: string) => {
    if (currentPlayerIndex == -1) {
      setMe(t => t + card);
    } else {
      setPlayers(
        produce(players, draft => {
          let p = draft[currentPlayerIndex];
          p.cards += card;
        }),
      );
    }
  };

  const onDeletePress = () => {
    if (currentPlayerIndex == -1) {
      setMe(t => t.slice(0, -1));
    } else {
      setPlayers(
        produce(players, draft => {
          let p = draft[currentPlayerIndex];
          if (p.cards.length > 0) {
            p.cards = p.cards.slice(0, -1);
          }
        }),
      );
    }
  };

  const sum = useMemo(() => {
    return pack == 4 ? 32 : isEagle ? 51 : 50;
  }, [isEagle, pack]);

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <ToolBar
        title={'够级'}
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
              <View style={{ paddingHorizontal: 10 }}>
                <View style={{ height: 6 }} />
                <KingCounter pack={pack} me={me} />
                <View style={{ height: 6 }} />
                <View style={{ flexDirection: 'row' }}>
                  <Person
                    player={players[0]}
                    onPlayerPress={handlePlayerPress}
                    currentPalyerIndex={currentPlayerIndex}
                    sum={sum}
                    direction={'row'}
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
                <View style={{ height: 10 }} />
                <TouchableOpacity
                  style={[
                    styles.meContainer,
                    { borderColor: currentPlayerIndex == -1 ? theme : '#ccc' },
                  ]}
                  activeOpacity={0.8}
                  onPress={() => {
                    setCurrentPlayerIndex(-1);
                  }}
                >
                  <Text style={[styles.meText, { color: '#333' }]}>
                    我的鹰、大王、小王、2
                  </Text>
                  <View style={{ height: 4 }} />
                  <Text style={{ color: 'green', fontSize: 12 }}>
                    3x鹰🦅+2x大王🐓+1x小王🐤+5x2 = YYYDDXX22222
                  </Text>
                  <View style={{ height: 4 }} />
                  <Text style={styles.meText}>{me || '请输入手牌 ...'}</Text>
                </TouchableOpacity>
                <View style={{ height: 10 }} />
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
                    <Text style={{ fontSize: 14, color: '#333' }}>
                      是否带鹰🦅
                    </Text>
                    <Switch
                      disabled={pack == 4}
                      value={isEagle}
                      onValueChange={value => {
                        setIsEagle(value);
                      }}
                      trackColor={{ false: '#ccc', true: theme }}
                      thumbColor={isEagle ? '#fff' : '#f4f3f4'}
                    />
                  </Flex>
                  <View style={{ height: 6 }} />
                  <Flex horizontal justify={'space-between'}>
                    <Text style={{ fontSize: 14, color: '#333' }}>几副牌</Text>
                    <Flex horizontal style={{ gap: 12 }}>
                      <CheckBox
                        activeColor={theme}
                        checked={pack == 4}
                        label={'4副牌'}
                        onPress={() => {
                          setPack(4);
                        }}
                      />
                      <CheckBox
                        activeColor={theme}
                        checked={pack == 6}
                        label={'6副牌'}
                        onPress={() => {
                          setPack(6);
                        }}
                      />
                    </Flex>
                  </Flex>
                </View>
              </View>
            </View>
          )}
          <View style={{ height: 12 }} />
        </View>
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
  meContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  meText: {
    fontSize: 14,
    color: '#666',
  },
});

export default Gouji;
