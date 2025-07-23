import {BottomSheeter, Flex} from '@src/components';
import {BottomSheeterRef} from '@src/components/BottomSheeter';
import {useCaches} from '@src/constants/store';
import {forwardRef, useCallback, useImperativeHandle, useRef} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MyProps {
  onConfirm: (index: number) => void;
}

export interface NewModalRef {
  open: () => void;
  close: () => void;
}

const NewModal = forwardRef<NewModalRef, MyProps>((props, ref) => {
  const {onConfirm} = props;
  const {theme} = useCaches();
  const bottomSheetRef = useRef<BottomSheeterRef>(null);
  const handleSheetChanges = useCallback((index: number) => {}, []);
  const menus = [
    {icon: require('./assets/lock.png'), label: '密码'},
    {icon: require('./assets/wallet.png'), label: '钱包'},
    {icon: require('./assets/mark.png'), label: '记事'},
  ];

  useImperativeHandle(ref, () => ({
    open() {
      bottomSheetRef.current?.open();
    },
    close() {
      bottomSheetRef.current?.close();
    },
  }));
  return (
    <BottomSheeter ref={bottomSheetRef}>
      <View
        style={{
          ...styles.view,
          paddingBottom: Platform.select({
            ios: Math.max(useSafeAreaInsets().bottom, 16),
            android: 16,
          }),
        }}>
        <Flex horizontal style={{gap: 12}}>
          {menus.map((it, i) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                onConfirm(i);
              }}
              key={i}
              style={{
                ...styles.botton,
                borderColor: theme,
              }}>
              <Image
                style={{
                  height: 18,
                  width: 18,
                  tintColor: theme,
                }}
                source={it.icon}
              />
              <View style={{width: 6}} />
              <Text
                style={{
                  fontSize: 12,
                  color: theme,
                }}>
                {it.label}
              </Text>
            </TouchableOpacity>
          ))}
        </Flex>
        {/* <View style={{height: 24}} />
        <Flex justify={'flex-end'} horizontal>
          <Button
            style={{
              height: x.scale(32),
              backgroundColor: theme,
              borderRadius: 15,
              paddingHorizontal: 12,
            }}
            textStyle={{fontSize: 14, color: '#fff'}}
            title={'下一步'}
            onPress={() => {
              onConfirm(index);
            }}
          />
        </Flex> */}
      </View>
    </BottomSheeter>
  );
});

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 15,
    margin: 0,
  },
  botton: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    borderColor: '#ccc',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
});
export default NewModal;
