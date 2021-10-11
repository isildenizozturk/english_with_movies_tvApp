
import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ContextPage from './src/screens/ContextPage';
import VideoPlayer from './src/screens/VideoPlayer';

const switchNavigator = createSwitchNavigator({
  mainFlow: createStackNavigator({
    ContextPage: ContextPage,
    VideoPlayer: VideoPlayer,
  })
});


const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
