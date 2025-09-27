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
  onChange: (item: ListViewOption) => void;
  activeItemContainerStyle?: StyleProp<ViewStyle>;
  inactiveItemContainerStyle?: StyleProp<ViewStyle>;
  activeItemStyle?: StyleProp<TextStyle>;
  inactiveItemStyle?: StyleProp<TextStyle>;
  value: string;
}

const ListView = (props: MyProps) => {
  const {
    value,
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
      let index = data.findIndex(it => it.value == value);
      listView.current?.scrollToIndex({
        index: Math.max(0, index),
        animated: true,
        viewPosition: 0,
      });
    }, 1);

    return function () {};
  }, [value, data]);

  const renderItem = (info: ListRenderItemInfo<ListViewOption>) => {
    let checked = value == info.item.value;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          onChange(info.item);
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
        >
          {info.item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      ref={listView}
      bounces={false}
      data={data}
      renderItem={renderItem}
      extraData={value}
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
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  inactiveItem: {
    fontSize: 16,
    color: '#999',
  },
});

export default ListView;
