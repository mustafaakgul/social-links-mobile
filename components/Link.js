import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {SocialIcon} from "@rneui/themed";
import {StatusBar} from "expo-status-bar";

export default function Link() {
    return (

        <ScrollView scrollEventThrottle={16} horizontal={true}>
            <View style={{flex:1, backgroundColor:'white', paddingTop:20}}>

                <View style={{ height: 80, marginTop: 20 }}>
                    <ScrollView horizontal={true}>
                        <View style={{height: 80, width: 500, marginLeft: 20, borderWidth: 0.1, display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',}}>
                            <View >
                                <SocialIcon
                                    type='facebook'

                                />
                            </View>
                            <View >
                                <SocialIcon
                                    type='facebook'

                                />
                            </View>
                            <View >
                                <SocialIcon
                                    type='facebook'

                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>

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