import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import Footer from './components/Footer';
import Header from './components/Header';
import ListView from './components/ListView';
import {
  CommonDialogAnimationConfig,
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

  const [array, setArray] = useState<number[]>([]);

  const options = [24, 60, 60].map((it, i) => optionsBuilder(it));

  const current = () => {
    console.log(array, options);
    return array.map((it, i) => options?.[i]?.[it]?.value).join(':');
  };

  const onChange = (listIndex: number, itemIndex: number) => {
    let _array = [...array];
    _array[listIndex] = itemIndex;
    setArray(_array);
  };

  const timeString2Array = (t: string) => {
    let times = (t ?? '').split(':');
    return times.map(it => Number(it));
  };

  const onShow = () => {
    setArray(timeString2Array(time));
  };

  const onNow = () => {
    const format = ['HH', 'HH:mm', 'HH:mm:ss'][array.length - 1];
    setArray(timeString2Array(dayjs().format(format)));
  };

  return (
    <Modal
      isVisible={show}
      style={styles.views}
      onDismiss={onCancel}
      onModalHide={onHide}
      onBackdropPress={onCancel}
      {...CommonDialogAnimationConfig}
      onShow={onShow}
      hideModalContentWhileAnimating={true}
      useNativeDriver={useNativeDriver}
      onBackButtonPress={onCancel}
    >
      <View style={CommonStyles.dialogView}>
        <Header title={title || Strings.PleaseSelectTime} preview={current()} />
        <View
          style={{ flexDirection: 'row', gap: 12, height: ITEM_HEIGHT * 6 }}
        >
          {array.map((it, i) => {
            return (
              <ListView
                key={i}
                data={optionsBuilder([24, 60, 60][i])}
                onChange={index => {
                  onChange(i, index);
                }}
                index={it}
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
          onConfirm={() => onConfirm(current())}
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
