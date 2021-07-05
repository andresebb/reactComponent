import React from 'react';
import {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/apptheme';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {Text} from 'react-native';

export const TextInputScreen = () => {
  const {cambio, form} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Text Inputs" />
            <TextInput
              style={stylesInput.inputStyle}
              onChangeText={value => cambio(value, 'name')}
              autoCorrect={false}
              autoCapitalize="words"
              placeholder="Name"
            />
            <TextInput
              style={stylesInput.inputStyle}
              onChangeText={value => cambio(value, 'email')}
              keyboardType="email-address"
              placeholder="email"
            />
            <TextInput
              style={stylesInput.inputStyle}
              onChangeText={value => cambio(value, 'phone')}
              keyboardType="phone-pad"
              placeholder="phone"
            />

            <View style={stylesInput.switchRow}>
              <Text style={stylesInput.switchText}>Subscribe</Text>
              <CustomSwitch
                isOn={form.isSubscribe}
                onChange={value => cambio(value, 'isSubscribe')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesInput = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 10,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    marginBottom: 20,
  },
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
