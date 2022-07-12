import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
} from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const HorizontalCard = ({ containerStyle, imageStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        //flexDirection: "row",
        //borderRadius: SIZES.radius,
        backgroundColor: COLORS.black,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* image */}
      <ImageBackground source={item.image} style={imageStyle}>
        <View style={{justifyContent:"center", flex:1, marginLeft:10,}}>
          <Text style={{color:COLORS.white, fontWeight:"bold", ...FONTS.h2}}>{item.percentOff}% Off</Text>
          <Text style={{color:COLORS.white, fontWeight:"bold", ...FONTS.body2}}>{item.name}</Text>
          <Text style={{color:COLORS.white, fontWeight:"bold", ...FONTS.body3}}>With code: {item.code}</Text>
          <TouchableOpacity style={{height: 25, width: 70, borderRadius: SIZES.radius, backgroundColor:COLORS.black, marginTop:SIZES.padding}}>
            <Text style={{color:"white", ...FONTS.body5, alignSelf:"center", fontWeight:"bold"}}>GET NOW</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HorizontalCard;
/*

<View style={{ flex: 1 }}>
<Text style={{ ...FONTS.h3, fontSize: 17, fontWeight: "bold" }}>
  {item.name}
</Text>
<Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>
  {item.description}
</Text>
<Text
  style={{
    ...FONTS.h2,
    marginTop: SIZES.base,
  }}
>
  ${item.price}
</Text>
</View>

*/

//      <Image source={item.image} style={imageStyle} />
