import React from "react";
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import Icon from "react-native-vector-icons/FontAwesome";

import AppInfo from "./Components/Welcome Screen/AppInfo";
import UserAccount from "./Components/Logged/UserAccount";
import Header from "./Components/Shared/Header";
import Login from "./Components/Log In Screen/Login";
import Register from "./Components/Log In Screen/Register";
import EditProfile from "./Components/Logged/EditProfile";
import Payout from "./Components/Logged/Payout";
import FAQ from "./Components/Logged/FAQ";
import TermsService from "./Components/Logged/TermsService";
import PrivacyPolicy from "./Components/Logged/PrivacyPolicy";
import Contact from "./Components/Logged/Contact";

import Logo from "/Users/alin/MyTomra/assets/logo-carbon.png"

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.appInfoContainer}>
      <View>
        <Image
        source={Logo}
        style={styles.logoStyle}
      />
        <Text style={styles.appHero}>It's the more rewarding way to recycle</Text>
        <Text style={styles.appInfo}>
          Collect your recyclables, return them to your nearest recycling point
          and collect your digital refunds.
      </Text>
      </View>
      <View >
        <TouchableOpacity style={styles.appButtonContainer}>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <View style={styles.loginButton}>
              <Icon name="user" size={19} />
              <Text style={styles.title}>Log In</Text>
              <Icon name="chevron-right" size={17} />
            </View>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <View style={styles.findClosestButton} >
              <Icon name="location-arrow" size={19} />
              <Text style={styles.subtitle}>Find closest machine</Text>
              <Icon name="chevron-right" size={17} />
            </View>
          </Pressable>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {elevation: 0, shadowOpacity: 0, backgroundColor:"#6ECEB2"}}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="UserAccount" component={UserAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#6ECEB2",
    textAlign: "center",
  },
  logoStyle: {
    width: 200,
    height: 50,
    marginHorizontal: "20%",
    marginVertical: 50

  },
  appHero: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50
  },
  appInfo: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 70,
    marginTop: 20
  },
  appInfoContainer: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#6ECEB2",
    paddingHorizontal: 20

  },
  title: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  subtitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  loginButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderColor: "white",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 50
  },

  findClosestButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "white",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 50,
    marginVertical: 20
  }
});
