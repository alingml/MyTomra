import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";

import Header from "./Components/Shared/Header";
import AppInfo from "./Components/Welcome Screen/AppInfo";
import Buttons from "./Components/Welcome Screen/Buttons";
import Login from "./Components/Log In Screen/Login";
import Register from "./Components/Log In Screen/Register";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Login />
        {/* <Header leftText={"Location"} rightText={"Language"} leftIconName={"globe"} rightIconName={"language"}/>
        <AppInfo />
        <Buttons style={styles.buttonStyle} /> */}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#6ECEB2",
    textAlign: "center",
  },
});
