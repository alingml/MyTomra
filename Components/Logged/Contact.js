import React from 'react';
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";


const Contact = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.pageTitle}>Contact us</Text>
                <Text>Hit a snag? We'd love to help you! Please contact us here:</Text>
            </View>
            <View style={{marginTop:20}}>
                <TouchableOpacity>
                        <Pressable style={styles.buttonDesign}>
                            <Icon name="address-book" size={16} />
                            <View>
                            <Text style={styles.buttonDesignTextTitle}>Contact us</Text>
                            <Text style={styles.buttonDesignTextSubtitle}>katana@digitalninja.ro</Text>
                            </View>
                            <Icon name="chevron-right" size={15} />
                        </Pressable>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Pressable style={styles.buttonDesignSecond}>
                            <Icon name="facebook" size={20} />
                            <View>
                            <Text style={styles.buttonDesignTextTitle}>Find us on Facebook</Text>
                            </View>
                            <Icon name="chevron-right" size={15} />
                        </Pressable>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 20
    },
    buttonDesign: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 50,
        backgroundColor: "white",
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonDesignSecond:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
        paddingVertical: 16,
        borderRadius: 50,
        backgroundColor: "white",
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonDesignTextTitle: {
        fontWeight: "700",
        fontSize:12,
        textAlign: "center"
    },
    buttonDesignTextSubtitle: {
        fontSize:10,
        textAlign: "center",
        fontWeight: "bold"
    },
    pageTitle:{
        fontSize:26,
        fontWeight: "bold",
        paddingTop: 50,
        paddingBottom: 20
    }
})

export default Contact;