import React from "react";
import { View, Text } from "react-native";

import { FONTS, COLORS, icons, SIZES } from "../constants";
import IconButton from "./IconButton";

const StepperInput = ({ containerStyle, value = 1, onAdd, onMinus }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 30,
        width: 70,
        backgroundColor: "#EEEEEE",
        borderRadius: 40,
        ...containerStyle,
      }}
    >
      <IconButton
        containerStyle={{
          width: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={icons.minus}
        iconStyle={{
          height: 10,
          width: 10,
          tintColor: value > 1 ? COLORS.primary : COLORS.gray,
          marginLeft:10
        }}
        onPress={onMinus}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ ...FONTS.body4 }}>{value}</Text>
      </View>

      <IconButton
        containerStyle={{
          width: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={icons.plus}
        iconStyle={{
          height: 10,
          width: 10,
          tintColor: value > 1 ? COLORS.primary : COLORS.gray,
          marginRight:10
        }}
        onPress={onAdd}
      />
    </View>
  );
};
export default StepperInput;
