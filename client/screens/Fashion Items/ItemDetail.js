import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import {
  FONTS,
  COLORS,
  SIZES,
  icons,
  images,
  dummyData,
} from "../../constants";
const ItemDetail = ({ route, navigation }) => {
    const { item } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Body */}
      <Text style={{color:COLORS.black}}>Details Screen</Text>
      <Text>Name: {JSON.stringify(item.name)}</Text>
      <Text>Brief: {JSON.stringify(item.brief)}</Text>
      <Text>Description: {JSON.stringify(item.description)}</Text>
      <Text>Price: {JSON.stringify(item.price)}</Text>

      {/* Footer */}
    </View>
  );
};

export default ItemDetail;
