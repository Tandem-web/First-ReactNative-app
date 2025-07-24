/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Dimensions, StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import MyApp from './src';
import { useMemo } from 'react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const statusBarHeight = StatusBar.currentHeight || 0;

  const combineStyles = useMemo(() => ({
    ...styles.container,
    paddingTop: statusBarHeight,
    backgroundColor: isDarkMode ? '#000' : '#fff'
  }
  ),[statusBarHeight, isDarkMode]);

  const height  = Dimensions.get('window').height;
  const screenHeight = Dimensions.get('screen').height;

  console.log('Screen height', screenHeight);
  console.log('Window height', height)
  console.log('Status Bar Height', statusBarHeight)
  return (
    <View style={combineStyles}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MyApp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
