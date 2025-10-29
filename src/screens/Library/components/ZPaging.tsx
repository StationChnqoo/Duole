import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface MyProps {
  keyExtractor?: (item: any, index: number) => string;
  query: (currentPage: number, pageSize: number) => void;
  renderItem: (info: ListRenderItemInfo<any>) => React.ReactElement;
  /** https://z-paging.zxlee.cn/api/props/common.html */
  defaultPageSize?: number;
  defaultPageNo?: number;
}

export interface ZPagingRef {
  reload: () => void;
  complete: (result: any[], noMore: boolean) => void;
}

const ZPaging = forwardRef<ZPagingRef, MyProps>((props, ref) => {
  const {
    keyExtractor,
    query,
    defaultPageSize = 10,
    defaultPageNo = 1,
    renderItem,
  } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize || 10);
  const [pageNo, setPageNo] = useState(defaultPageNo || 1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [hasNoMore, setHasNoMore] = useState(true);

  useImperativeHandle(ref, () => ({
    reload: () => {
      setCurrentPage(pageNo);
      query(pageNo, pageSize);
    },
    complete: (result: any[], noMore: boolean) => {
      setHasNoMore(noMore);
      console.log('ZPaging complete: ', { result, noMore });
      if (currentPage == 1) {
        setData(result);
      } else {
        setData([...data, ...result]);
      }
      setCurrentPage(t => t + 1);
      setHasNoMore(noMore);
    },
  }));

  const onEndReached = () => {
    if (hasNoMore) {
      return;
    }
    query(currentPage + 1, pageSize);
  };

  const onRefresh = () => {
    setCurrentPage(1);
    query(pageNo, pageSize);
  };

  useEffect(() => {
    query(pageNo, pageSize);
  }, [pageNo, pageSize]);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={
          keyExtractor || ((item, index) => `${item?.id}: ${index}`)
        }
        onEndReached={onEndReached}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        ListFooterComponent={() =>
          hasNoMore ? (
            <View>
              <Text>没有更多了</Text>
            </View>
          ) : (
            <ActivityIndicator />
          )
        }
        onEndReachedThreshold={0.2}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ZPaging;
