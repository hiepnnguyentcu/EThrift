import React from "react";

import { TouchableOpacity, View, Text, Image } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../constants";

const VerticalCard = ({ containerStyle, imageStyle, item, briefShown, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        padding: SIZES.radius,
        alignItems: "center",
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* calories*/}

      {/* image*/}
      <View
        style={{
          ...imageStyle,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: SIZES.radius,
          overflow: 'hidden',
        }}
      >
        <Image source={item.image} style={{ height: "100%", width: "100%" }} />
      </View>

      <View>
        <Text style={{...FONTS.h4, fontWeight:"bold", textAlign:"center" }}>{item.name}</Text>
        {briefShown && (<Text style={{...FONTS.body4, textAlign:"center"}}>{item.brief}</Text>)}
        <Text style={{...FONTS.body3, fontWeight:"bold", textAlign:"center"}}>${item.price}</Text>

      </View>

      {/* info

      <View style={{ alignItems: "center", marginTop: -20 }}>
        <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
        
        <Text style={{ marginTop: SIZES.radius, ...FONTS.h2 }}>
          ${item.price}
        </Text>
      </View>
      */}
    </TouchableOpacity>
  );
};
export default VerticalCard;
