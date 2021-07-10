import React, {useContext, useState} from 'react';
import {Platform, Switch} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const {theme} = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: `${theme.colors.primary}`}}
      thumbColor={Platform.OS === 'android' ? `${theme.colors.primary}` : 'red'}
      onValueChange={toggleSwitch}
      style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
      value={isEnabled}
    />
  );
};
