import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

import AppInfo from "./Components/Welcome Screen/AppInfo";
import UserAccount from "./Components/Logged/UserAccount";
import { DrawerActions } from "react-navigation-drawer";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();


export default function App() {
  return (
      <View style={styles.container}>
        <AppInfo />
      </View>
      // <NavigationContainer >
      //   <Drawer.Navigator >
      //     <Drawer.Screen name="Home" component={AppInfo} />
      //     <Drawer.Screen name="SecondScreen" component={UserAccount} />
      //   </Drawer.Navigator>
      // </NavigationContainer>
  )};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#6ECEB2",
    textAlign: "center",
  },
});
