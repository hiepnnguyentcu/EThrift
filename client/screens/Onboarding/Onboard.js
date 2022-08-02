import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import { TextButton } from "../../components";

const Onboard = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://user-images.githubusercontent.com/43158356/182350291-d9e0a00d-9677-481c-8c52-9abf66f4a2fd.jpeg",
      }}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TextButton
        label={"Login"}
        labelStyle={styles.label}
        buttonContainerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("Login")}
      />
      <TextButton
        label={"Sign Up"}
        labelStyle={styles.label}
        buttonContainerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("Sign Up")}
      />
    </ImageBackground>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 353,
    height: 51,
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "white",
    top: 250,
    marginTop: 20,
  },
  label: {
    alignSelf: "center",
    color: "black",
  },
});

/*

import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function FirstScreen({navigation}) {

    const signUpPress=() => {
        navigation.navigate('Sign Up Screen')
    }
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5]}
      colors={["#3550DC", "#27E9F7"]}
      style={styles.linearGradient}
    >
      <View style={{ flexDirection: "column" }}>
        <Image
          style={styles.mainImage}
          source={{
            uri: "https://user-images.githubusercontent.com/43158356/172126265-6922d4e5-4413-4d65-8213-82c690ad3b5b.png",
          }}
        />

        <View style={{top: 80}}>
          <Text style={styles.appNameText}>QuizzMe</Text>
          <Text style={styles.infoText}>Test your knowledge!</Text>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={signUpPress}
          >
            <Text style = {styles.signUpButtonText}>SIGN UP</Text>
          </TouchableOpacity>

          <Text style = {styles.logInText}>ALREADY HAVE AN ACCOUNT?<Text onPress={()=> navigation.navigate('Log In Screen')} style = {{ color: 'black' }}> LOG IN</Text></Text>
        </View>
      </View>
    </LinearGradient>
  );
}



import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  mainImage: {
    width: 367,
    height: 371,
    top: 200,
  },
  signUpButton: {
    width: 353,
    height: 51,
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "white",
    padding: 10,
    top: 250,
  },
  signUpButtonText:{
    alignSelf:"center",
    top: 6,
    fontSize: 14,
    
  },
  appNameText:{
    alignSelf: "center",
    color: "white",
    fontSize: 30,
    top: 180,
  },
  infoText:{
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    top: 180,
    fontStyle: "italic",
  }, 
  logInText:{
    alignSelf: "center",
    color: "white",
    fontSize: 14,
    top: 270,
  }
});
export default styles;



*/
