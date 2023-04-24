import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const TEXT_ANIMATION_DURATION = 200;
const SLIDE_ANIMATION_DURATION = 170;
const SLIDE_DELAY = 3000;

const MyComponent = () => {
  const textRef = useRef(null);
  const texts = ['Hello', 'World', 'React', 'Native'];
  const [index, setIndex] = useState(0);
  const [textAnimation] = useState(new Animated.Value(0));
  const [slideAnimation] = useState(new Animated.Value(1));

  const handleAnimationEnd = () => {
    textAnimation.setValue(0);
    slideAnimation.setValue(1);
    setIndex((index + 1) % texts.length);
    Animated.timing(textAnimation, {
      toValue: 1,
      duration: TEXT_ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: SLIDE_ANIMATION_DURATION,
      delay: SLIDE_DELAY,
      useNativeDriver: true,
    }).start(handleAnimationEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const slideRight = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 0],
  });

  const opacity = slideAnimation.interpolate({
    inputRange: [0, 0.25],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{translateY: slideRight}], opacity}}>
        <Text ref={textRef} style={styles.text}>
          {texts[index]}
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default MyComponent;
