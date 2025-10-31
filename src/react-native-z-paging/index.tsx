import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import Footer from './components/Footer';
import NoData from './components/Empty';

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
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [pageNo, setPageNo] = useState(defaultPageNo);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [hasNoMore, setHasNoMore] = useState(false);
  // const pageNoRef = useRef(pageNo);

  useImperativeHandle(ref, () => ({
    reload: () => {
      setData([]);
      if (pageNo == 1) {
        // 当前页就是第一页
        query(pageNo, pageSize);
      } else {
        setPageNo(defaultPageNo);
      }
    },
    complete: (result: any[], noMore: boolean) => {
      setHasNoMore(noMore);
      if (pageNo == 1) {
        setData(result);
      } else {
        setData(t => [...t, ...result]);
      }
      setRefreshing(false);
      setLoading(false);
    },
  }));

  const onEndReached = () => {
    if (loading || refreshing || hasNoMore) return;
    setPageNo(t => t + 1);
  };

  useEffect(() => {
    if (pageNo == 1) {
      setData([]);
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    query(pageNo, pageSize);
  }, [pageNo]);

  return (
    <FlatList
      style={{ flex: 1 }}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor || ((item, index) => `${item?.id}: ${index}`)}
      onEndReached={onEndReached}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setPageNo(defaultPageNo);
          }}
        />
      }
      // contentContainerStyle={{ flexGrow: 1 }}
      ListFooterComponent={<Footer laoding={loading} noMore={hasNoMore} />}
      ListEmptyComponent={<NoData />}
      onEndReachedThreshold={0.2}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ZPaging;
