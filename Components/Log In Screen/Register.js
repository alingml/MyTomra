import React from "react";
import {StyleSheet, Text, View, SafeAreaView , TextInput, TouchableOpacity, CheckBox} from "react-native";


import Header from "../Shared/Header";


const Register = () => {

  return(
    <View style={styles.loginContainer}>
      <Header leftText={"Back"} rightText={"Language"} leftIconName={"chevron-left"} rightIconName={"language"} />
      <View style={styles.options}>

        <Text style={styles.signIn}>Sign in</Text>

    <View
 	 style={{
    borderColor: "black",
     }}>
        <Text style={styles.register}>Register</Text>
        </View>
      </View>
      <SafeAreaView style={styles.fields}>
        <TextInput value={"Firstname"} style={styles.firstName}/>
        <TextInput value={"Lastname"} style={styles.lastName}/>
        <TextInput value={"Email"} style={styles.emailInput}/>
        <TextInput value={"Password"} style={styles.passwordInput}/>
        <View style={styles.checkboxContainer}>
            <CheckBox />
            <Text style={styles.checkboxText}>I have read and agree to the Privacy Policy and Terms and Conditions</Text>
        </View>
      </SafeAreaView>
      <View>
          <TouchableOpacity>
            <Text style={styles.title}>
                Register
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    loginContainer: {
      flex:1,
    },
    options: {
      flex:1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 15,
  
  
    },
    signIn: {
      fontSize: 24,


    },
    
    register: {
      fontSize: 24,
      fontWeight: "bold",
      borderBottomWidth: 3,
      marginBottom:0
    },
  
    fields: {
        flex:3,
        marginHorizontal:15
    },
  
    emailInput: {
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
      paddingBottom: 10,
      fontWeight: "500",
      marginBottom: 10
    },
  
    passwordInput: {
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
      paddingBottom: 10,
      marginBottom: 10,
      fontWeight: "500"
    },
    firstName: {
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        fontWeight: "500",
        marginBottom: 10,
        paddingBottom: 10,
    },
    lastName: {
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 10,
        fontWeight: "500",
        
    },

    title: {
      color: "black",
      backgroundColor: "white",
      fontWeight: "bold",
      textAlign: "center",
      paddingVertical: 15,
      borderRadius: 50,
      marginHorizontal: 15,
      fontSize: 18,
      marginVertical: 20
    },
    forgotPassword: {
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 30
    },
    checkboxContainer: {
        flexDirection: "row",
        marginVertical: 15
    },
    checkboxText: {
        marginHorizontal: 10
    }
  })

export default Register;