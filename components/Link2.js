import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import React, { useState } from 'react';
//import { Button } from 'react-native-elements';
import { Avatar, Badge, Button, Icon, SocialIcon, Divider } from '@rneui/themed';
import Links from "./components/Links";
import Link from "./components/Link";

export default function Link2() {

    const [message, setMessage] = useState(10)
    const [visible, setVisible] = useState(false)
    const [twitter, setTwitter] = useState("twitter")
    // const [accounts, setAccounts] = useState("")
    // const [links, setLinks] = useState([])
    this.state = { accounts: "", links: []}

    const toggleView = () => {
      setVisible(!visible); // toggle the state, true to false, or false to true
    }

    const getProfile = () => {
        let url = "http://127.0.0.1:8000/api/v1/accounts/me";
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk1NTc0Njk2LCJpYXQiOjE2OTU1NzEwOTYsImp0aSI6IjE3YTZkOTc4YTg4YzQ3NmJiNDlkOGIwOGU5NThiMWQwIiwidXNlcl9pZCI6MX0.RO6QHgpnqZF1c1pNscgFvlqfN-pCiIIP9dcWcmbEUwY` },
            // headers: { 'Content-Type': 'application/json', headers: {Authorization: `Bearer ${localStorage.getItem('token')}` } },
        };
        // if (categoryId) {
        //     url += "?categoryId=" + categoryId;
        // }
        fetch(url, requestOptions)
            .then(response => response.json()) // gelen respon icin repsonsu json a dondur
            .then(data => this.setState({accounts: data})); // gelen datayı set et
    }

  return (

      // <View style={styles.container}>
      //     <View>
      //         <Avatar
      //             size={200}
      //             rounded
      //             source={{ uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80" }}
      //         />
      //     </View>
      //
      //     <Badge
      //         status="error"
      //         value={message}
      //         containerStyle={{ position: 'absolute', top: 320, right: 100 }}
      //     />
      //
      //     <Text>Lily</Text>
      //
      //     <Button title="Solid" type="outline"
      //     containerStyle={{ backgroundColor: "yellow" }}
      //     titleStyle={{ color: "red" }}/>
      // </View>

    <View style={styles.container}>
        <Avatar
            size={200}
            rounded
            source={{ uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80" }}
        />
        <Text h1>@{this.state.accounts.username}</Text>
        <Text h2>Nodeme</Text>

        {/*<Link></Link>*/}

        <View style={styles.vertical}>
            <SocialIcon
                type={twitter}
            />
            <Divider orientation="vertical" />
            <SocialIcon
                type='facebook'
            />
            <Divider orientation="vertical" />
            <SocialIcon
                type='instagram'
            />
        </View>

        <Button title="Nodeme" type="outline" onPress={toggleView}/>
        {/*<StatusBar style="auto" />*/}
        {/*<View style={{ display: visible ? 'flex' : 'none' }}>*/}
        {/*    <Text>Hidden</Text>*/}
        {/*</View>*/}
    </View>
  );
}

{/*const styles = StyleSheet.create({*/}
{/*    scrollContainer: {*/}
{/*        flex: 1,*/}
{/*        backgroundColor: '#fff',*/}
{/*    },*/}
{/*    container: {*/}
{/*      flex: 1,*/}
{/*      backgroundColor: '#fff',*/}
{/*      alignItems: 'center',*/}
{/*      justifyContent: 'center',*/}
{/*    },*/}

{/*    vertical: {*/}
{/*        marginBottom: 10,*/}
{/*        display: 'flex',*/}
{/*        flexDirection: 'row',*/}
{/*        justifyContent: 'space-evenly',*/}
{/*    },*/}
{/*});*/}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    vertical: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});
