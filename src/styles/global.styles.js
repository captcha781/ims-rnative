import {StyleSheet} from 'react-native';

const global = StyleSheet.create({
  titleOpacity: {
    opacity: 0.95,
  },

  textInputLogin: {
    width: '100%',
    fontFamily: 'Lexend',
    backgroundColor: 'transparent',
  },
  textInputStyles: {
    padding: 0,
  },
  margin_bottom_8: {
    marginBottom: 8,
  },
  passwordEye: {
    position: 'absolute',
    left: '100%',
    transform: [{translateX: -30}],
  },
});

export default global;
