import dayjs from 'dayjs';
import {useEffect, useMemo, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import Footer from './components/Footer';
import Header from './components/Header';
import ListView from './components/ListView';
import {
  CommonBottomSheetAnimationConfig,
  CommonDialogAnimationConfig,
  CommonStyles,
  DATE_YEAR_INIT,
  ITEM_HEIGHT,
  Strings,
} from './constants/c';
import {CommonPickerModalProps} from './constants/t';
import {numPad, optionsBuilder} from './constants/u';

interface MyProps {
  date: string;
}

const DatePicker = (props: MyProps & CommonPickerModalProps) => {
  const {
    show,
    onCancel,
    onHide,
    onConfirm,
    date,
    title,
    titleStyle,
    nowButotn,
    cancelButton,
    confirmButton,
    activeItemStyle,
    activeItemContainerStyle,
    inactiveItemContainerStyle,
    inactiveItemStyle,
  } = props;

  const [array, setArray] = useState<number[]>([]);

  const onChange = (listIndex: number, itemIndex: number) => {
    let _array = [...array];
    _array[listIndex] = itemIndex;
    setArray(_array);
  };

  const dateString2Array = (t: string) => {
    let dates = (t ?? '')
      .split('-')
      // 偏移量
      .map((it, i) => Number(it) - [DATE_YEAR_INIT, 1, 1][i]);
    return dates;
  };

  const onShow = () => {
    setArray(dateString2Array(date || dayjs().format('YYYY-MM-DD')));
  };

  const onNow = () => {
    const format = ['YYYY', 'YYYY-MM', 'YYYY-MM-DD'][array.length - 1];
    setArray(dateString2Array(dayjs().format(format)));
  };

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const days = useMemo(() => {
    return [
      0,
      31,
      isLeapYear(Number(array?.[0]) || DATE_YEAR_INIT) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ][Number(array?.[1] || 1)];
  }, [array]);

  const current = () => {
    console.log(array, options);
    return array.map((it, i) => options?.[i]?.[it]?.value).join('-');
  };

  const options = useMemo(() => {
    let result = Array(3).fill([]);
    result[0] = optionsBuilder(199, DATE_YEAR_INIT);
    result[1] = optionsBuilder(12, 1);
    result[2] = optionsBuilder(days, 1);
    return result;
  }, [array]);

  useEffect(() => {
    // 越界 -> 当前选择的日 > 当月总天数
    // 例如：12-31，只切换了月份
    if (array.length == 3 && Number(array[2]) > days) {
      onChange(2, days);
    }
    return function () {};
  }, [array]);

  return (
    <Modal
      isVisible={show}
      style={styles.views}
      onDismiss={onCancel}
      onModalHide={onHide}
      onBackdropPress={onCancel}
      {...CommonDialogAnimationConfig}
      onShow={onShow}
      onBackButtonPress={onCancel}>
      <View style={CommonStyles.dialogView}>
        <Header
          titleStyle={titleStyle}
          title={title || Strings.PleaseSelectDate}
        />
        <View style={{flexDirection: 'row', gap: 12, height: ITEM_HEIGHT * 6}}>
          {array.map((it, i) => {
            return (
              <ListView
                key={i}
                data={options[i]}
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

export default DatePicker;
