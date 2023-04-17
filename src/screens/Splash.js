import {View, Text, Button} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
  // useEffect(() => {
  //   navigation.navigate('Dashboard');
  // }, [navigation]);

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Splash</Text>
      <Button title="Next" onPress={() => navigation.navigate('Signin')} />
    </View>
  );
};

export default Splash;
