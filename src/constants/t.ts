export interface Player {
  id: number;
  name: string;
  cards: string[]; // 进贡 吃贡 手牌
  currentCardIndex: number; // 当前出牌的索引 --> cards[currentCardIndex]
}

export interface Game {
  id: string;
  time: string;
  from: string;
  players: Player[];
}
