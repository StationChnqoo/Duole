import React, {ReactNode} from 'react';
import {
  FlexAlignType,
  FlexStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface MyProps {
  align?: FlexAlignType;
  justify?: FlexStyle['justifyContent'];
  horizontal?: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Flex: React.FC<MyProps> = props => {
  const {
    align = 'center',
    justify = 'center',
    horizontal = false,
    style = {},
  } = props;
  return (
    <View
      style={{
        justifyContent: justify,
        alignItems: align,
        flexDirection: horizontal ? 'row' : 'column',
        // @ts-ignore
        ...style,
      }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Flex;
