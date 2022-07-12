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
import { StyleSheet } from "react-native";

import Icons from 'react-native-vector-icons/MaterialIcons'
const ItemDetail = ({ route, navigation }) => {
    const { item } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Body */}
      

      <View style={styles.imageContainer}>
        <Image source={item.image} style={{resizeMode:"contain", flex:1}}/>
      </View>

      <Text>Name: {JSON.stringify(item.name)}</Text>
      <Text>Brief: {JSON.stringify(item.brief)}</Text>
      <Text>Description: {JSON.stringify(item.description)}</Text>
      <Text>Price: {JSON.stringify(item.price)}</Text>

      {/* Footer */}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create ({
  imageContainer:{
    flex:0.45,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center"

  },
})