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

export { loadZPagingLibrary };
