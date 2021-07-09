import React from 'react';
import {
  NavigationContainer,
  Theme,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {StackNavigation} from './src/Stacks/StackNavigation';

const App = () => {
  const customTheme: Theme = {
    dark: true,
    colors: {
      ...DarkTheme.colors,
      // primary: '',
      // background: '',
      // card: '',
      // text: '',
      // border: '',
      // notification: '',
    },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
