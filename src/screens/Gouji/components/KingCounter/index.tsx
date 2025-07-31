import Flex from '@src/components/Flex';
import Stepper from '@src/components/Stepper';
import { useCaches } from '@src/constants/store';
import { vibrate } from '@src/constants/u';
import { produce } from 'immer';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MyProps {
  pack: number;
  me: string;
}

const KingCounter: React.FC<MyProps> = props => {
  const { pack, me } = props;
  const { theme, isKeyboardFeedback } = useCaches();
  const [datas, setDatas] = useState([]);

  const count = (key: string) => {
    let total = 0;
    for (let i = 0; i < me.length; i++) {
      if (me[i] === key) {
        total++;
      }
    }
    return total;
  };

  useEffect(() => {
    let kings = 'YDX'
      .split('')
      .map((it, i) => ({ id: i, key: it, sum: pack, me: count(it), other: 0 }));
    let er = { id: 3, key: '2', sum: pack * 4, me: count('2'), other: 0 };
    setDatas([...kings, er]);
    return function () {};
  }, [pack, me]);

  const onStep = (index: number, change: number) => {
    setDatas(
      produce(datas, draft => {
        draft[index].other += change;
      }),
    );
    isKeyboardFeedback && vibrate();
  };

  return (
    <View style={styles.container}>
      <Flex horizontal justify={'space-between'}>
        {datas.map((it, i) => (
          <Flex key={i}>
            <Text style={{ color: theme, fontSize: 20 }}>
              {it.sum - it.me - it.other}
            </Text>
            <Flex horizontal justify={'space-between'}>
              <Text style={{ fontSize: 14, color: '#333' }}>
                {
                  { Y: '🦅. 鹰', D: '🐓. 大王', X: '🐤. 小王', '2': '🥚. 2' }[
                    it.key
                  ]
                }
              </Text>
            </Flex>
            <View style={{ height: 4 }} />
            <Stepper
              value={it.other}
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
