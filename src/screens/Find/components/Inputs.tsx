import Flex from '@src/components/Flex';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Inputer from './Inputer';
import { KeyValue } from '@src/constants/t';

interface MyProps {
  license: KeyValue[];
  currentIndex: string;
  onPress: (kv: KeyValue) => void;
}

const Inputs: React.FC<MyProps> = (props: MyProps) => {
  const { license, currentIndex, onPress } = props;

  return (
    <Flex horizontal style={{ gap: 12 }} justify={'flex-start'}>
      {license.map((c, i) => (
        <View key={c.key}>
          <Inputer
            currentIndex={currentIndex}
            key={c.key}
            c={c}
            onPress={onPress}
            isGreen={i == license.length - 1}
          />
        </View>
      ))}
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Inputs;
