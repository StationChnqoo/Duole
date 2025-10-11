import {
  countAtom,
  persistCountAtom,
  persistStudentAtom,
  studentAtom,
} from '@src/constants/atoms';
import { useAtom } from 'jotai';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStacksProp } from '../Screens';
import {
  PcaPicker,
  DatePicker,
  TimePicker,
} from '@src/components/react-native-pickers';

interface MyProps {
  navigation?: RootStacksProp;
}

const Find: React.FC<MyProps> = props => {
  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });
  const [count, setCount] = useAtom(countAtom);
  const [persistCount, setPersistCount] = useAtom(persistCountAtom);
  const [student, setStudent] = useAtom(studentAtom);
  const [persistStudent, setPersistStudent] = useAtom(persistStudentAtom);

  const [index, setIndex] = useState(0);
  const [H, setH] = useState('12');
  const [Hm, setHm] = useState('12:34');
  const [Hms, setHms] = useState('12:34:56');

  const [Y, setY] = useState('1995');
  const [Ym, setYm] = useState('1995-10');
  const [Ymd, setYmd] = useState('1995-10-06');
  const [isShowTimePicker, setIsShowTimePicker] = useState(false);
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);
  const [isShowPcaPicker, setIsShowPcaPicker] = useState(false);
  const [code, setCode] = useState('370687');

  const findByCode = (pca: any[], code: string) => {
    for (let i = 0; i < pca.length; i++) {
      let item = pca[i];
      if (item.code == code) {
        return item;
      } else if (item?.children) {
        return findByCode(item.children, code);
      }
    }
  };

  const flat = (array: any[]) => {
    return array.reduce((result, it) => {
      const { children, ...rest } = it; // 去掉 children
      result.push(rest);
      if (Array.isArray(children) && children.length) {
        result.push(...flat(children));
      }
      return result;
    }, [] as any[]);
  };

  useEffect(() => {
    let codes = ['37', '2108', '320583'];
    // for (let i = 0; i < codes.length; i++) {
    //   let start = new Date().getTime();
    //   let result = findByCode([...Pca], codes[i]);
    //   let end = new Date().getTime();
    //   console.log('Code: ', { result, time: end - start + 'ms' });
    // }
    return function () {};
  }, []);

  return (
    <View style={{ flex: 1, paddingHorizontal: 12 }}>
      <View style={{ height, backgroundColor: '#fff' }} />
      <TouchableOpacity
        onPress={() => {
          setCount(t => t + 1);
        }}
      >
        <Text>Count: {count}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setPersistCount(t => t + 1);
        }}
      >
        <Text>Count with persist: {persistCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setStudent(t => ({ ...t, id: t.id + 1 }));
        }}
      >
        <Text>Student: {JSON.stringify(student)}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setPersistStudent(t => ({ ...t, id: t.id + 1 }));
        }}
      >
        <Text>Student with persist: {JSON.stringify(persistStudent)}</Text>
      </TouchableOpacity>
      {[H, Hm, Hms].map((it, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => {
            setIndex(i);
            setIsShowTimePicker(true);
          }}
        >
          <Text>Choose time: {it}</Text>
        </TouchableOpacity>
      ))}
      {[Y, Ym, Ymd].map((it, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => {
            setIndex(i);
            setIsShowDatePicker(true);
          }}
        >
          <Text>Choose date: {it}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        onPress={() => {
          setIsShowPcaPicker(true);
        }}
      >
        <Text>Choose pca: {code}</Text>
      </TouchableOpacity>
      <TimePicker
        time={[H, Hm, Hms][index]}
        show={isShowTimePicker}
        onCancel={() => setIsShowTimePicker(false)}
        onHide={() => {}}
        activeItemStyle={{ fontSize: 16 }}
        onConfirm={s => {
          setIsShowTimePicker(false);
          [setH, setHm, setHms][index](s);
        }}
      />
      <DatePicker
        date={[Y, Ym, Ymd][index]}
        show={isShowDatePicker}
        activeItemStyle={{ fontSize: 16 }}
        onCancel={() => setIsShowDatePicker(false)}
        onHide={() => {}}
        onConfirm={s => {
          setIsShowDatePicker(false);
          [setY, setYm, setYmd][index](s);
        }}
      />
      <PcaPicker
        code={code}
        show={isShowPcaPicker}
        onCancel={() => setIsShowPcaPicker(false)}
        onHide={() => {}}
        onConfirm={s => {}}
        activeItemStyle={{ fontSize: 14 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  item: {
    marginVertical: 5,
  },
});
export default Find;
