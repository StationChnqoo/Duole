import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

// const mmkv = new MMKV({
//   id: 'useMMKV',
//   encryptionKey: 'net.cctv3.iCloud',
// });
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
  playedCardsMode: number;
  setPlayedCardsMode: (mode: number) => void;
  defaultGame: string;
  setDefaultGame: (game: string) => void;
  cardSound: boolean;
  setCardCound: (cardSoud: boolean) => void;
}

const initialState = {
  bears: 0,
  theme: '#987123',
  playedCardsMode: 0,
  defaultGame: 'bh',
  cardSound: true,
};

const useCaches = create<States>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        increase: by => set(state => ({ bears: state.bears + by })),
        setTheme: theme => set({ theme }),
        setPlayedCardsMode: playedCardsMode => set({ playedCardsMode }),
        setDefaultGame: defaultGame => set({ defaultGame }),
        setCardCound: cardSound => set({ cardSound }),
      }),
      {
        storage: createJSONStorage(() => mmkvStorage),
        name: 'useCaches.ts',
        /** 白名单 */
        partialize: state => ({
          bears: state.bears,
          theme: state.theme,
          playedCardsMode: state.playedCardsMode,
          defaultGame: state.defaultGame,
          cardSound: state.cardSound
        }),
      },
    ),
  ),
);

export { useCaches };
