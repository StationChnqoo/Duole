import { KeyValue } from '@src/constants/t';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MyProps {
  c: KeyValue;
  onPress: (kv: KeyValue) => void;
  currentIndex?: string;
  isGreen: boolean;
}

const Inputer: React.FC<MyProps> = (props: MyProps) => {
  const { c, currentIndex, onPress, isGreen } = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { borderColor: currentIndex === c.key ? 'green' : '#999' },
      ]}
      activeOpacity={0.8}
      onPress={() => {
        onPress(c);
      }}
    >
      <Text style={{ fontSize: 16, color: '#333' }}>{c.value}</Text>
      {isGreen && (
        <View style={styles.tag}>
          <Text style={{ color: 'white', fontSize: 12 }}>新</Text>
        </View>
      )}
      <View
        style={[
          styles.dot,
          { backgroundColor: currentIndex == c.key ? 'green' : 'transparent' },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999',
    position: 'relative',
  },
  tag: {
    position: 'absolute',
    top: -6,
    right: -6,
    height: 16,
    width: 16,
    borderRadius: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 24,
    height: 2,
    borderRadius: 1,
    position: 'absolute',
    bottom: 2,
    backgroundColor: 'green',
    alignSelf: 'center',
  },
});
export default Inputer;
