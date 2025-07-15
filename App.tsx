import { NewAppScreen } from '@react-native/new-app-screen';
import { useEffect } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { RootStacksProp } from './src/screens/Screens';

interface MyProps {
  navigation?: RootStacksProp;
}

const App: React.FC<MyProps> = props => {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    setTimeout(() => {
      if (props.navigation) {
        props.navigation.navigate('HelloWorld', { id: '666666' });
      }
    });
    return function () {};
  });

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
