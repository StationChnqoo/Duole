import axios from 'axios';

const loadZPagingLibrary = (params: { page: number; size: number }) => {
    console.log('loadZPagingLibrary: ', params);
  let instance = axios.create({
    baseURL: 'http://192.168.0.102:3000',
    timeout: 10000,
  });
  return instance.get('/api/public/testZPaging', { params });
};

export { loadZPagingLibrary };
