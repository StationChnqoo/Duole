import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import Footer from './components/Footer';
import Header from './components/Header';
import ListView from './components/ListView';
import {
  CommonModalAnimationConfig,
  CommonStyles,
  ITEM_HEIGHT,
  Pca,
  Strings,
} from './constants/c';
import { CommonPickerModalProps } from './constants/t';
import { numPad, optionsBuilder } from './constants/u';

interface MyProps {
  code: string;
}

const PcaPicker = (props: MyProps & CommonPickerModalProps) => {
  const {
    show,
    onCancel,
    onHide,
    onConfirm,
    code,
    title,
    titleStyle,
    nowButotn,
    cancelButton,
    confirmButton,
    activeItemStyle,
    activeItemContainerStyle,
    inactiveItemContainerStyle,
    inactiveItemStyle,
    useNativeDriver,
  } = props;

  const [array, setArray] = useState<any[]>([]);

  const onChange = (listIndex: number, itemIndex: number) => {
    let _array = [...array];
    if (listIndex == 0) {
      _array = [itemIndex, 0, 0];
    } else if (listIndex == 1) {
      _array[1] = itemIndex;
      _array[2] = 0;
    } else if (listIndex == 2) {
      _array[2] = itemIndex;
    }
    setArray(_array);
  };

  const onShow = () => {
    let p = [...Pca].findIndex(it => it.value == code.slice(0, 2));
    let c = Pca[p].children.findIndex(it => it.value == code.slice(0, 4));
    let a = Pca[p].children[c].children.findIndex(it => it.value == code);
    setArray([p, c, a]);
  };

  const findByCode = (pca: any[], code: string) => {
    let result = pca.find(it => it.value == code);
    return result;
  };

  const options = useMemo(() => {
    let result = Array(3).fill([]);
    if (array.length > 0) {
      result[0] = [...Pca];
      result[1] = Pca[array[0]].children;
      result[2] = result[1][array[1]].children;
    }
    return result;
  }, [array]);

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
        <Header
          titleStyle={titleStyle}
          title={title || Strings.PleaseSelectDate}
        />
        <View
          style={{ flexDirection: 'row', gap: 12, height: ITEM_HEIGHT * 6 }}
        >
          {array.map((it, i) => {
            return (
              <View style={{ flex: 1 }} key={i}>
                <ListView
                  key={i}
                  data={options[i]}
                  onChange={index => {
                    onChange(i, index);
                  }}
                  index={array[i]}
                  activeItemStyle={activeItemStyle}
                  activeItemContainerStyle={activeItemContainerStyle}
                  inactiveItemContainerStyle={inactiveItemContainerStyle}
                  inactiveItemStyle={inactiveItemStyle}
                />
              </View>
            );
          })}
        </View>
        <View style={CommonStyles.line} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  views: {
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  view: {},
});

export default PcaPicker;
