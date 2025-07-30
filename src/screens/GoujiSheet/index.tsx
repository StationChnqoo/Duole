import { RouteProp, useFocusEffect } from '@react-navigation/native';
import ToolBar from '@src/components/ToolBar';
import { useCaches } from '@src/constants/store';
import { produce } from 'immer';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStacksParams, RootStacksProp } from '../Screens';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Baohuang'>;
}

const GoujiSheet: React.FC<MyProps> = props => {
  const { navigation, route } = props;
  const [isEagle, setIsEagle] = useState(true); // 是否带鹰
  const { theme, games, setGames, autoRevertGame } = useCaches();
  const [pack, setPack] = useState(4);
  const columns = '上联#上家#自己#下家#下联#对门#剩余'.split('#');
  const rows = '初始#剩余#鹰#大王#小王#2#A#K#Q#J#0#9#8#7#6#5#4#3'.split('#');
  const [point, setPoint] = useState({ i: 0, j: 0 });
  const defaultDatas = Array.from({ length: rows.length }, () =>
    Array(columns.length).fill(0),
  );
  const [datas, setDatas] = useState(defaultDatas);

  useFocusEffect(
    useCallback(() => {
      return () => {};
    }, []),
  );

  useEffect(() => {
    if (pack == 4) {
      setIsEagle(false);
    }
    return function () {};
  }, [pack]);

  const onKeyBoardPress = (card: string) => {};

  const onDeletePress = () => {};

  const sum = useMemo(() => {
    return pack == 4 ? 32 : isEagle ? 51 : 50;
  }, [isEagle, pack]);

  const onButtonPress = (increase: number) => {
    setDatas(
      produce(datas, draft => {
        draft[point.i][point.j] += increase;
      }),
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <ToolBar
        title={'够级'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />

      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 12,
            paddingVertical: 1,
          }}
        >
          <View style={styles.ceil}>
            <Text>- / -</Text>
          </View>
          {columns.map((column, j) => (
            <View
              key={j}
              style={[
                styles.ceil,
                { backgroundColor: ['red', 'green'][j % 2] },
              ]}
            >
              <Text style={[styles.ceilLabel, { color: '#fff' }]}>
                {column}
              </Text>
            </View>
          ))}
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 12, backgroundColor: '#fff' }}>
            <View style={{ height: 6 }} />
            {rows.map((row, i) => {
              return (
                <View key={i} style={{ flexDirection: 'row' }}>
                  <View style={styles.ceil}>
                    <Text style={styles.ceilLabel}>{row}</Text>
                  </View>
                  {columns.map((column, j) => (
                    <TouchableOpacity
                      key={j}
                      style={[
                        styles.ceil,
                        {
                          backgroundColor:
                            point.i == i && point.j == j ? theme : '#fff',
                        },
                      ]}
                      activeOpacity={0.8}
                      onPress={() => {
                        setPoint({ i, j });
                      }}
                    >
                      <Text
                        style={[
                          styles.ceilValue,
                          {
                            color:
                              point.i == i && point.j == j ? '#fff' : '#666',
                          },
                        ]}
                      >
                        {datas[i][j]}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              );
            })}
            <View style={{ height: 12 }} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingPanel: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    padding: 12,
  },
  ceil: {
    borderWidth: 0.5,
    width: (Dimensions.get('screen').width - 24) / 8,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#999',
    borderRadius: 2,
  },
  ceilLabel: {
    fontSize: 14,
    color: '#333',
  },
  ceilValue: {
    fontSize: 14,
    color: '#666',
  },
  countButton: {
    height: 32,
    width: 48,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GoujiSheet;
