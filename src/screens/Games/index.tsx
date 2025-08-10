import GameItem from '@src/components/GameItem';
import ToolBar from '@src/components/ToolBar';
import { useCaches } from '@src/constants/store';
import React from 'react';
import {
  Alert,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStacksProp } from '../Screens';
import { produce } from 'immer';
import { Game } from '@src/constants/t';

interface MyProps {
  navigation?: RootStacksProp;
}

const Games: React.FC<MyProps> = props => {
  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });

  const { games, theme, setGames } = useCaches();
  const { navigation } = props;
  const onDelete = (item: Game) => {
    Alert.alert(
      '删除对局',
      `是否删除${item.id}该对局？`,
      [
        {
          text: '取消',
          style: 'cancel',
        },
        {
          text: '删除',
          onPress: () => {
            setGames(
              produce(games, draft => {
                const index = draft.findIndex(game => game.id === item.id);
                if (index !== -1) {
                  draft.splice(index, 1);
                }
              }),
            );
          },
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ToolBar
        title={'历史对局'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View style={{ height: 1, backgroundColor: '#eee' }} />
      <FlatList
        data={games}
        initialNumToRender={10}
        style={{ paddingHorizontal: 12 }}
        renderItem={info => (
          <GameItem
            key={info.index}
            data={info.item}
            onDelete={onDelete}
            onPress={it => {
              // @ts-ignore
              navigation.navigate(
                // @ts-ignore
                { bh: 'Baohuang', gj: 'Gouji' }[it.from],
                { id: it.id },
              );
            }}
          />
        )}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#eee' }} />
        )}
      />
      <View style={{ height: useSafeAreaInsets().bottom }} />
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  item: {
    marginVertical: 5,
    paddingHorizontal: 12,
  },
});
export default Games;
