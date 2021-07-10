import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/ThemeContext';

export const SwitchScreen = () => {
  const {theme} = useContext(ThemeContext);
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHungry, isHappy} = state;

  const cambio = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: theme.colors.text}}>
          isActive
        </Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => cambio(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: theme.colors.text}}>
          isHungry
        </Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => cambio(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={[styles.switchText, {color: theme.colors.text}]}>
          isHappy
        </Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => cambio(value, 'isHappy')}
        />
      </View>

      <Text style={[styles.switchText, {color: theme.colors.text}]}>
        {JSON.stringify(state, null, 5)}
      </Text>
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
