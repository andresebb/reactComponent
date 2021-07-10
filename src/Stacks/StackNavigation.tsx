import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  NavigationContainer,
  Theme,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import {HomeScreen} from '../screens/HomeScreen';
import {SettingScreen} from '../screens/SettingScreen';
import {Animation102Screen} from '../screens/Animation102Screen';
import {Animation101Screen} from '../screens/Animation101Screen';
import {SwitchScreen} from '../screens/SwitchScreen';
import {AlertScreen} from '../screens/AlertScreen';
import {TextInputScreen} from '../screens/TextInputScreen';
import {PullToRefreshScreen} from '../screens/PullToRefreshScreen';
import {SectionListScreen} from '../screens/SectionListScreen';
import {ModalScreen} from '../screens/ModalScreen';
import {InfiniteScrollScreen} from '../screens/InfiniteScrollScreen';
import {SlideScreen} from '../screens/SlideScreen';
import {ChangeThemeScreen} from '../screens/ChangeThemeScreen';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            // backgroundColor: 'white',
          },
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen
          name="Animation101Screen"
          component={Animation101Screen}
        />
        <Stack.Screen
          name="Animation102Screen"
          component={Animation102Screen}
        />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen
          name="PullToRefreshScreen"
          component={PullToRefreshScreen}
        />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen
          name="InfiniteScrollScreen"
          component={InfiniteScrollScreen}
        />
        <Stack.Screen name="SlideScreen" component={SlideScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
