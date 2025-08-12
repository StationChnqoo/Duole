import { useCaches } from '@src/constants/store';
import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStacksProp } from '../Screens';
import Inputs from './components/Inputs';
import { KeyValue } from '@src/constants/t';
import SoftKeyboard from '@src/components/SoftKeyboard';
import { produce } from 'immer';
import { uuid } from '@src/constants/u';

interface MyProps {
  navigation?: RootStacksProp;
}

const Find: React.FC<MyProps> = props => {
  const height = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
  });

  const { games, theme } = useCaches();
  const { navigation } = props;
  const [currentIndex, setCurrentIndex] = useState<string>('0');
  const [license, setLicense] = useState<KeyValue[]>(
    Array.from({ length: 8 }, (_, i) => ({
      key: i + '',
      value: '',
    })),
  );

  const onDeletePress = () => {
    setLicense(
      produce(license, draft => {
        draft[parseInt(currentIndex, 10)].value = '';
      }),
    );
    setCurrentIndex(
      (Math.max(0, parseInt(currentIndex, 10) - 1) % license.length).toString(),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height }} />
      <ScrollView style={{ paddingHorizontal: 12 }}>
        {Array.from({ length: 20 }, (_, i) => (
          <View key={i} style={[styles.item]}>
            <Text>还有更多内容：{uuid()}</Text>
          </View>
        ))}
        <Text style={{ color: '#333', fontSize: 16 }}>请输入车牌</Text>
        <View style={{ height: 12 }} />
        <Inputs
          license={license}
          currentIndex={currentIndex}
          onPress={kv => {
            setCurrentIndex(kv.key);
          }}
        />
        <View style={{ height: 12 }} />
      </ScrollView>
      <SoftKeyboard
        onKeyBoardPress={key => {
          setLicense(
            produce(license, draft => {
              draft[parseInt(currentIndex, 10)].value = key;
            }),
          );
          setCurrentIndex(
            ((parseInt(currentIndex, 10) + 1) % license.length).toString(),
          );
        }}
        onDeletePress={onDeletePress}
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
