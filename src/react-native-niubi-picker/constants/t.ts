import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ListViewOption {
  label: string;
  value: string;
}

export interface ButtonConfig {
  label: string;
  style: StyleProp<TextStyle>;
}

export interface CommonPickerModalProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  show: boolean;
  nowButotn?: ButtonConfig;
  cancelButton?: ButtonConfig;
  confirmButton?: ButtonConfig;
  onCancel: () => void;
  onHide?: () => void;
  onConfirm?: (s: string) => void;
  activeItemContainerStyle?: StyleProp<ViewStyle>;
  inactiveItemContainerStyle?: StyleProp<ViewStyle>;
  activeItemStyle?: StyleProp<TextStyle>;
  inactiveItemStyle?: StyleProp<TextStyle>;
  useNativeDriver?: boolean;
}
