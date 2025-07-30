import Flex from '@src/components/Flex';
import Stepper from '@src/components/Stepper';
import { useCaches } from '@src/constants/store';
import { vibrate } from '@src/constants/u';
import { produce } from 'immer';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MyProps {
  pack: number;
}

const KingCounter: React.FC<MyProps> = props => {
  const { pack } = props;
  const { theme, isKeyboardFeedback } = useCaches();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    let kings = 'YDX'
      .split('')
      .map((it, i) => ({ id: i, key: it, value: pack }));
    let er = { id: 3, key: '2', value: pack * 4 };
    setDatas([...kings, er]);
    return function () {};
  }, [pack]);

  const onStep = (index: number, change: number) => {
    setDatas(
      produce(datas, draft => {
        draft[index].value += change;
      }),
    );
    isKeyboardFeedback && vibrate();
  };

  return (
    <View style={styles.container}>
      <Flex horizontal justify={'space-between'}>
        {datas.map((it, i) => (
          <Flex key={i}>
            <Flex horizontal justify={'space-between'}>
              <Text style={{ fontSize: 14, color: '#333' }}>
                {
                  { Y: '鹰 🦅', D: '大王 🐓', X: '小王 🐤', '2': '2 🥚' }[
                    it.key
                  ]
                }
              </Text>
            </Flex>
            <View style={{ height: 2 }} />
            <Stepper
              value={it.value}
              onChange={t => {
                onStep(i, t);
              }}
            />
          </Flex>
        ))}
      </Flex>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    position: 'relative',
  },
  border: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default KingCounter;
