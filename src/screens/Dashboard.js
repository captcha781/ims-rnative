import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {StatusBar} from 'expo-status-bar';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';

const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      {/* <ImageBackground
        className="flex-1"
        source={require('../assets/images/gradient-bg.jpg')}> */}
      <StatusBar backgroundColor="transparent" />
      <View className="w-11/12 mx-auto px-1 py-4 justify-between items-center flex-row mt-6">
        <View className="flex-row items-center">
          <Image
            className="w-10 h-10 object-contain rounded-full"
            source={require('../assets/images/portrait.png')}
          />
          <View className="ml-3">
            <Text className="font-lexend font-semibold text-[16px]">
              John Parker
            </Text>
            <View className="flex-row">
              <Text className="text-[12px] font-lexend">XII - </Text>
              <Text className="text-[12px] font-lexend">A1</Text>
            </View>
          </View>
        </View>

        <TouchableHighlight
          className="p-2.5 rounded-full"
          underlayColor={'rgba(0,0,0,0.1)'}
          onPress={() => navigation.navigate('Settings')}>
          <Octicons name="gear" color={'black'} size={25} />
        </TouchableHighlight>
      </View>
      <View className="w-11/12 mx-auto rounded-xl overflow-hidden">
        <LinearGradient
          className="h-[200px] rounded-lg p-3"
          colors={['rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255,0.12)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text className="">Hello</Text>
        </LinearGradient>
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

export default Dashboard;
