import {
    View,
    Text,
    ImageBackground,
    Image,
    StyleSheet,
    TextInput,
  } from "react-native";
  import { TextButton } from "../../components";
  import { COLORS, FONTS } from "../../constants";
  import { useState } from "react";
  
  const SignUp = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ marginLeft: "10%" }}>
          {renderText()}
          {renderButton()}
        </View>
  
        <TextButton
          label={"Sign Up"}
          labelStyle={styles.label}
          buttonContainerStyle={styles.buttonContainer}
          onPress={() => navigation.navigate("Login")}
        />
  
        
      </View>
    );
  };
  
  export default SignUp;
  
  function renderText() {
    return (
      <View>
        <Text style={{ fontWeight: "bold", ...FONTS.h2 }}>Sign Up!</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.lightGray1_new }}>
          Create a new account{" "}
        </Text>
      </View>
    );
  }
  
  function renderButton() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    console.log(username)
    console.log(email);
    console.log(password);
  
    return (
      <View style={{ marginTop: 60 }}>
        <View>
          <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>Username</Text>
          <TextInput style={{ ...FONTS.h3 }} onChangeText={setUsername} />
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: COLORS.lightGray1_new,
            }}
          ></View>
        </View>

        <View style={{marginTop:20}}>
          <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>Email</Text>
          <TextInput style={{ ...FONTS.h3 }} onChangeText={setEmail} />
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: COLORS.lightGray1_new,
            }}
          ></View>
        </View>
  
  
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>Password</Text>
          <TextInput
            style={{ ...FONTS.h3 }}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: COLORS.lightGray1_new,
            }}
          ></View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>Confirm Password</Text>
          <TextInput
            style={{ ...FONTS.h3 }}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: COLORS.lightGray1_new,
            }}
          ></View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    buttonContainer: {
      width: 353,
      height: 51,
      borderRadius: 20,
      alignSelf: "center",
      backgroundColor: "black",
      top: 50,
      marginTop: 20,
    },
    label: {
      alignSelf: "center",
      color: "white",
    },
    overlay: {
      backgroundColor: "rgba(255,0,0,0.5)",
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
  