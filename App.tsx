import { NewAppScreen } from '@react-native/new-app-screen';
import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { RootStacksProp } from './src/screens/Screens';
import { useFocusEffect } from '@react-navigation/native';

interface MyProps {
  navigation?: RootStacksProp;
}

const App: React.FC<MyProps> = props => {
  const isDarkMode = useColorScheme() === 'dark';

  useFocusEffect(
    React.useCallback(() => {
      // This will be called when the screen is focused
      setTimeout(() => {
        props.navigation.navigate('Baohuang');
      }, 1000);
      return () => {
        // This will be called when the screen is unfocused
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
