import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import LinearGradient from "react-native-linear-gradient";

import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
  interpolateColor,
  runOnJS,
} from "react-native-reanimated";
import { useState } from "react";
import { COLORS, icons } from "../constants";

const BUTTON_WIDTH = 325;
const BUTTON_HEIGHT = 50;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const SwipeButton = ({ onToggle }) => {
  const X = useSharedValue(0);
  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: (e) => {
      X.value = e.translationX;
    },
    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
      }
    },
  });

  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const AnimatedStyles = {
    swipable: useAnimatedStyle(() => {
      return {
        transform: [{ translateX: X.value }],
      };
    }),
    colorWave: useAnimatedStyle(() => {
      return {
        width: H_WAVE_RANGE + X.value,
        opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [1, 0],
          Extrapolate.CLAMP
        ),
        transform: [
          {
            translateX: interpolate(X.value, InterpolateXInput, [
              0,
              BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS,
              Extrapolate.CLAMP,
            ]),
          },
        ],
      };
    }),
  };
  return (
    <View style={styles.swipeCont}>
      <Animated.View
        style={[styles.colorWave, AnimatedStyles.colorWave]}
      ></Animated.View>

      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View
          style={[styles.swipable, AnimatedStyles.swipable]}
        >
          <Image source={icons.arrow}/>
        </Animated.View>
      </PanGestureHandler>

      <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>
        Proceed to Checkout
      </Animated.Text>
    </View>
  );
};

export default SwipeButton;

const styles = StyleSheet.create({
  swipeCont: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    padding: BUTTON_PADDING,
    backgroundColor: COLORS.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  colorWave: {
    position: "absolute",
    left: 0,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
  },
  swipable: {
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS,
    backgroundColor: "white",
    position: "absolute",
    left: BUTTON_PADDING,
    zIndex: 3,
  },
  swipeText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    zIndex: 2,
  },
});
