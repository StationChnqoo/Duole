import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useReducer,
  useState,
} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Footer from './components/Footer';
import NoData from './components/Empty';

interface MyProps {
  keyExtractor?: (item: any, index: number) => string;
  query: (currentPage: number, pageSize: number) => void;
  renderItem: (info: ListRenderItemInfo<any>) => React.ReactElement;
  style?: StyleProp<ViewStyle>;
  bounces?: boolean;
  extraData?: any;
  /** https://z-paging.zxlee.cn/api/props/common.html */
  defaultPageSize?: number;
  defaultPageNo?: number;
  delay?: number; // complete后延时处理
  // auto?: boolean; // mounted后，自动请求
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
    style,
    delay = 0,
    extraData,
    // auto,
    bounces = true,
  } = props;
  const [state, dispatch] = useReducer(
    (state: any, action: any) => {
      return {
        ...state,
        ...action,
      };
    },
    {
      pageSize: defaultPageSize,
      pageNo: defaultPageNo,
      loading: true,
      refreshing: false,
      hasNoMore: false,
    },
  );
  const [datas, setDatas] = useState<any[]>([]);
  // const pageNoRef = useRef(pageNo);

  useImperativeHandle(ref, () => ({
    reload: () => {
      if (state.pageNo == defaultPageNo) {
        // 当前页就是第一页
        query(state.pageNo, state.pageSize);
      } else {
        dispatch({ pageNo: defaultPageNo });
      }
    },
    complete: async (result: any[], noMore: boolean) => {
      if (delay > 0) {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(0);
          }, delay);
        });
      }
      dispatch({ hasNoMore: noMore, refreshing: false, loading: false });
      if (state.pageNo == 1) {
        setDatas(result);
      } else {
        setDatas([...datas, ...result]);
      }
    },
  }));

  const onEndReached = () => {
    if (state.loading || state.refreshing || state.hasNoMore) return;
    dispatch({ pageNo: state.pageNo + 1, loading: true });
  };

  useEffect(() => {
    console.log('Use effect state: ', state);
    query(state.pageNo, state.pageSize);
  }, [state.pageNo]);

  useEffect(() => {
    if (state.refreshing) {
      if (state.pageNo == defaultPageNo) {
        setDatas([]);
        query(state.pageNo, state.pageSize);
      } else {
        dispatch({ pageNo: defaultPageNo });
      }
    }
  }, [state.refreshing]);
  return (
    <FlatList
      style={[{ flex: 1 }, style]}
      data={datas}
      bounces={bounces}
      renderItem={renderItem}
      keyExtractor={keyExtractor || ((item, index) => `${item?.id}: ${index}`)}
      onEndReached={onEndReached}
      extraData={extraData}
      refreshControl={
        <RefreshControl
          refreshing={state.refreshing}
          onRefresh={() => {
            dispatch({ refreshing: true });
          }}
        />
      }
      // contentContainerStyle={{ flexGrow: 1 }}
      ListFooterComponent={
        <Footer laoding={state.loading} noMore={state.hasNoMore} />
      }
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
