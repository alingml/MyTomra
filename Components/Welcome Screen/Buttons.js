import React from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import LogIn from "./Components/Log In Screen/LogIn";

const Buttons = () => {
  return (
    <View>
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.title}>
          <Icon name="user" size={19} />
          Log In <Icon name="chevron-right" size={17} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.subtitle}>
          <Icon name="location-arrow" size={19} />
          Find closest machine
          <Icon name="chevron-right" size={17} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "black",
    backgroundColor: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 50,
    marginHorizontal: 15,
    fontSize: 18,
  },
  subtitle: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    borderWidth: 4,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 20,
    fontSize: 18,
  },
  appButtonContainer: {
    width: "100%",
  },
});

export default Buttons;
