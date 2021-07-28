import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AppInfo = () => {
  return (
    <View style={styles.appInfoContainer}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logoStyle}
      />
      <Text style={styles.appHero}>It's the more rewarding way to recycle</Text>
      <Text style={styles.appInfo}>
        Collect your recyclables, return them to your nearest recycling point
        and collect your digital refunds.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    width: 200,
    height: 50,
    marginHorizontal: "23%",
  },
  appHero: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  appInfo: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: 50,
  },
  appInfoContainer: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});

export default AppInfo;
