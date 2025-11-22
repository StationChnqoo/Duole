import axios, { AxiosInstance } from 'axios';

export class UniService {
  instance: AxiosInstance = null;
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://cctv3.net',
    });
  }
  
  async loadWxml(params: { path: string }) {
    let result = await this.instance.get(params.path);
    return result.data;
  }
}
