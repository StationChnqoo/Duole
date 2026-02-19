import React from 'react';
import {StyleSheet, View} from 'react-native';

interface MyProps {
  progress: number;
  color?: string;
}

const ProgressBar: React.FC<MyProps> = props => {
  const {progress, color = '#000'} = props;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.progress,
          {width: `${progress * 100}%`, backgroundColor: color},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 2,
    backgroundColor: '#f1f2f3',
    position: 'relative',
  },
  progress: {
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});

export default ProgressBar;
