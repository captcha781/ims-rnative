import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Settings = ({navigation}) => {
  return (
    <View className="flex-1">
      <StatusBar backgroundColor="gray" style="light" />
      <View className="w-11/12 mx-auto px-1 py-4 mt-7 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Pressable onPress={() => navigation.pop()}>
            <MaterialIcons name="arrow-back" size={27} color={'black'} />
          </Pressable>
          <Text className="font-lexend text-[20px] text-black ml-4">
            Settings
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Settings;
