import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MyProps {}

const PlayerCards: React.FC<MyProps> = props => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 4 }}>
          <Text style={{ color: '#333', fontSize: 14 }}>上家 · 30张</Text>
          <View style={{ height: 2 }} />
          <Text style={{ color: '#000', fontSize: 16 }}>34567890JQK2A</Text>
        </View>
        <View style={[styles.gongView, { borderColor: 'green' }]}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 14, color: 'green' }}>进贡</Text>
            <Text style={{ color: '#666', fontSize: 16 }}>DSML</Text>
          </View>
        </View>
        <View style={{ width: 12 }} />
        <View style={[styles.gongView, { borderColor: 'red' }]}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 14, color: 'red' }}>吃贡</Text>
            <Text style={{ color: '#666', fontSize: 16 }}>DSML</Text>
          </View>
        </View>
      </View>
      <View style={{ height: 12 }} />
      <View style={styles.shoupaiView}>
        <Text style={{ fontSize: 14, color: 'blue' }}>手牌</Text>
        <Text style={{ color: '#999', fontSize: 16 }} numberOfLines={1}>
          DSML
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  gongView: {
    flex: 1,
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 1,
    paddingHorizontal: 12,
  },
  shoupaiView: {
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    backgroundColor: '#eee',
  },
});

export default PlayerCards;
