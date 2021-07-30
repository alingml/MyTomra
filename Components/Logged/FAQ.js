import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';


const FAQ = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.pageTitle}>Frequently Asked Questions</Text>
            <Text style={styles.title}>How can I get my refund digitally?</Text>
            <Text style={styles.firstParagraph}>Download the app from Google Play or iTunes App Stores. Create your personal profile. The app comes with a personal membership barcode that you can scan on the machine to get the refunds digitally into tokens.</Text>
            <Text>Once registered open the app, scan your barcode on the RVM, complete your recycling, and your refunds will appear on your profile within seconds. Remember that you need to have a PayPal account to pay out your refunds.</Text>
            <Text style={styles.title}>Do I need to have a PayPal account to withdraw my refunds?</Text>
            <Text style={styles.firstParagraph}>Yes. Currently the only payout option available is through PayPal.</Text>
            <Text style={styles.title}>How can I add PayPal as a payout option?</Text>
            <Text style={styles.firstParagraph}>First you must create a PayPal account.</Text>
            <Text>Tap "Add payout" on the profile page or through the "More" menu. You will then be redirected to PayPal, to connect your profile with PayPal. Tap "Accept" and you are redirected back.Tap "Add payout" on the profile page or through the "More" menu. You will then be redirected to PayPal, to connect your profile with PayPal. Tap "Accept" and you are redirected back.Tap "Add payout" on the profile page or through the "More" menu. You will then be redirected to PayPal, to connect your profile with PayPal. Tap "Accept" and you are redirected back.</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 20
    },
    pageTitle: {
        fontSize:26,
        fontWeight:"bold",
        paddingTop:20
    },
    title: {
        fontSize:18,
        fontWeight:"700",
        marginVertical: 20
    },
    firstParagraph: {
        marginBottom: 10
    }

});

export default FAQ;