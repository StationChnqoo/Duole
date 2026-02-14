import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ButtonConfig } from '../constants/t';
import { Strings } from '../constants/c';
import { fs } from '@src/constants/u';

interface MyProps {
  nowButotn?: ButtonConfig;
  cancelButton?: ButtonConfig;
  confirmButton?: ButtonConfig;
  onCancel: () => void;
  onNow?: () => void;
  onConfirm?: () => void;
}

const Footer = (props: MyProps) => {
  const { onCancel, onConfirm, nowButotn, cancelButton, confirmButton, onNow } =
    props;

  return (
    <View style={styles.buttons}>
      <TouchableOpacity activeOpacity={0.8} onPress={onNow}>
        <Text style={[styles.nowButton, nowButotn?.style]}>
          {nowButotn?.label || Strings.ButtonNow}
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity activeOpacity={0.8} onPress={onCancel}>
          <Text style={[styles.cancelButton, cancelButton?.style]}>
            {cancelButton?.label || Strings.ButtonCancel}
          </Text>
        </TouchableOpacity>
        <View style={{ width: 24 }} />
        <TouchableOpacity activeOpacity={0.8} onPress={onConfirm}>
          <Text style={[styles.confirmButton, confirmButton?.style]}>
            {confirmButton?.label || Strings.ButtonConfirm}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
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
  title: {
    fontSize: fs(18),
    color: '#333',
    fontWeight: '500',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  confirmButton: {
    fontSize: fs(16),
    color: '#4096fc',
  },
  cancelButton: {
    fontSize: fs(16),
    color: '#999',
  },
  nowButton: {
    fontSize: fs(16),
    color: '#4096fc',
  },
});

export default Footer;
