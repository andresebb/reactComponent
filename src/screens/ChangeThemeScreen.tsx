import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';

export const ChangeThemeScreen = () => {
  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Change Theme" />

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch isOn={false} onChange={() => console.log('hola')} />
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
