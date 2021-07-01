import React, {useRef} from 'react';
import {StyleSheet, View, Animated, Button, Easing} from 'react-native';

export const Animation102Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
});
