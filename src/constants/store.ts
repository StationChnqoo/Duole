import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';
import { Game, KeyValue } from './t';

const mmkv = new MMKV();
const mmkvStorage: StateStorage = {
  setItem: (key, value) => mmkv.set(key, value),
  getItem: key => mmkv.getString(key) || null,
  removeItem: key => mmkv.delete(key),
};

interface States {
  bears: number;
  increase: (by: number) => void;
  theme: string;
  setTheme: (theme: string) => void;
  defaultGame: string;
  setDefaultGame: (game: string) => void;
  cardSound: boolean;
  setCardCound: (cardSoud: boolean) => void;
  isKeyboardFeedback: boolean;
  setIsKeyboardFeedback: (isKeyboardFeedback: boolean) => void;
  games: Game[];
  setGames: (games: Game[]) => void;
  freeUsed: KeyValue;
  setFreeUsed: (freeUsed: KeyValue) => void;
  autoRevertGame: boolean;
  setAutoRevertGame: (autoRevertGame: boolean) => void;
  pack: number;
  setPack: (pack: number) => void;
  isEagle: boolean; // 是否带鹰
  setIsEagle: (isEagle: boolean) => void;
  gameArea: string; // 'wf' | 'fk'; // 潍坊 | 疯狂
  setGameArea: (gameArea: 'wf' | 'fk') => void;
}

const initialState = {
  bears: 0,
  theme: '#987123',
  defaultGame: 'bh',
  cardSound: true,
  isKeyboardFeedback: true,
  games: [],
  freeUsed: { key: '2025-07-26', value: 0 },
  autoRevertGame: true,
  pack: 4,
  isEagle: true, // 默认带鹰
  gameArea: 'wf', // 默认潍坊
};

const useCaches = create<States>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        increase: by => set(state => ({ bears: state.bears + by })),
        setTheme: theme => set({ theme }),
        setDefaultGame: defaultGame => set({ defaultGame }),
        setCardCound: cardSound => set({ cardSound }),
        setIsKeyboardFeedback: isKeyboardFeedback =>
          set({ isKeyboardFeedback }),
        setGames: games => set({ games }),
        setFreeUsed: freeUsed => set({ freeUsed }),
        setAutoRevertGame: autoRevertGame => set({ autoRevertGame }),
        setPack: pack => set({ pack }),
        setIsEagle: isEagle => set({ isEagle }),
        setGameArea: gameArea => set({ gameArea }),
      }),
      {
        storage: createJSONStorage(() => mmkvStorage),
        name: 'useCaches.ts',
        /** 白名单 */
        partialize: state => ({
          bears: state.bears,
          theme: state.theme,
          defaultGame: state.defaultGame,
          cardSound: state.cardSound,
          isKeyboardFeedback: state.isKeyboardFeedback,
          games: state.games,
          freeUsed: state.freeUsed,
          pack: state.pack,
          isEagle: state.isEagle,
          autoRevertGame: state.autoRevertGame,
          gameArea: state.gameArea,
        }),
      },
    ),
  ),
);

export { useCaches };
