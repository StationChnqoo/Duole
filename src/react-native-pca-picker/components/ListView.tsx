import { useEffect, useRef } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { ITEM_HEIGHT } from '../constants/c';
import { ListViewOption } from '../constants/t';

interface MyProps {
  data: ListViewOption[];
  onChange: (number: number) => void;
  activeItemContainerStyle?: StyleProp<ViewStyle>;
  inactiveItemContainerStyle?: StyleProp<ViewStyle>;
  activeItemStyle?: StyleProp<TextStyle>;
  inactiveItemStyle?: StyleProp<TextStyle>;
  index: number;
}

const ListView = (props: MyProps) => {
  const {
    index,
    data,
    onChange,
    activeItemContainerStyle,
    inactiveItemContainerStyle,
    activeItemStyle,
    inactiveItemStyle,
  } = props;
  const listView = useRef<FlatList>(null);

  useEffect(() => {
    setTimeout(() => {
      listView.current?.scrollToIndex({
        index: Math.max(0, index),
        animated: true,
        viewPosition: 0,
      });
    }, 1);

    return function () {};
  }, [index, data]);

  const renderItem = (info: ListRenderItemInfo<ListViewOption>) => {
    let checked = index == info.index;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          onChange(info.index);
        }}
        style={[
          styles.itemContainer,
          checked
            ? [styles.activeContainer, activeItemContainerStyle]
            : [styles.inactiveContainer, inactiveItemContainerStyle],
        ]}
      >
        <Text
          style={
            checked
              ? [styles.activeItem, activeItemStyle]
              : [styles.inactiveItem, inactiveItemStyle]
          }
          numberOfLines={1}
        >
          {info.item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={{ flex: 1 }}
      ref={listView}
      bounces={false}
      data={data}
      renderItem={renderItem}
      extraData={index}
      keyExtractor={(item, index) => `${item.value}: ${index}`}
      getItemLayout={(data, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
      ListFooterComponent={() => <View style={{ height: ITEM_HEIGHT * 5 }} />}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeContainer: {
    backgroundColor: '#e6f4ff',
    borderRadius: 4,
  },
  inactiveContainer: {},
  activeItem: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  inactiveItem: {
    fontSize: 14,
    color: '#999',
  },
});

export default ListView;
