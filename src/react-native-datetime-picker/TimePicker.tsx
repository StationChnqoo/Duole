import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import Footer from './components/Footer';
import Header from './components/Header';
import ListView from './components/ListView';
import {
  CommonModalAnimationConfig,
  CommonStyles,
  ITEM_HEIGHT,
  Strings,
} from './constants/c';
import { CommonPickerModalProps } from './constants/t';
import { optionsBuilder } from './constants/u';

interface MyProps {
  time: string;
}

const TimePicker = (props: MyProps & CommonPickerModalProps) => {
  const {
    show,
    onCancel,
    onHide,
    onConfirm,
    time,
    title,
    nowButotn,
    cancelButton,
    confirmButton,
    activeItemStyle,
    activeItemContainerStyle,
    inactiveItemContainerStyle,
    inactiveItemStyle,
    useNativeDriver,
  } = props;

  const [array, setArray] = useState<string[]>([]);

  const current = useMemo(() => {
    return array.join(':');
  }, [array]);

  const onChange = (index: number, item: string) => {
    let _array = [...array];
    _array[index] = item;
    setArray(_array);
  };

  const onShow = () => {
    setArray((time ?? '').split(':'));
  };

  const onNow = () => {
    const format = ['HH', 'HH:mm', 'HH:mm:ss'][array.length - 1];
    setArray(dayjs().format(format).split(':'));
  };

  return (
    <Modal
      isVisible={show}
      style={styles.views}
      onDismiss={onCancel}
      onModalHide={onHide}
      onBackdropPress={onCancel}
      {...CommonModalAnimationConfig}
      onShow={onShow}
      hideModalContentWhileAnimating={true}
      useNativeDriver={useNativeDriver}
      onBackButtonPress={onCancel}
    >
      <View style={CommonStyles.modalView}>
        <Header title={title || Strings.PleaseSelectTime} />
        <View
          style={{ flexDirection: 'row', gap: 12, height: ITEM_HEIGHT * 6 }}
        >
          {array.map((it, i) => {
            return (
              <ListView
                key={i}
                data={optionsBuilder([24, 60, 60][i])}
                onChange={item => {
                  onChange(i, item.value);
                }}
                value={it}
                activeItemStyle={activeItemStyle}
                activeItemContainerStyle={activeItemContainerStyle}
                inactiveItemContainerStyle={inactiveItemContainerStyle}
                inactiveItemStyle={inactiveItemStyle}
              />
            );
          })}
        </View>
        <View style={CommonStyles.line} />
        <Footer
          onCancel={onCancel}
          onNow={onNow}
          onConfirm={() => onConfirm(current)}
          confirmButton={confirmButton}
          cancelButton={cancelButton}
          nowButotn={nowButotn}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  views: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TimePicker;
