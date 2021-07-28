import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerFonts}>
        <Icon name="globe" size={19} /> Select Location
      </Text>
      <Text style={styles.headerFonts}>
        Language
        <Icon name="language" size={19} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 0,
  },
  headerFonts: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Header;
