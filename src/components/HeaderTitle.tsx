import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/ThemeContext';

interface Props {
  title?: string;
}

export const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{top: top + 20}}>
      <Text
        style={[
          {marginBottom: 40, fontWeight: 'bold', fontSize: 24},
          {color: theme.colors.text},
        ]}>
        {title}
      </Text>
    </View>
  );
};
