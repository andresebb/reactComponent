import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MenuItems} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

interface Props {
  menuItem: MenuItems;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={theme.colors.primary} size={23} />

        <Text style={[styles.itemText, {color: theme.colors.text}]}>
          {menuItem.name}
        </Text>

        <View style={{flex: 1}} />

        <Icon
          name="chevron-forward-outline"
          color={theme.colors.primary}
          size={23}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
