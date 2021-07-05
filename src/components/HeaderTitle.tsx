import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title?: string;
}

export const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{top: top + 20}}>
      <Text style={{marginBottom: 40, fontWeight: 'bold', fontSize: 24}}>
        {title}
      </Text>
    </View>
  );
};
