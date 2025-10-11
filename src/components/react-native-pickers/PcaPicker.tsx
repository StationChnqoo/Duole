import { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import Header from './components/Header';
import ListView from './components/ListView';
import {
  CommonBottomSheetAnimationConfig,
  CommonStyles,
  ITEM_HEIGHT,
  Pca,
  Strings,
} from './constants/c';
import { CommonPickerModalProps } from './constants/t';
import { Modalize } from 'react-native-modalize';

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
  } = props;

  const [array, setArray] = useState<any[]>([]);
  const modalizeRef = useRef<Modalize>(null);

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
    const code2Array = (_code: string) => {
      let p = [...Pca].findIndex(it => it.value == _code.slice(0, 2));
      let c = Pca[p].children.findIndex(it => it.value == _code.slice(0, 4));
      let a = Pca[p].children[c].children.findIndex(it => it.value == _code);
      setArray([p, c, a]);
    };
    code2Array(code || '110101');
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

  const current = () => {
    const keys = ['province', 'city', 'area'];
    return keys.reduce((acc, key, index) => {
      const item = options?.[index]?.[array[index]];
      acc[key] = item?.label ?? '';
      if (key === 'area') {
        acc.code = item?.value ?? '';
      }
      return acc;
    }, {} as any);
  };

  useEffect(() => {
    if (show) {
      modalizeRef.current?.open();
    } else {
      modalizeRef.current?.close();
    }
  }, [show]);

  return (
    <Modalize
      ref={modalizeRef}
      handlePosition="inside"
      adjustToContentHeight
      closeOnOverlayTap
      onClose={onCancel}
      onOpen={onShow}
      // openAnimationConfig={{ timing: { duration: 618 } }}
      // closeAnimationConfig={{ timing: { duration: 618 * 3 } }}
      overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      scrollViewProps={{ scrollEnabled: false }}
      disableScrollIfPossible
      customRenderer={() => (
        <View style={CommonStyles.bottomSheetView}>
          <Header
            titleStyle={titleStyle}
            title={title || Strings.PleaseSelectPca}
            preview={JSON.stringify(current())}
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
      )}
    ></Modalize>
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
