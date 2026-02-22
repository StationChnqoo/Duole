import Flex from '@src/components/Flex';
import Stepper from '@src/components/Stepper';
import { useCaches } from '@src/constants/store';
import { vibrate, fs, dip2px } from '@src/constants/u';
import { produce } from 'immer';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
    let kings = ['鹰', '大王', '小王'].map((it, i) => ({
      id: i,
      key: it,
      sum: pack,
      me: count(it),
      other: 0,
    }));
    let er = { id: 3, key: '2', sum: pack * 4, me: count('2'), other: 0 };
    let other = ['A', 'K', 'Q', 'J'].map(it => ({
      id: it.charCodeAt(0),
      key: it,
      sum: pack * 4,
      me: count(it),
      other: 0,
    }));
    setDatas([...kings, er, ...other]);
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
            <Text style={{ color: theme, fontSize: fs(20) }}>
              {it.sum - it.me - it.other}
            </Text>
            <View style={{ height: 4 }} />
            <Flex horizontal justify={'space-between'}>
              <Text style={{ fontSize: fs(14), color: '#333' }}>{it.key}</Text>
            </Flex>
            <View style={{ height: 4 }} />
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.button, { backgroundColor: theme }]}
              onPress={() => {
                onStep(i, 1);
              }}
            >
              <Text style={{ color: '#fff', fontSize: fs(14) }}>减1</Text>
            </TouchableOpacity>
          </Flex>
        ))}
      </Flex>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  border: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: dip2px(32),
    width: dip2px(32),
    borderRadius: dip2px(16),
  },
});

export default KingCounter;
