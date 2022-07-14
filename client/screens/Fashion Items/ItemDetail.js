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

import Icons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
const ItemDetail = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      {/* Body */}

      <View style={styles.imageContainer}>
        <Image source={item.image} style={{ width: SIZES.width, flex: 1 }} />
      </View>

      <ScrollView style={styles.detailContainer}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>{item.name}</Text>
          <Text style={{ ...FONTS.body4, color: COLORS.black }}>
            {item.brief}
          </Text>
        </View>

        <View style={{ padding: 20, top: -30 }}>
          <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>SIZES</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.sizeButton}>
              <Text style={{ fontWeight: "bold" }}>S</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sizeButton}>
              <Text style={{ fontWeight: "bold" }}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizeButton}>
              <Text style={{ fontWeight: "bold" }}>L</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizeButton}>
              <Text style={{ fontWeight: "bold" }}>XL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizeButton}>
              <Text style={{ fontWeight: "bold" }}>XXL</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginLeft: 20, top: -40 }}>
          <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>DESCRIPTION</Text>
          <Text
            style={{ ...FONTS.body4, color: COLORS.black, marginRight: 10 }}
          >
            {item.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    //flex: 0.55,
    backgroundColor: COLORS.white2,
    borderRadius: SIZES.radius,
    zIndex: 1,
    height:"20%"
  },
  sizeButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
