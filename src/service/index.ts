import axios from 'axios';

const loadZPagingLibrary = (params: {
  pageNo: number;
  pageSize: number;
  delay: number;
}) => {
  console.log('loadZPagingLibrary: ', params);
  let instance = axios.create({
    baseURL: 'http://10.100.1.15:3000',
  });
  return instance.get('/api/public/testZPaging', { params });
};

export { loadZPagingLibrary };
