import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { MMKV } from 'react-native-mmkv';

interface SyncStorage<T> {
  getItem: (key: string) => T | null;
  setItem: (key: string, value: T) => void;
  removeItem: (key: string) => void;
}

const mmkv = new MMKV();
const mmkvStorage: SyncStorage<any> = {
  setItem: (key, value) => mmkv.set(key, JSON.stringify(value)), // 序列化
  getItem: key => {
    const json = mmkv.getString(key);
    return json ? JSON.parse(json) : null; // 反序列化
  },
  removeItem: key => mmkv.delete(key),
};

export const countAtom = atom(0);
export const persistCountAtom = atomWithStorage<number>(
  'count',
  0,
  createJSONStorage<number>(() => mmkvStorage),
);

export interface Student {
  name: string;
  id: number;
}

export const studentAtom = atom({ name: '张三', id: 1 });

export const persistStudentAtom = atomWithStorage<Student>(
  'student',
  {
    name: '李四',
    id: 1,
  },
  createJSONStorage<Student>(() => mmkvStorage),
);
