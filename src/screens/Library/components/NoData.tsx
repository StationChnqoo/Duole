import {
  Image,
  ImageRequireSource,
  ImageURISource,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface MyProps {
  source?: ImageRequireSource | ImageURISource;
  title?: string;
}

const NoData: React.FC<MyProps> = props => {
  const { source = require('../assets/NoData.png'), title = '暂无数据' } =
    props;

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    height: 144,
    width: 144,
  },
  title: {
    fontSize: 14,
    color: '#999',
    marginTop: 12,
  },
});
export default NoData;
