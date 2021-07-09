import React from 'react';
import {Theme, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {StackNavigation} from './src/Stacks/StackNavigation';
import {ThemeProvider} from './src/context/ThemeContext';

const App = () => {
  return (
    <AppState>
      <StackNavigation />
    </AppState>
  );
};
const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
