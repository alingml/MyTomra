import React from 'react';

import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Modal, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const EditProfile = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Edit Profile</Text>
            </View>
            <View>
                <Text style={styles.inputText}>First name</Text>
                <TextInput style={styles.input} />
                <Text style={styles.inputText}>Last name</Text>
                <TextInput style={styles.input} />
                <Text style={styles.inputText}>Email</Text>
                <TextInput style={styles.input} />
            </View>
            <View>
                <TouchableOpacity>
                    <Pressable >
                        <Text style={styles.updateButton}>
                            Update
            </Text>
                    </Pressable>
                </TouchableOpacity>
            </View>
            <View >
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.optionContainerFirst}>
                            <Pressable>
                                <View style={styles.optionName}>
                                    <Icon name="lock" size={20} color="white" />
                                    <Text style={styles.optionText}>Change password</Text>
                                </View>
                            </Pressable>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Pressable>
                                <View style={styles.optionNameMiddle}>
                                    <Icon name="globe" size={16} color="white" />
                                    <Text style={styles.optionText}>Change recycling location</Text>
                                </View>
                            </Pressable>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Pressable>
                                <View style={styles.optionName}>
                                    <Icon name="language" size={19} color="white" />
                                    <Text style={styles.optionText}>Language</Text>
                                </View>
                            </Pressable>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Pressable>
                                <View style={styles.optionName}>
                                    <Icon name="tablet" size={19} color="white" style={{marginLeft:5}} />
                                    <Text style={styles.optionText}>Subscribe to newsletter</Text>
                                </View>
                            </Pressable>
                        </TouchableOpacity>
                        </View>
            </View>
        </View>
    )};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    title:{
      fontSize:26,
      fontWeight: "bold",
      marginVertical: 50
    },
    input: {
        borderBottomWidth: 1,
        borderColor: "white",
        alignItems: "center"
    },
    inputText: {
        fontSize:12,
        marginTop: 10,
        color:"white",
        fontWeight: "bold"
    },
    updateButton: {
        color: "black",
        backgroundColor: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 15,
        borderRadius: 50,
        fontSize: 18,
        marginVertical: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    optionName:{
        flexDirection: "row",
    },
    optionNameMiddle: {
        flexDirection: "row",
    },
    optionText: {
        color:"white",
        fontWeight: "700",
        marginLeft: 40
    },
    optionContainer: {
        borderBottomWidth: 1,
        borderColor: "white",
        paddingVertical: 10,
    },
    optionsContainer:{
        marginTop: 50
    },
    optionContainerFirst: {
        borderTopWidth: 1,
        borderBottomWidth:1,
        borderColor: "white",
        paddingVertical: 10
    }

});


export default EditProfile;