import React from 'react';
import {View, Text, Button} from 'react-native';

export const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>Soy la home Screen</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('SettingScreen')}
      />
    </View>
  );
};
