import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />
      <Switch
        trackColor={{false: '#D9D9DB', true: '#9c44b3'}}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
