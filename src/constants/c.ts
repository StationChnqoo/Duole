/**
 * 3A 4K 5Q 6A 7K 8Q 9A J2 拼接数量
 * @param input
 * @returns
 */
export const parseCard3Groups = (input: string): string => {
  const tokens = input.trim().toUpperCase().split('#');
  let result = '';
  for (const token of tokens) {
    if (token.length >= 2) {
      const card = token.slice(-1); // 最后一位是牌名
      const countStr = token.slice(0, -1); // 前面是数量
      const count = parseInt(countStr, 10);

      if (!isNaN(count) && /^[A-Z0-9]$/.test(card)) {
        result += card.repeat(count);
        continue;
      }
    } else if (token.length === 1 && /^[A-Z0-9]$/.test(token)) {
      // 单个字符，默认数量为 1
      result += token;
      continue;
    }
    // fallback：原样添加
    result += token;
  }
  return result;
};

/**
 * 34567890JQK2A 牌面剩余
 * @param playedCards
 * @returns
 */
export const calcRemainingRanks = (playedCards: string) => {
  const allRanks = '34567890JQKA2'.split('');
  const groups = playedCards.toUpperCase().trim().split('#');
  const used = new Set<string>();
  for (const group of groups) {
    const card = group.slice(-1); // 每组最后一个字符为牌名
    if (allRanks.includes(card)) {
      used.add(card);
    }
  }
  // return allRanks.filter(rank => !used.has(rank)).join('');
  return allRanks.map(rank => (used.has(rank) ? ' ' : rank)).join('');
};

/**
 *
 * @returns
 */
export const buildRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`;
};

/**
 * Hex -> rgba
 * @param hex 
 * @param alpha 
 * @returns 
 */
export const hexToRgba = (hex: string, alpha = 1) => {
  // 去除 # 号
  hex = hex.replace('#', '');
  // 解析 R, G, B
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
