export interface BaohuangPlayer {
  id: number;
  name: string;
  cards: string[]; // 进贡 吃贡 手牌
  currentCardIndex: number; // 当前出牌的索引 --> cards[currentCardIndex]
}

export interface GoujiPlayer {
  id: number;
  name: string;
  cards: string;
  error?: number;
  currentCardIndex: number; // 当前出牌的索引 --> cards[currentCardIndex]
}

export interface Game {
  id: string;
  time: number;
  from: string;
  players: GoujiPlayer[] | BaohuangPlayer[];
}

export interface KeyValue {
  key: string;
  value: string | number;
}

export interface ClassItem {
  /** 教程唯一标识ID */
  id: number;
  /** 教程标题 */
  title: string;
  /** 教程内容描述 */
  content: string;
  /** 游戏类型，bh表示保皇 */
  game: string;
  /** 缩略图URL */
  thumbnail: string;
  /** 哔哩哔哩链接，可能为空字符串 */
  biLink: string;
  /** 抖音链接，可能为空字符串 */
  douLink: string;
}
