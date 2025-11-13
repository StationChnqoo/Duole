import { useRef, useState } from 'react';
import { View } from 'react-native';

export const useMeasure = () => {
  const viewRef = useRef<View>(null);
  const [y, setY] = useState(0);
  const measure = () => {
    viewRef.current.measure((x, y, width, height, pageX, pageY) => {
      console.log(pageY);
    });
  };
  return { y };
};
