import PlayerPanel from '@src/components/PlayerPanel';
import SoftKeyboard from '@src/components/SoftKeyboard';
import ToolBar from '@src/components/ToolBar';
import { Player } from '@src/constants/t';
import { produce } from 'immer';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStacksProp } from '../Screens';

interface MyProps {
  navigation?: RootStacksProp;
}

const Gouji: React.FC<MyProps> = props => {
  const { navigation } = props;
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [bigCards, setBigCards] = useState<string[]>(Array(3).fill('')); // 大牌统计
  const [isEagle, setIsEagle] = useState(false); // 是否带鹰
  const [bigCardIndex, setBigCardIndex] = useState(1); // 当前大牌索引

  // 初始化玩家数据
  useEffect(() => {
    setPlayers(
      ['对门', '上家', '下家'].map((name, index) => ({
        id: index,
        name,
        cards: Array(3).fill(''),
        currentCardIndex: 2,
      })),
    );
    return function () {};
  }, []);

  useEffect(() => {
    // 初始化大牌统计
    setBigCards(
      produce(bigCards, draft => {
        let hawks = isEagle ? Array(6).fill('Y').join('') : '';
        draft[0] = hawks + Array(4).fill('DX').join('');
      }),
    );
  }, [isEagle]);

  const handlePlayerPress = (player: Player, index: number) => {
    // 处理玩家点击事件
    setCurrentPlayerIndex(player.id);
    setPlayers(
      produce(players, draft => {
        draft[player.id].currentCardIndex = index;
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
    return isEagle ? 51 : 50;
  }, [isEagle]);

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <ToolBar
        title={'6副牌够级'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View style={{ height: 2 }} />
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
              {/* <PlayerCards
                player={players[currentPlayerIndex]}
                onChildPanelPress={onChildPanelPress}
                sum={sum}
              />
              <View style={{ height: 6 }} /> */}
              <View style={{ paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <PlayerPanel
                    player={players[0]}
                    onPlayerPress={handlePlayerPress}
                    currentPalyerIndex={currentPlayerIndex}
                    sum={sum}
                  />
                  <View style={{ width: 5 }} />
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
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Text style={{ fontSize: 14, color: '#666' }}>
                        是否带鹰🦅
                      </Text>
                      <Switch
                        value={isEagle}
                        onValueChange={value => {
                          setIsEagle(value);
                        }}
                        trackColor={{ false: '#ccc', true: '#ff5252' }}
                        thumbColor={isEagle ? '#fff' : '#f4f3f4'}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ height: 5 }} />
                <View style={{ flexDirection: 'row' }}>
                  <PlayerPanel
                    player={players[1]}
                    onPlayerPress={handlePlayerPress}
                    currentPalyerIndex={currentPlayerIndex}
                    sum={sum}
                  />
                  <View style={{ width: 5 }} />
                  <PlayerPanel
                    player={players[2]}
                    onPlayerPress={handlePlayerPress}
                    currentPalyerIndex={currentPlayerIndex}
                    sum={sum}
                  />
                </View>
                <View style={{ height: 5 }} />
                <View style={styles.settingPanel}>
                  <Text>大牌统计（鹰、大王、小王、2）</Text>
                  <View style={{ height: 5 }} />
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 12,
                    }}
                  >
                    {bigCards.map((it, i) => (
                      <TouchableOpacity
                        style={[
                          styles.bigCardsItem,
                          {
                            borderColor: i == bigCardIndex ? '#ff5252' : '#999',
                            flex: i == 0 ? 2 : 1,
                          },
                        ]}
                        key={i}
                        onPress={() => {
                          setBigCardIndex(i);
                        }}
                        disabled={i == 0}
                      >
                        <Text style={{ color: '#333', fontSize: 14 }}>
                          {['全局剩余', '我的', '别人'][i]}
                        </Text>
                        <View style={{ height: 4 }} />
                        <Text style={{ fontSize: 12, color: '#666' }}>
                          {bigCards[i] || '--'}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          )}
          <View style={{ height: Dimensions.get('screen').width }} />
        </View>
      </ScrollView>
      <SoftKeyboard
        onKeyBoardPress={onKeyBoardPress}
        onDeletePress={onDeletePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingPanel: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 12,
  },
  bigCardsItem: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#999',
    borderWidth: 1,
  },
});
export default Gouji;
