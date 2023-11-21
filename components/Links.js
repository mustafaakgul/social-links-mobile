import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {SocialIcon} from "@rneui/themed";
import {StatusBar} from "expo-status-bar";

export default function Links() {
    return (


            <SafeAreaView style={styles.container}>
                <ScrollView horizontal={true} style={styles.scrollView}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad

                    </Text>
                </ScrollView>
            </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },

    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 10,
        


    },
    text: {
        fontSize: 22,

    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2,
    }
})