import axios from 'axios';

const loadZPagingLibrary = (params: {
  pageNo: number;
  pageSize: number;
  delay: number;
}) => {
  console.log('loadZPagingLibrary: ', params);
  let instance = axios.create({
    baseURL: 'https://nuxt.cctv3.net',
  });
  return instance.get('/api/public/testZPaging', { params });
};

const loadClassesConfig = () => {
  // https://cdn.xiaopacai.cn/apps/cn.xiaopacai.duole/assets/1.jpg
  let instance = axios.create({
    baseURL: 'https://cdn.xiaopacai.cn',
  });
  return instance.get('/apps/cn.xiaopacai.duole/class.json');
};

export { loadZPagingLibrary, loadClassesConfig };
