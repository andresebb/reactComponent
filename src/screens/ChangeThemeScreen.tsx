import React, {useContext, useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const {theme, dark, cambiarDarkBoolean} = useContext(ThemeContext);

  const {setLightMode, setDarkMode} = useContext(ThemeContext);

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Change Theme" />

      <View style={styles.switchRow}>
        <Text style={[styles.switchText, {color: theme.colors.text}]}>
          isActive
        </Text>
        <CustomSwitch
          isOn={dark}
          onChange={value => {
            if (value) {
              setDarkMode();
              cambiarDarkBoolean(true);
            } else {
              setLightMode();
              cambiarDarkBoolean(false);
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
