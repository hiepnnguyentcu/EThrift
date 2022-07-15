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
import StarRating from "react-native-star-rating";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import InputSpinner from "react-native-input-spinner";

const ItemDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const [starCount, setStarCount] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      {/* Body */}

      {/*image*/}

      <View style={styles.imageContainer}>
        <Image source={item.image} style={{ width: SIZES.width, flex: 1 }} />
      </View>

      <ScrollView style={styles.detailContainer}>
        {/* information*/}
        <View style={{ padding: 20 }}>
          <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>{item.name}</Text>
          <Text style={{ ...FONTS.body4, color: COLORS.lightGray1_new }}>
            {item.brief}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={starCount}
              selectedStar={(rating) => setStarCount(rating)}
              containerStyle={{ width: 100 }}
              starSize={15}
              starStyle={{ marginLeft: 3, marginTop: 10 }}
            />
            <Text style={{ marginLeft: 10 }}>(320 Review)</Text>
          </View>
        </View>

        <View>
          {/*
        <InputSpinner
							value={1}
							style={[
								styles.spinner,
							]}
							skin="modern"
							max={10}
							colorMax={"#f04048"}
							colorMin={"#82cc62"}
						/>
            */}
        </View>

        {/*sizes*/}

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

        {/*description*/}
        <View style={{ marginLeft: 20, top: -40 }}>
          <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>DESCRIPTION</Text>
          <Text
            style={{ ...FONTS.body4, color: COLORS.black, marginRight: 10 }}
          >
            {item.description}
          </Text>
        </View>
        {/*price*/}

        <View style={{ flexDirection: "row", alignItems:"flex-start" }}>
          <View style={{ marginLeft: 20, top: -10 }}>
            <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>Price</Text>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.black,
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              ${item.price}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              height: 50,
              width: 200,
              backgroundColor: COLORS.black,
              borderRadius: 30,
              marginLeft:40,
              alignItems:"center",
              justifyContent:"center",
              flexDirection:"row",
            }}
            onPress={()=> navigation.navigate('Cart')}
          >
          <Icons name="shopping-bag" size={30} color="white"/>
          <Text style={{color:COLORS.white, marginLeft:10, ...FONTS.body3, fontWeight:"bold"}}>Add to card</Text>
          </TouchableOpacity>
        </View>

        {/*footer*/}
        <View style={{ height: 200 }} />
      </ScrollView>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    //flex: 0.55,
    height: "40%",
    backgroundColor: COLORS.white2,
    borderRadius: SIZES.radius,
    zIndex: 1,
    marginTop: "-40%",
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
  item: {
    borderWidth: 4,
    borderColor: "rgba(0,0,0,0.2)",
    height: 48,
    width: 48,
    borderRadius: 8,
  },
  spinner: {
    flex: 1,
    marginRight: 10,
    width: 30,
  },
});
