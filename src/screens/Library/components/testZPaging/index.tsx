import ZPaging, { ZPagingRef } from '@src/react-native-z-paging';
import { loadZPagingLibrary } from '@src/service';
import { fs } from '@src/constants/u';
import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface MyProps {}

const TestZPaging: React.FC<MyProps> = props => {
  const {} = props;
  const paging = useRef<ZPagingRef>(null);
  const [tabSmall, setTabSmall] = useState('a');
  const [tabBig, setTabBig] = useState('A');
  const params = useState({
    pageNo: 1,
    pageSize: 10,
    delay: 1000,
  });

  const query = async (currentPage: number, pageSize: number) => {
    let result = await loadZPagingLibrary({
      pageNo: currentPage,
      pageSize: pageSize,
      delay: 1000,
    });
    console.log('ZPaging: ', result.data.data.records);
    let { records, totalPage } = result.data.data;
    paging.current?.complete(records, currentPage >= totalPage);
  };

  useEffect(() => {
    paging.current?.reload();
  }, [tabSmall]);

  const renderItem = (info: ListRenderItemInfo<any>) => {
    const { item, index } = info;
    return (
      <View style={styles.item}>
        <Image
          source={{ uri: item.thumbnail }}
          style={{ width: 72, height: 72, borderRadius: 5 }}
        />
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <Text style={{ fontSize: fs(16), fontWeight: '500', color: '#333' }}>
            {item.index}.{item.title}
          </Text>
          <Text style={{ fontSize: fs(14), color: '#666' }} numberOfLines={2}>
            {item.content}
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Text style={{ fontSize: fs(12), color: '#999' }}>
              {item.createdAt}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    setTabSmall('a');
  }, [tabBig]);

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <View style={styles.buttons}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => setTabBig('A')}>
          <Text style={{ color: tabBig == 'A' ? 'red' : 'black' }}>Tab/A</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => setTabBig('B')}>
          <Text style={{ color: tabBig == 'B' ? 'red' : 'black' }}>Tab/B</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            paging.current?.reload();
          }}
        >
          <Text>F: reload</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => setTabSmall('a')}>
          <Text style={{ color: tabSmall == 'a' ? 'red' : 'black' }}>
            Tab → a
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => setTabSmall('b')}>
          <Text style={{ color: tabSmall == 'b' ? 'red' : 'black' }}>
            Tab → b
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => setTabSmall('c')}>
          <Text style={{ color: tabSmall == 'c' ? 'red' : 'black' }}>
            Tab → c
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 2 }} />
      <ZPaging
        ref={paging}
        query={query}
        renderItem={renderItem}
        defaultPageSize={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 12,
  },
});

export default TestZPaging;
