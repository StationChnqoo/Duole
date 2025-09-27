import {
  countAtom,
  persistCountAtom,
  persistStudentAtom,
  studentAtom,
} from '@src/constants/atoms';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
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
import { DatePicker, TimePicker } from '@src/react-native-datetime-pickers';

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
      <TimePicker
        time={[H, Hm, Hms][index]}
        show={isShowTimePicker}
        onCancel={() => setIsShowTimePicker(false)}
        onHide={() => {}}
        onConfirm={s => {
          setIsShowTimePicker(false);
          [setH, setHm, setHms][index](s);
        }}
      />
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
      <DatePicker
        date={[Y, Ym, Ymd][index]}
        show={isShowDatePicker}
        onCancel={() => setIsShowDatePicker(false)}
        onHide={() => {}}
        onConfirm={s => {
          setIsShowDatePicker(false);
          [setY, setYm, setYmd][index](s);
        }}
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
