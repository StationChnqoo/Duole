import { RouteProp } from '@react-navigation/native';
import ToolBar from '@src/components/ToolBar';
import React, { createRef, useRef, useState } from 'react';
import { ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import { RootStacksParams, RootStacksProp } from '../Screens';
import ZPaging, { ZPagingRef } from './components/ZPaging';
import { loadZPagingLibrary } from '@src/service';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Library'>;
}

const Library: React.FC<MyProps> = props => {
  const { navigation } = props;
  const paging = useRef<ZPagingRef>(null);

  const query = async (currentPage: number, pageSize: number) => {
    let result = await loadZPagingLibrary({
      page: currentPage,
      size: pageSize,
    });
    console.log('ZPaging: ', result.data.data.records);
    let { records, total } = result.data.data;
    paging.current?.complete(records, currentPage > total);
  };

  const renderItem = (info: ListRenderItemInfo<any>) => {
    const { item, index } = info;
    return (
      <Text>
        {item.index}.{item.title}
      </Text>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <ToolBar
        title={'实验室'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <ZPaging
        ref={paging}
        query={query}
        renderItem={renderItem}
        defaultPageSize={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Library;
