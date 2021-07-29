import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerFonts}>
        <Icon name={props.leftIconName} size={props.leftIconSize} /> {props.leftText}
      </Text>
      <Text style={styles.headerFonts}>
        {props.rightText}
        <Icon name={props.rightIconName} size={props.rightIconSize} />
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
    marginTop: 20,
    paddingBottom: 0,
  },
  headerFonts: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Header;
