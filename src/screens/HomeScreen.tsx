import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {MenuItems} from '../interfaces/appInterfaces';
import {styles} from '../theme/apptheme';

const menuItems: MenuItems[] = [
  {
    name: 'Animation0101',
    icon: 'cube-outline',
    component: 'Whatever',
  },
  {
    name: 'Animation0202',
    icon: 'aperture-outline',
    component: 'Estloy',
  },
];

export const HomeScreen = ({navigation}: any) => {
  const renderHeader = () => {
    return (
      <View>
        <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize: 24}}>
          Opciones de Menu
        </Text>
      </View>
    );
  };

  const itemSeparador = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.5,
          margin: 8,
        }}></View>
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <Text>Soy la home Screen</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('SettingScreen')}
      />
      <Icon size={30} color="red" name="airplane-outline" />

      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={itemSeparador}
      />
    </View>
  );
};
