import PlayerCards from '@src/components/PlayerCards';
import PlayerPanel from '@src/components/PlayerPanel';
import SoftKeyboard from '@src/components/SoftKeyboard';
import ToolBar from '@src/components/ToolBar';
import { Player } from '@src/constants/t';
import { produce } from 'immer';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { RootStacksProp } from '../Screens';

interface MyProps {
  navigation?: RootStacksProp;
}

const Baohuang: React.FC<MyProps> = props => {
  const { navigation } = props;
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  // 初始化玩家数据
  useEffect(() => {
    setPlayers(
      ['上联', '上家', '下家', '下联'].map((name, index) => ({
        id: index,
        name,
        cards: Array(3).fill(''),
        currentCardIndex: 2,
      })),
    );
    return function () {};
  }, []);

  const handlePlayerPress = (player: Player) => {
    // 处理玩家点击事件
    setCurrentPlayerIndex(player.id);
  };

  const onChildPanelPress = (index: number) => {
    setPlayers(
      produce(players, draft => {
        draft[currentPlayerIndex].currentCardIndex = index;
      }),
    );
  };

  const onKeyBoardPress = (card: string) => {
    setPlayers(
      produce(players, draft => {
        let p = draft[currentPlayerIndex];
        if (card == '10') {
          card = '0'; // 特殊处理10
        }
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
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <ToolBar
        title={'潍坊保皇'}
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
              <PlayerCards
                player={players[currentPlayerIndex]}
                onChildPanelPress={onChildPanelPress}
                sum={40}
              />
              <View style={{ height: 6 }} />
              <View style={{ paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <PlayerPanel
                    player={players[0]}
                    onPlayerPress={handlePlayerPress}
                    currentPalyerIndex={currentPlayerIndex}
                    sum={40}
                  />
                  <View style={{ width: 4 }} />
                  <PlayerPanel
                    player={players[3]}
                    onPlayerPress={handlePlayerPress}
                    currentPalyerIndex={currentPlayerIndex}
                    sum={40}
                  />
                </View>
                <View style={{ height: 4 }} />
                <View style={{ flexDirection: 'row' }}>
                  <PlayerPanel
                    player={players[1]}
                    onPlayerPress={handlePlayerPress}
                    currentPalyerIndex={currentPlayerIndex}
                    sum={40}
                  />
                  <View style={{ width: 4 }} />
                  <PlayerPanel
                    player={players[2]}
                    onPlayerPress={handlePlayerPress}
                    currentPalyerIndex={currentPlayerIndex}
                    sum={40}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <SoftKeyboard
        onKeyBoardPress={onKeyBoardPress}
        onDeletePress={onDeletePress}
      />
    </View>
  );
};

export default Baohuang;
