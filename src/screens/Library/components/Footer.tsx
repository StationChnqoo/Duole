import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

interface MyProps {
  laoding?: boolean;
  noMore?: boolean;
}

const Footer = (props: MyProps) => {
  const { laoding, noMore } = props;
  return laoding ? (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#999" />
      <View style={{ width: 5 }} />
      <Text style={styles.text}>正在加载 ...</Text>
    </View>
  ) : noMore ? (
    <View style={styles.container}>
      <Text style={styles.text}>没有更多了 ...</Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  text: {
    fontSize: 14,
    color: '#999',
  },
});
export default Footer;
