import Flex from '@src/components/Flex';
import PlayerPanel from '@src/components/PlayerPanel';
import SoftKeyboard from '@src/components/SoftKeyboard';
import ToolBar from '@src/components/ToolBar';
import { useCaches } from '@src/constants/store';
import { Player } from '@src/constants/t';
import { produce } from 'immer';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStacksProp } from '../Screens';
import CheckBox from '@src/components/CheckBox';

interface MyProps {
  navigation?: RootStacksProp;
}

const Gouji: React.FC<MyProps> = props => {
  const { navigation } = props;
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [bigCards, setBigCards] = useState<string[]>(Array(2).fill('')); // 大牌统计
  const [isEagle, setIsEagle] = useState(false); // 是否带鹰
  const { theme } = useCaches();
  const [isExpandBigCards, setIsExpandBigCards] = useState(false);
  const [pack, setPack] = useState(6);

  const subtractCards = (allCards: string, ...removes: string[]) => {
    const countMap: Record<string, number> = {};
    // 构建 allCards 的计数映射
    for (const card of allCards) {
      countMap[card] = (countMap[card] || 0) + 1;
    }

    // 遍历所有要移除的牌，进行扣减
    for (const removeStr of removes) {
      for (const card of removeStr) {
        if (countMap[card]) {
          countMap[card]--;
        }
      }
    }

    // 构造剩余的牌字符串
    let result = '';
    for (const card in countMap) {
      result += card.repeat(countMap[card]);
    }
    return result;
  };

  const remainingBigCards = useMemo(() => {
    let hawks = isEagle ? Array(pack).fill('Y').join('') : '';
    let allBigCards = hawks + Array(pack).fill('DX').join('');
    return subtractCards(allBigCards, bigCards[0], bigCards[1]);
  }, [isEagle, bigCards, pack]);

  const defaultPlayers = ['对门', '上家', '下家'].map((name, index) => ({
    id: index,
    name,
    cards: Array(3).fill(''),
    currentCardIndex: 2,
  }));

  // 初始化玩家数据
  useEffect(() => {
    setPlayers(defaultPlayers);
    return function () {};
  }, []);

  useEffect(() => {
    if (pack == 4) {
      setIsEagle(false);
    }
    return function () {};
  }, [pack]);
  
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
    if (currentPlayerIndex < 3) {
      setPlayers(
        produce(players, draft => {
          let p = draft[currentPlayerIndex];
          p.cards[p.currentCardIndex] += card;
        }),
      );
    } else {
      setBigCards(
        produce(bigCards, draft => {
          draft[currentPlayerIndex - 3] += card;
        }),
      );
    }
  };

  const onDeletePress = () => {
    setPlayers(
      produce(players, draft => {
        if (currentPlayerIndex < 3) {
          let p = draft[currentPlayerIndex];
          if (p.cards[p.currentCardIndex].length > 0) {
            p.cards[p.currentCardIndex] = p.cards[p.currentCardIndex].slice(
              0,
              -1,
            );
          }
        } else {
          setBigCards(
            produce(bigCards, draft => {
              draft[currentPlayerIndex - 3] = draft[
                currentPlayerIndex - 3
              ].slice(0, -1);
            }),
          );
        }
      }),
    );
  };

  const sum = useMemo(() => {
    return pack == 4 ? 33 : isEagle ? 51 : 50;
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
                <View style={styles.settingPanel}>
                  <Flex horizontal justify={'space-between'}>
                    <View>
                      <Text style={{ fontSize: 14, color: '#333' }}>
                        大牌统计（鹰、大王、小王）
                      </Text>
                      <View style={{ height: 4 }} />
                      <Text
                        style={{
                          fontSize: 14,
                          color: theme,
                        }}
                        numberOfLines={1}
                      >
                        {remainingBigCards}
                      </Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
                      onPress={() => {
                        setIsExpandBigCards(!isExpandBigCards);
                      }}
                    >
                      <Image
                        style={{ height: 16, width: 16, tintColor: theme }}
                        source={
                          isExpandBigCards
                            ? require('@src/assets/images/common/arrow_up.png')
                            : require('@src/assets/images/common/arrow_right.png')
                        }
                      />
                    </TouchableOpacity>
                  </Flex>
                  {isExpandBigCards ? (
                    <View style={{ marginTop: 5 }}>
                      <Flex horizontal style={{ gap: 12 }}>
                        {bigCards.map((it, i) => (
                          <TouchableOpacity
                            key={i}
                            activeOpacity={0.8}
                            style={[
                              styles.bigCardsItem,
                              {
                                borderColor:
                                  i + 3 == currentPlayerIndex ? theme : '#999',
                                flex: 1,
                              },
                            ]}
                            onPress={() => {
                              setCurrentPlayerIndex(i + 3);
                            }}
                          >
                            <Flex horizontal justify={'space-between'}>
                              <Text style={{ color: '#333', fontSize: 14 }}>
                                {['我的', '别人'][i]}
                              </Text>
                              <View style={{ width: 4 }} />
                              <Text
                                style={{ fontSize: 14, color: '#666', flex: 1 }}
                                ellipsizeMode={'head'}
                                numberOfLines={1}
                              >
                                {it || '--'}
                              </Text>
                            </Flex>
                          </TouchableOpacity>
                        ))}
                      </Flex>
                    </View>
                  ) : null}
                </View>
                <View style={{ height: 10 }} />
                <View style={{ flexDirection: 'row' }}>
                  <PlayerPanel
                    player={players[0]}
                    onPlayerPress={handlePlayerPress}
                    currentPalyerIndex={currentPlayerIndex}
                    sum={sum}
                    direction={'row'}
                  />
                </View>
                <View style={{ height: 6 }} />
                <View style={{ flexDirection: 'row' }}>
                  <PlayerPanel
                    player={players[1]}
                    onPlayerPress={handlePlayerPress}
                    currentPalyerIndex={currentPlayerIndex}
                    sum={sum}
                  />
                  <View style={{ width: 6 }} />
                  <PlayerPanel
                    player={players[2]}
                    onPlayerPress={handlePlayerPress}
                    currentPalyerIndex={currentPlayerIndex}
                    sum={sum}
                  />
                </View>
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
                        checked={pack == 4}
                        label={'4副牌'}
                        onPress={() => {
                          setPack(4);
                        }}
                      />
                      <CheckBox
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
  bigCardsItem: {
    flex: 1,
    borderRadius: 5,
    height: 32,
    paddingHorizontal: 10,
    borderColor: '#999',
    borderWidth: 1,
    justifyContent: 'center',
  },
});

export default Gouji;
