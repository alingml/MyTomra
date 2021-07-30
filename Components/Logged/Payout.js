import React from 'react';

import {View, Text, StyleSheet} from 'react-native'

const Payout = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.containerText}>
                We currently don't offer any ways to payout your refunds, please check again later.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        paddingHorizontal:30,

    },
    containerText: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center"
    }
})


export default Payout;