import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { IconButton, LineDivider, StepperInput,  } from "../../components";

const CartTab = ({ navigation }) => {
  const [myCartList, setMyCartList] = useState(dummyData.myCart);
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = (value) => setToggleState(value);

  function updateQuantityHandler(newQty, id) {
    const newMyCartList = myCartList.map((cl) =>
      cl.id === id ? { ...cl, qty: newQty } : cl
    );
    setMyCartList(newMyCartList);
  }

  function renderCartList() {
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderHiddenItem={(data, rowMap) => (
          <IconButton
            containerStyle={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: COLORS.primary,
              ...styles.cartItemContainer,
            }}
            icon={icons.delete_icon}
            iconStyle={{
              marginRight: 10,
            }}
          />
        )}
        renderItem={(data, rowMap) => (
          <View
            style={{
              height: 100,
              backgroundColor: COLORS.lightGray2,
              ...styles.cartItemContainer,
            }}
          >
            <View
              style={{
                height: 100,
                width: 90,
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={data.item.image}
                resizeMode="cover"
                style={{
                  width: 80,
                  height: 80,
                  position: "absolute",
                  borderRadius: SIZES.radius,
                  overflow: "hidden",
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ ...FONTS.body4, fontWeight: "bold" }}>
                {data.item.name}
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.lightGray1_new,
                  top: -4,
                }}
              >
                {data.item.brief}
              </Text>

              <Text style={{ fontWeight: "bold", ...FONTS.h3, marginTop: 8 }}>
                ${data.item.price}
              </Text>
            </View>

            <StepperInput
              containerStyle={{
                marginTop: 50,
              }}
              value={data.item.qty}
              onAdd={() =>
                updateQuantityHandler(data.item.qty + 1, data.item.id)
              }
              onMinus={() => {
                if (data.item.qty > 1) {
                  updateQuantityHandler(data.item.qty - 1, data.item.id);
                }
              }}
            />
          </View>
        )}
      />
    );
  }

  function renderPromo() {
    return (
      <View
        style={{
          height: 50,
          width: 330,
          backgroundColor: "#F3F3F3",
          borderRadius: SIZES.radius,
          alignSelf: "center",
          marginTop: 30,
        }}
      >
        <View style={{ flexDirection: "row", alignContent: "center" }}>
          <TextInput
            placeholder="Promo Code"
            style={{ fontSize: 15, marginTop: 15, marginLeft: 20 }}
          />
          <TouchableOpacity
            style={{
              height: 30,
              width: 60,
              backgroundColor: "black",
              borderRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 150,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "white" }}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTotal() {
    return (
      <View>
        <View style={{ flexDirection: "row",}}>
          <Text
            style={{
              marginLeft: 34,
              marginTop: 30,
              ...FONTS.body3,
              color: "#888888",
            }}
          >
            Total (3 items):
          </Text>
          <Text
            style={{
              marginLeft: 150,
              marginTop:26,
              ...FONTS.body2,
              fontWeight: "bold",
              color: "black",
            }}
          >
            $350
          </Text>
        </View>

        
      </View>
    );
  }

  return (
    <View style={{ flexDirection: "column", backgroundColor: COLORS.white }}>
      {renderCartList()}
      <LineDivider />
      {renderPromo()}
      {renderTotal()}
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});
export default CartTab;
