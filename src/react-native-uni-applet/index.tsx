import { RouteProp, useFocusEffect } from '@react-navigation/native';
import SoftKeyboard from '@src/components/SoftKeyboard';
import ToolBar from '@src/components/ToolBar';
import { useCaches } from '@src/constants/store';
import { BaohuangPlayer } from '@src/constants/t';
import { uuid } from '@src/constants/u';
import { produce } from 'immer';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStacksParams, RootStacksProp } from '../../src/screens/Screens';
import { UniService } from './services';
import { XMLParser } from 'fast-xml-parser';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Baohuang'>;
}

const UniApplet: React.FC<MyProps> = props => {
  const { navigation, route } = props;

  const loadDuoleWxml = async () => {
    const result = await new UniService().loadWxml({
      path: '/uni-dist/pages/baohuang/index.wxml',
    });
    console.log('loadDuoleWxml: ', result);
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '',
    });
    console.log('Parser: ', parser.parse(result));
  };

  useEffect(() => {
    loadDuoleWxml();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <ToolBar
        title={'Uni Applet'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 12 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default UniApplet;
