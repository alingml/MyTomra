import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../Shared/Header";
import Buttons from "../Welcome Screen/Buttons";


const AppInfo = () => {

  return (
    <View style={styles.appInfoContainer}>
    <Header leftText={"Location"} rightText={"Language"} leftIconName={"globe"} rightIconName={"language"} leftIconSize={18} rightIconSize={17}/>
    <View>
      <Image
        source={require("../../assets/logo-carbon.png")}
        style={styles.logoStyle}
      />
      <Text style={styles.appHero}>It's the more rewarding way to recycle</Text>
      <Text style={styles.appInfo}>
        Collect your recyclables, return them to your nearest recycling point
        and collect your digital refunds.
      </Text>
      <Buttons />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    width: 200,
    height: 50,
    marginHorizontal: "20%",
    marginBottom: 50
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
});

export default AppInfo;
