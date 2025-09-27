import { StyleSheet } from 'react-native';
import { Animation, CustomAnimation } from 'react-native-animatable';

export const ITEM_HEIGHT = 36;

export enum Strings {
  PleaseSelectDate = '请选择日期',
  PleaseSelectTime = '请选择时间',
  ButtonTimeNow = '此刻',
  ButtonNow = '今天',
  ButtonConfirm = '确认',
  ButtonCancel = '取消',
}

const animationIn: Animation = 'zoomIn';
const animationOut: Animation = 'zoomOut';

export const CommonModalAnimationConfig = {
  animationIn,
  animationOut,
  animationInTiming: 618,
  animationOutTiming: 618,
};

export const CommonStyles = StyleSheet.create({
  modalView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 16,
  },
   line: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12,
  },
});
