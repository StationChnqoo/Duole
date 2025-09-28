export const numPad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

export const optionsBuilder = (length: number, init?: number) => {
  return Array.from({ length }, (item, index) => ({
    label: numPad((init ?? 0) + index),
    value: numPad((init ?? 0) + index),
  }));
};
