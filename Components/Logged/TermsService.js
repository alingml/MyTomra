import React from 'react';
import {ScrollView, Text, StyleSheet} from "react-native";

const TermsService = () => {
    return  (
        <ScrollView style={styles.container}>
            <Text style={styles.pageTitle}>
                Terms of Service
            </Text>
            <Text style={styles.firstParagraph}>
            Aenean nec est sit amet diam semper rutrum. Ut sit amet sapien diam. Pellentesque vitae risus orci. Fusce id finibus orci. Sed non posuere mi. Sed bibendum mi in quam euismod feugiat. Integer faucibus nisl eros, eget laoreet justo blandit vel. Quisque aliquet faucibus neque, at dignissim purus auctor et.
            </Text>
            <Text style={styles.firstParagraph}>
            Pellentesque ornare massa vitae elit posuere malesuada. Praesent at lacus vel eros lacinia varius vitae sit amet neque. Morbi ultricies commodo odio, quis mattis elit vestibulum vitae. Donec erat elit, pretium ac eros sit amet, dapibus auctor purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris malesuada purus metus, sit amet venenatis mauris blandit at. Curabitur ut ipsum laoreet, pellentesque leo a, porta neque.
            </Text>
            <Text style={styles.firstParagraph}>
            <Text style={styles.firstParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim luctus tellus, ac dignissim ipsum lacinia vel. Donec ac ipsum ut diam commodo tristique. In aliquet elit ex, non ullamcorper quam vestibulum in. Donec molestie in sapien sit amet vulputate. Etiam odio arcu, dictum sit amet dignissim at, ultrices a lorem. Nullam finibus magna nec pretium tristique. Sed et orci vitae mi aliquet lacinia ac at tellus. Donec eu est iaculis, tempus mauris eget, molestie justo. Sed ac eros in lorem eleifend tempor et nec ex. Nulla et orci in sem luctus iaculis. Proin vel risus ut sapien convallis vulputate. Nulla tincidunt venenatis malesuada. Phasellus porta pellentesque auctor. Nam sagittis pretium mollis.            </Text>            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 20
    },
    pageTitle: {
        fontSize:26,
        fontWeight:"bold",
        paddingVertical:20
    },
    firstParagraph: {
        paddingVertical: 10
    }
})

export default TermsService;