import ZPaging, { ZPagingRef } from '@src/react-native-z-paging';
import { loadZPagingLibrary } from '@src/service';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import {
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface MyProps {}

const TestUseReducer: React.FC<MyProps> = props => {
  const {} = props;
  const [state, dispatch] = useReducer(
    (state: any, action: any) => {
      return {
        ...state,
        ...action,
      };
    },
    { a: 1, b: 2 },
  );

  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  useEffect(() => {
    console.log({ a, b });
  }, [a, b]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <View style={styles.buttons}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setA(a => a + 1);
            setB(b => b + 1);
          }}
        >
          <Text style={{ color: '#333' }}>UseState commit ab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            dispatch({ a: state.a + 1, b: state.b + 1 });
          }}
        >
          <Text style={{ color: '#333' }}>UseReducer commit ab</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
});

export default TestUseReducer;
