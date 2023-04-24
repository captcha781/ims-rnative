import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {StatusBar} from 'expo-status-bar';
import Octicons from 'react-native-vector-icons/Octicons';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';

const Dashboard = ({navigation}) => {
  const [study, setStudy] = useState('today');

  const schedules = [
    {
      time: new Date('2021-01-10T09:00:00.000Z'),
      subject: 'English',
    },
    {
      time: new Date('2021-01-10T10:00:00.000Z'),
      subject: 'Maths',
    },
    {
      time: new Date('2021-01-10T11:00:00.000Z'),
      subject: 'Zoology',
    },
    {
      time: new Date('2021-01-10T12:00:00.000Z'),
      subject: 'Botany',
    },
    {
      time: new Date('2021-01-10T14:00:00.000Z'),
      subject: 'Physics',
    },
    {
      time: new Date('2021-01-10T15:00:00.000Z'),
      subject: 'Tamil',
    },
  ];

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor="transparent" />
      <View className="w-11/12 mx-auto px-1 py-4 justify-between items-center flex-row mt-6 mb-8">
        <View className="flex-row items-center">
          <Image
            className="w-10 h-10 object-contain rounded-full"
            source={require('../assets/images/portrait.png')}
          />
          <View className="ml-3">
            <Text className="font-lexend font-semibold text-[16px] text-black">
              John Parker
            </Text>
            <View className="flex-row">
              <Text className="text-[12px] font-lexend text-black">XII - </Text>
              <Text className="text-[12px] font-lexend text-black">A1</Text>
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
      <View className="w-11/12 mx-auto rounded-xl overflow-hidden mb-7">
        <Text className="font-lexend text-xl text-black ml-1.5 mb-3">
          My Studies
        </Text>
        <View className="ml-1.5 flex-row">
          <Pressable onPress={() => setStudy('today')}>
            <View className="mr-6 items-center">
              <Text
                className={`font-lexend ${
                  study === 'today' ? 'text-black' : 'text-gray-400'
                }`}>
                Today
              </Text>
              {study === 'today' && (
                <Octicons name="dot-fill" color={'black'} />
              )}
            </View>
          </Pressable>

          <Pressable onPress={() => setStudy('yesterday')}>
            <View className="items-center">
              <Text
                className={`font-lexend ${
                  study === 'yesterday' ? 'text-black' : 'text-gray-400'
                }`}>
                Yesterday
              </Text>
              {study === 'yesterday' && (
                <Octicons name="dot-fill" color={'black'} />
              )}
            </View>
          </Pressable>
        </View>
      </View>
      <View className="w-11/12 mx-auto mb-8 items-center">
        <ScrollView
          className=""
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{flexDirection: 'row'}}>
          <View className="rounded-xl overflow-hidden w-[125] h-[180] mr-5">
            <Pressable onPress={() => navigation.navigate('Classroom')}>
              <ImageBackground
                source={require('../assets/images/greenblue.png')}
                className="p-4 py-7 rounded-md h-[180]">
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View className="flex-col mb-6">
                    <Text className="text-lg text-white mb-2.5 font-lexend">
                      Maths
                    </Text>
                    <View className="w-5/12 border-[1px] border-white mb-2.5" />
                    <Text className="text-white font-lexend">
                      Cupidatat laborum irure id elit reprehenderit anim dolor
                      consectetur excepteur ad est laboris excepteur
                      adipisicing.
                    </Text>
                  </View>
                </ScrollView>
              </ImageBackground>
            </Pressable>
          </View>
          <View className="rounded-xl overflow-hidden w-[125] h-[180] mr-5">
            <ImageBackground
              source={require('../assets/images/greepink.png')}
              className="p-4 py-7 rounded-md h-[180]">
              <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex-col mb-6">
                  <Text className="text-lg text-white mb-2.5 font-lexend">
                    Zoology
                  </Text>
                  <View className="w-5/12 border-[1px] border-white mb-2.5" />
                  <Text className="text-white font-lexend">
                    Aliquip ad ad occaecat mollit nisi dolor eu veniam.
                  </Text>
                </View>
              </ScrollView>
            </ImageBackground>
          </View>
          <View className="rounded-xl overflow-hidden w-[125] h-[180] mr-5">
            <ImageBackground
              source={require('../assets/images/pinkpurple.png')}
              className="p-4 py-7 rounded-md h-[180]">
              <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex-col mb-6">
                  <Text className="text-lg text-white mb-2.5 font-lexend">
                    Chemistry
                  </Text>
                  <View className="w-5/12 border-[1px] border-white mb-2.5" />
                  <Text className="text-white font-lexend">
                    Duis occaecat ipsum reprehenderit magna dolor exercitation
                    consequat reprehenderit do pariatur aliqua et aliquip.
                  </Text>
                </View>
              </ScrollView>
            </ImageBackground>
          </View>
          <View className="rounded-xl overflow-hidden w-[125] h-[180] mr-5">
            <ImageBackground
              source={require('../assets/images/purplewhite.png')}
              className="p-4 py-7 rounded-md h-[180]">
              <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex-col mb-6">
                  <Text className="text-lg text-white mb-2.5 font-lexend">
                    Physics
                  </Text>
                  <View className="w-5/12 border-[1px] border-white mb-2.5" />
                  <Text className="text-white font-lexend">
                    Pariatur veniam est incididunt eiusmod non consectetur
                    laboris tempor magna pariatur cupidatat aute aliquip.
                  </Text>
                </View>
              </ScrollView>
            </ImageBackground>
          </View>
          <View className="rounded-xl overflow-hidden w-[125] h-[180] mr-5">
            <ImageBackground
              source={require('../assets/images/greenblue.png')}
              className="p-4 py-7 rounded-md h-[180]">
              <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex-col mb-6">
                  <Text className="text-lg text-white mb-2.5 font-lexend">
                    Biology
                  </Text>
                  <View className="w-5/12 border-[1px] border-white mb-2.5" />
                  <Text className="text-white font-lexend">
                    Lorem laboris sit aliquip sunt nostrud laborum consequat
                    commodo enim ut exercitation quis.
                  </Text>
                </View>
              </ScrollView>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
      <View className="w-11/12 p-3 bg-slate-200 mx-auto px-1.5 rounded-md flex-row items-center">
        <Text className="text-slate-800 font-lexend text-lg ml-3">
          Session :{' '}
        </Text>
        <Text className="text-lg text-slate-700 font-lexend">
          Maths on {moment('2021-01-10T08:00:00.000Z').format('hh:mm A')}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
