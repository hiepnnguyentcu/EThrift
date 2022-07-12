import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { FONTS, COLORS } from "../constants";

const TextIconButton = ({
  label,
  labelStyle,
  containerStyle,
  onPress,
  icon,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...FONTS.body3, ...labelStyle }}>
        {label}
      </Text>
      <Image
        source={icon}
        style={{
          marginLeft: 5,
          width: 20,
          height: 20,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default TextIconButton;
