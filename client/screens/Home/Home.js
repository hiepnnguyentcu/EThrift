import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
} from "react-native";
import { useState } from "react";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";
import { HorizontalCard, VerticalCard } from "../../components";
import { FilterModal } from "../";
const Section = ({ title, onPress, children }) => {
  return (
    <View>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3, fontWeight: "bold" }}>
          {" "}
          {title}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      {/* content */}
      {children}
    </View>
  );
};

const Home = ({ navigation }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [sales, setSales] = useState([]);
  const [trending, setTrending] = useState([]);
  const [mustBuy, setMustBuy] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  function handleChangeCategory(categoryId, menuTypeId) {
    //retrieve menu

    let selectedTrending = dummyData.menu.find((a) => a.name == "Trending");

    setTrending(
      selectedTrending?.list.filter((a) => a.categories.includes(categoryId))
    );

    let selectedMustBuy = dummyData.menu.find((a) => (a.name = "Must Buy"));
    setMustBuy(
      selectedMustBuy?.list.filter((a) => a.categories.includes(categoryId))
    );

    let selectedSales = dummyData.banner_sale;
    setSales(selectedSales);

    //find menu based on menutypeid
    let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);

    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
  }

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {/*Icon */}
        <Image
          source={icons.search}
          style={{ height: 20, width: 20, tintColor: COLORS.black }}
        />
        <TextInput
          style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}
          placeholder="search for items"
        />

        {/*filter */}
        <TouchableOpacity onPress={() => setShowFilterModal(true)}>
          <Image
            source={icons.filter}
            style={{ height: 20, width: 20, tintColor: COLORS.black }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderSaleSection() {
    return (
      <Section
        title="SALE TODAY!"
        onPress={() => console.log("show all recommended")}
      >
        <FlatList
          data={sales}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <HorizontalCard
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                alignItems: "center",
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == sales.length - 1 ? SIZES.padding : 0,
                borderRadius: SIZES.radius,
                overflow: "hidden",
              }}
              imageStyle={{
                width: SIZES.width * 0.85,
                height: 180,
              }}
              item={item}
              onPress={() => console.log("horizontal pressed")}
            />
          )}
        />
      </Section>
    );
  }

  function renderDeliveryTo() {
    return (
      <View style={{ marginHorizontal: SIZES.padding }}>
        <Text
          style={{ color: COLORS.primary, ...FONTS.body3, fontWeight: "bold" }}
        >
          DELIVERY TO
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}> {dummyData?.myProfile?.address}</Text>
          <Image
            source={icons.down_arrow}
            style={{ marginLeft: SIZES.base, height: 20, width: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderTrending() {
    return (
      <Section
        title="TRENDING!"
        onPress={() => console.log("show all popular items")}
      >
        <FlatList
          data={trending}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <VerticalCard
              containerStyle={{
                marginLeft: SIZES.padding,
                marginRight: SIZES.padding,
                width: 200,
              }}
              imageStyle={{
                width: 200,
                height: 200,
              }}
              briefShown={true}
              item={item}
              onPress={() =>
                navigation.navigate("Detail", {
                  item,
                })
              }
            />
          )}
        />
      </Section>
    );
  }

  function renderMustBuy() {
    return (
      <Section title="MUST BUY" onPress={() => console.log("Must buy pressed")}>
        <FlatList
          data={mustBuy}
          keyExtractor={(item) => `${item.id}`}
          vertical
          numColumns={2}
          //showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <VerticalCard
              containerStyle={{
                marginLeft: SIZES.padding - 5,
                height: 100,
                width: (SIZES.width / 2) * 0.85,
                //padding: SIZES.padding,
                marginBottom: 130,
              }}
              imageStyle={{
                width: 150,
                height: 150,
              }}
              item={item}
              briefShown={false}
              onPress={() =>
                navigation.navigate("Detail", {
                  item,
                })
              }
            />
          )}
        />
      </Section>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* search */}
      {renderSearch()}

      {/* filter modal - if component did mount */}

      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}

      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderDeliveryTo()}
            {renderSaleSection()}
            {renderTrending()}
            {renderMustBuy()}
          </View>
        }
        ListFooterComponent={<View style={{ height: 200 }}></View>}
        renderItem={({ item, index }) => {
          return <View />;
        }}
      />
    </View>
  );
};

export default Home;

/*

 <HorizontalCard
              containerStyle={{
                height: 130,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => console.log("horizontal card")}
            />

*/

/*
  function renderPopularSection() {
    return (
      <Section
        title="Popular Near You"
        onPress={() => console.log("show all popular items")}
      >
        <FlatList
          data={popular}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <VerticalCard
              containerStyle={{
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == popular.length - 1 ? SIZES.padding : 0,
              }}
              item={item}
              onPress={() => console.log("Vertical Card")}
            />
          )}
        />
      </Section>
    );
  }
  */

/*

  function renderCategory() {
    return (
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 55,
              marginTop: SIZES.padding,
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index == dummyData.categories.length - 1 ? SIZES.padding : 0,
              paddingHorizontal: 8,
              borderRadius: SIZES.radius,
              backgroundColor:
                selectedCategoryId == item.id
                  ? COLORS.primary
                  : COLORS.lightGray2,
            }}
            onPress={() => {
              setSelectedCategoryId(item.id);
              handleChangeCategory(item.id, selectedMenuType);
            }}
          >
            <Image
              source={item.icon}
              style={{ marginTop: 5, height: 50, width: 50 }}
            />

            <Text
              style={{
                alignSelf: "center",
                marginRight: SIZES.base,
                color:
                  selectedCategoryId == item.id
                    ? COLORS.white
                    : COLORS.darkGray,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
  */

/*
  function renderMenuTypes() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight:
                index == dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}
          >
            <Text
              style={{
                color:
                  selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
  */
