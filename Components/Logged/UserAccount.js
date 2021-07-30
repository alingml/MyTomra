import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

import Header from "../Shared/Header";
import AppInfo from "../../Components/Welcome Screen/AppInfo";
 

const UserAccount = ({navigation}) => {

    return (
            <View style={styles.userAccountContainer}>
                <View style={styles.username}>
                    <Text style={styles.title}>Hi Alexandru !</Text>
                    <Text style={styles.subtitle}>Ready to recycle?</Text>
                </View>
                <View style={styles.barcodeContainer}>
                    <Image source={require("../../assets/barcode.png")} style={styles.barcodeImage} />
                    <Text style={styles.subtitleBarcode}>Scan your barcode at the machine</Text>
                </View>
                <View>
                    <Text style={styles.payoutButtonLabel}>Your active payout</Text>
                    <TouchableOpacity>
                        <Pressable style={styles.payoutButton}>
                            <Text style={styles.payoutButtonText}>Unknown payout set</Text>
                            <Icon name="chevron-right" size={15} />
                        </Pressable>
                    </TouchableOpacity>
                </View>
                <View style={styles.userAccountSecondContainer}>
                    <TouchableOpacity>
                        <Pressable style={styles.findLocationButton}>
                            <Icon name="location-arrow" size={15} />
                            <Text style={styles.findLocationText}>Find recycling location</Text>
                            <Icon name="chevron-right" size={15} />
                        </Pressable>
                    </TouchableOpacity>
                    <View style={styles.optionsContainer}>
                        <Text style={styles.optionsLabel}>Other</Text>
                        <TouchableOpacity style={styles.optionsContainer}>
                            <Pressable>
                                <View style={styles.optionName}>
                                    <Icon name="gift" size={20} color="white" />
                                    <Text style={styles.optionText}>Vouchers</Text>
                                    <Icon name="chevron-right" size={15} color="white" />
                                </View>
                            </Pressable>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionsContainer}>
                            <Pressable>
                                <View style={styles.optionNameMiddle}>
                                    <Icon name="credit-card" size={20} color="white" />
                                    <Text style={styles.optionText}>Refunds</Text>
                                    <Icon name="chevron-right" size={15} color="white" />
                                </View>
                            </Pressable>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionsContainer}>
                            <Pressable>
                                <View style={styles.optionName}>
                                    <Icon name="star" size={20} color="white" />
                                    <Text style={styles.optionText}>Achievements</Text>
                                    <Icon name="chevron-right" size={15} color="white" />
                                </View>
                            </Pressable>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
}


const styles = StyleSheet.create({
    userAccountContainer: {
        flex: 1,
        backgroundColor: "#6ECEB2",
        paddingHorizontal: 20
    },
    username: {
        marginBottom: 30
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 12,
    },
    subtitleBarcode: {
        textAlign: "center"
    },
    barcodeContainer: {
        height: 120,
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    barcodeImage: {
        maxWidth: 200,
        maxHeight: 75,
        alignSelf: "center"
    },
    payoutButton: {
        paddingVertical: 15,
        backgroundColor: "white",
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center"
    },

    payoutButtonLabel: {
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 10,
        fontWeight: "700"

    },
    userAccountSecondContainer: {
        flex: 11,
    },
    findLocationButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 50,
        backgroundColor: "white",
        marginTop: 30,
    },
    findLocationText: {
    },
    optionsContainer: {
        marginHorizontal: 5,
        marginTop: 10,
    },
    optionName: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderColor: "white",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    optionNameMiddle: {
        borderWidth: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
        paddingHorizontal: 10
    },
    optionsLabel: {
        marginVertical: 5,
        marginHorizontal: 20,
        fontWeight: "700"
    },
    optionText: {
        marginRight: 180,
        textAlign: "left",
        color: "white",

    },


})


export default UserAccount;
