import { useCaches } from '@src/constants/store';
import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStacksProp } from '../Screens';
import Inputs from './components/Inputs';
import { KeyValue } from '@src/constants/t';
import SoftKeyboard from '@src/components/SoftKeyboard';
import { produce } from 'immer';
import { uuid } from '@src/constants/u';
import { useAtom } from 'jotai';
import {
  countAtom,
  persistCountAtom,
  persistStudentAtom,
  studentAtom,
} from '@src/constants/atoms';

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

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height, backgroundColor: '#fff' }} />
      <ScrollView style={{ paddingHorizontal: 12 }}>
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
      </ScrollView>
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
