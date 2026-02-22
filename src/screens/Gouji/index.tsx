import { RouteProp, useFocusEffect } from '@react-navigation/native';
import ToolBar from '@src/components/ToolBar';
import { useCaches } from '@src/constants/store';
import { GoujiPlayer } from '@src/constants/t';
import { fs } from '@src/constants/u';
import { produce } from 'immer';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStacksParams, RootStacksProp } from '../Screens';
import KingCounter from './components/KingCounter';
import Person from './components/Person';
import SoftKeyboard from '@src/components/SoftKeyboard';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Gouji'>;
}

const Gouji: React.FC<MyProps> = props => {
  const { navigation, route } = props;
  const [players, setPlayers] = useState<GoujiPlayer[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const { theme, pack, isEagle } = useCaches();
  const insets = useSafeAreaInsets();

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

    return function () {};
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        const latestPlayers = playersRef.current;
      };
    }, []),
  );

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

  const sum = pack == 4 ? 32 : isEagle ? 51 : 50;

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5', position: 'relative' }}>
      <ToolBar
        title={'够级'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      {players.length == 0 ? null : (
        <ScrollView bounces={false} style={{ flex: 1 }}>
          <View style={{ height: 10 }} />
          <KingCounter me={me} pack={pack} />
          <View style={{ height: 10 }} />
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Person
                player={players[0]}
                onPlayerPress={handlePlayerPress}
                currentPalyerIndex={currentPlayerIndex}
                sum={sum}
              />
            </View>
            <View style={{ height: 10 }} />
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Person
                player={players[1]}
                onPlayerPress={handlePlayerPress}
                currentPalyerIndex={currentPlayerIndex}
                sum={sum}
              />
              <View style={{ width: 10 }} />
              <Person
                player={players[2]}
                onPlayerPress={handlePlayerPress}
                currentPalyerIndex={currentPlayerIndex}
                sum={sum}
              />
            </View>
          </View>
          <View style={{ height: 10 }} />
        </ScrollView>
      )}
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

const styles = StyleSheet.create({
  meContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  meText: {
    fontSize: fs(14),
    color: '#666',
  },
});

export default Gouji;
