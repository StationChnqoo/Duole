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
  value: string | number;
  range: number[];
}

const NumberPicker = (props: MyProps & CommonPickerModalProps) => {
  const {
    show,
    onCancel,
    onHide,
    onConfirm,
    value,
    range,
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const onShow = () => {
    setCurrentIndex(Number(value || 1) - range[0]);
  };

  const options = useMemo(() => {
    return optionsBuilder(range[0], range[1]).map(it => ({
      label: `${it}`,
      value: `${it}`,
    }));
  }, [range]);

  return (
    <Modal
      isVisible={show}
      style={styles.views}
      onDismiss={onCancel}
      onModalHide={onHide}
      onBackdropPress={onCancel}
      {...CommonDialogAnimationConfig}
      onShow={onShow}
      onBackButtonPress={onCancel}
    >
      <View style={CommonStyles.dialogView}>
        <Header
          titleStyle={titleStyle}
          title={title || Strings.PleaseSelectDate}
        />
        <View
          style={{ flexDirection: 'row', gap: 12, height: ITEM_HEIGHT * 6 }}
        >
          <ListView
            index={currentIndex}
            data={options}
            onChange={setCurrentIndex}
            activeItemStyle={activeItemStyle}
            activeItemContainerStyle={activeItemContainerStyle}
            inactiveItemContainerStyle={inactiveItemContainerStyle}
            inactiveItemStyle={inactiveItemStyle}
          />
        </View>
        <View style={CommonStyles.line} />
        <Footer
          onCancel={onCancel}
          onConfirm={() => onConfirm(`${options[currentIndex].value}`)}
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

export default NumberPicker;
