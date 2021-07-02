import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {menuItems} from '../data/MenuItems';
import {styles} from '../theme/apptheme';

export const HomeScreen = ({navigation}: any) => {
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
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<HeaderTitle title="Opciones de Menu" />}
        ItemSeparatorComponent={itemSeparador}
      />
    </View>
  );
};
