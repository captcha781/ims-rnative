import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/Splash';
import Signin from '../screens/Signin';
import BottomNavigator from './bottom.navigator';
import Settings from '../screens/Settings';

const screens = {
  Splash: {
    screen: Splash,
  },
  Signin: {
    screen: Signin,
  },
  Lander: {
    screen: BottomNavigator,
  },
  Settings: {
    screen: Settings,
  },
};

const IndexNavigator = createStackNavigator(screens, {headerMode: 'none'});

export default createAppContainer(IndexNavigator);
