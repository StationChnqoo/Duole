import { RouteProp } from '@react-navigation/native';
import ToolBar from '@src/components/ToolBar';
import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStacksParams, RootStacksProp } from '../Screens';
import TestZPaging from './components/testZPaging';
import { TestComponents } from './constants/index';
import { useCaches } from '@src/constants/store';
import TestUseReducer from './components/testUseReducer';
import DropdownMenu from '@src/react-native-dropdown-menu';
interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Library'>;
}

const Library: React.FC<MyProps> = props => {
  const { navigation } = props;
  const [current, setCurrent] = useState(TestComponents.ZPaging);
  const { theme } = useCaches();

  const currentComponent = useMemo(() => {
    return {
      [TestComponents.ZPaging]: <TestZPaging />,
      [TestComponents.TestUseReducer]: <TestUseReducer />,
    }[current];
  }, [current]);

  const options = [
    {
      label: '测试ZPaging',
      value: TestComponents.ZPaging,
    },
    {
      label: '测试UseReducer',
      value: TestComponents.TestUseReducer,
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <ToolBar
        title={'实验室'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View style={{ height: 1, backgroundColor: '#ccc' }} />
      <DropdownMenu />
      <View style={styles.options}>
        {options.map(item => (
          <TouchableOpacity
            key={`${item.value}`}
            activeOpacity={0.8}
            style={[
              styles.tag,
              { borderColor: current === item.value ? theme : '#ccc' },
            ]}
            onPress={() => setCurrent(item.value)}
          >
            <Text
              style={{
                color: current === item.value ? theme : '#333',
                fontSize: 14,
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ height: 1, backgroundColor: '#eee' }} />
      {currentComponent}
      <View
        style={{ height: useSafeAreaInsets().bottom, backgroundColor: '#fff' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  tag: {
    paddingHorizontal: 5,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 1,
  },
});

export default Library;
