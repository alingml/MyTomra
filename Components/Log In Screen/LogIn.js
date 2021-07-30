import React, {useState} from "react";
import {StyleSheet, Text, View, SafeAreaView , TextInput, TouchableOpacity, Modal, Pressable} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const Login = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);

  return(
    <View style={styles.loginContainer}>
      <View style={styles.options}>
      <View
 	 style={{
    borderColor: "black"
     }}>
        <Text style={styles.signIn}>Sign in</Text>
    </View>
    <Pressable onPress={()=> navigation.navigate('Register')}>
        <Text style={styles.register}>Register</Text>
        </Pressable>
      </View>
      <SafeAreaView style={styles.fields}>
        <TextInput value={"Email"} style={styles.emailInput}/>
        <TextInput value={"Password"} style={styles.passwordInput}/>
        <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible={modalVisible}
        onRequestClose={()=> {
            setModalVisible(!modalVisible)
        }}
        >
            {/* <View style={styles.closeIconView}> */}
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon style={styles.closeIcon} name="close" size={18} />
            </Pressable>
            {/* </View> */}
            <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Reset Password</Text>
            <Text style={styles.modalInfo}>Type your address below and we will send you an email with instructions on how to reset your password.</Text>
            <TextInput value={"Email"} style={styles.emailInput}/>
            <TouchableOpacity style={styles.buttonContainer}>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
        <Text style={styles.subtitle}>
          Send
        </Text>
        </Pressable>
      </TouchableOpacity>
            </View>
        </Modal>
        <TouchableOpacity>
            <Pressable
            onPress={() => setModalVisible(true)}
            >
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </Pressable>
        </TouchableOpacity>
      </SafeAreaView>
      <View>
          <TouchableOpacity>
            <Pressable onPress={() => navigation.navigate('UserAccount')}>
            <Text style={styles.title}>
                Sign In
            </Text>
            </Pressable>
          </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  loginContainer: {
    flex:1,
    backgroundColor: "#6ECEB2",
    paddingHorizontal: 20

  },
  options: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:30


  },
  signIn: {
    fontSize: 24,
    fontWeight: "bold",
    borderBottomWidth: 3,
    marginBottom:0
  },
  
  register: {
    fontSize: 24,
    
  },

  fields: {
      flex:3,
  },

  emailInput: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontWeight: "500",
    marginBottom: 20
  },

  passwordInput: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontWeight: "500"
  },
  title: {
    color: "black",
    backgroundColor: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 50,
    fontSize: 18,
    marginVertical: 20
  },
  forgotPassword: {
      textAlign: "center",
      fontWeight: "bold",
      marginTop: 30
  },
  closeIcon: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal:30,
      marginTop:20,
      fontWeight: "bold"

  },
  modalContainer: {
      marginHorizontal:30,

  },
  modalTitle: {
      fontSize: 24,
      fontWeight:"bold",
      marginVertical: 50
  },
  modalInfo: {
      lineHeight:25,
      marginBottom: 50
  },
  modalStyle: {
  },
  subtitle: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 15,
    marginVertical: 20,
    fontSize: 18,
    backgroundColor: "#6ECEB2",
    borderRadius: 50,
    color: "white",
    marginTop: 250
  },
})

export default Login;
