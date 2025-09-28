import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';

interface MyProps {
  titleStyle?: StyleProp<TextStyle>;
  title: string;
  preview?: string;
}

const Header = (props: MyProps) => {
  const { title, preview, titleStyle } = props;
  return (
    <View>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {preview ? (
        <Text style={{ color: '#999', fontSize: 14, marginTop: 6 }}>
          {preview}
        </Text>
      ) : null}
      <View style={{ height: 12 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default Header;
