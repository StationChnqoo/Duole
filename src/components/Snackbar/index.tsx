import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface MyProps {}

const Snackbar: React.FC<MyProps> = props => {
  const theme = '#5085fc';
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity activeOpacity={0.8} style={{flex: 1}}>

      </TouchableOpacity>
      <View style={styles.view}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#fff',
    position: 'relative'
  },
});
export default Snackbar;
