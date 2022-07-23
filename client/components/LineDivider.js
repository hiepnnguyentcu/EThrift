import { View } from "react-native";
import { SIZES } from "../constants";
const LineDivider = () => {
  return (
    <View
      style={{ height: 1, width: SIZES.width * 0.8, backgroundColor: "black", alignSelf:"center" }}
    ></View>
  );
};

export default LineDivider;
