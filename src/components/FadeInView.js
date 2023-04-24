import React from 'react';
import {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  let {changeable} = props;

  useEffect(() => {
    Animated.event(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
      isInteraction: true,
    }).start();
  }, [fadeAnim, changeable]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
