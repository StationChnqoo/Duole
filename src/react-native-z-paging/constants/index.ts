import { ListRenderItemInfo } from 'react-native';

export interface ZPagingConstants {
  reload: () => void;
  complete: (result: any[], noMore: boolean) => void;
}

export interface ZPagingProps {
  keyExtractor?: (item: any, index: number) => string;
  query: (currentPage: number, pageSize: number) => void;
  renderItem: (info: ListRenderItemInfo<any>) => React.ReactElement;
  /** https://z-paging.zxlee.cn/api/props/common.html */
  defaultPageSize?: number;
  defaultPageNo?: number;
}
