import {View, Text, Pressable, TextInput, Keyboard, Image} from 'react-native';
import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import global from '../styles/global.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import HideKeyboard from '../components/HideKeyBoard';

const Signin = () => {
  const [active, setActive] = useState({
    email: false,
    password: false,
    btn: false,
    eye: true,
  });

  const LoginHandler = () => {
    Keyboard.dismiss();
  };

  const ActiveHandler = (id, state) => {
    setActive({...active, [id]: state});
  };

  return (
    <HideKeyboard>
      <View className="flex-1">
        <StatusBar barStyle={'dark-content'} />

        <View className="flex-1 items-center">
          <View className="flex-col w-10/12 mx-auto landscape:w-1/2">
            <View className="w-full h-[200] mb-20">
              <Image
                source={require('../assets/images/logo.png')}
                style={{transform: [{scale: 0.5}]}}
                className="h-[300px] mx-auto w-1/2 relative"
              />
            </View>
            <Text
              className="text-4xl font-lexend text-slate-500 font-bold mb-10"
              style={global.titleOpacity}>
              Login
            </Text>
            <View>
              <View className="flex-row w-full items-center mb-5">
                <View className="w-1/12">
                  <MaterialIcons
                    name="alternate-email"
                    color={
                      active.email ? 'rgb(59 130 246)' : 'rgb(209 213 219)'
                    }
                    className="text-gray-300"
                    size={25}
                  />
                </View>
                <TextInput
                  className={`border-b-[1px] w-11/12 font-lexend text-lg text-blue-950 ${
                    active.email ? 'border-b-blue-500' : 'border-b-gray-300'
                  }`}
                  placeholder="Email ID"
                  placeholderTextColor={'rgb(209 213 219)'}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onFocus={() => ActiveHandler('email', true)}
                  onBlur={() => ActiveHandler('email', false)}
                />
              </View>
              <View className="flex-row w-full items-center mb-3 relative">
                <View className="w-1/12">
                  <MaterialIcons
                    name="lock-open"
                    color={
                      active.password ? 'rgb(59 130 246)' : 'rgb(209 213 219)'
                    }
                    className="text-gray-300"
                    size={25}
                  />
                </View>
                <TextInput
                  className={`border-b-[1px] w-11/12 font-lexend text-lg text-blue-950 ${
                    active.password ? 'border-b-blue-500' : 'border-b-gray-300'
                  } pr-10`}
                  placeholder="Password"
                  placeholderTextColor={'rgb(209 213 219)'}
                  textContentType="password"
                  secureTextEntry={active.eye}
                  onFocus={() => ActiveHandler('password', true)}
                  onBlur={() => ActiveHandler('password', false)}
                />
                <Feather
                  name={active.eye ? 'eye' : 'eye-off'}
                  size={25}
                  color={'rgb(209 213 219)'}
                  style={global.passwordEye}
                  onPress={() => ActiveHandler('eye', !active.eye)}
                />
              </View>

              <View className="w-full flex-row justify-end mb-14">
                <Pressable>
                  <Text className="text-blue-600 font-lexend">
                    Forget Password?
                  </Text>
                </Pressable>
              </View>
              <View className="w-full">
                <Pressable
                  className={`w-full justify-center items-center ${
                    active.btn ? 'bg-transparent' : 'bg-blue-600'
                  } rounded-lg py-2.5 border-[1px] ${
                    active.btn ? 'border-blue-600' : 'border-transparent'
                  }`}
                  onPress={LoginHandler}
                  onPressIn={() => ActiveHandler('btn', true)}
                  onPressOut={() => ActiveHandler('btn', false)}>
                  <Text
                    className={`${
                      active.btn ? 'text-blue-600' : 'text-white'
                    } font-lexend text-center text-base`}>
                    Login
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </HideKeyboard>
  );
};

export default Signin;
