import * as React from "react";
//import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground, Button, Pressable, Linking,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import axios from 'axios';
import {useState, useEffect} from "react";
import {API_BASE_URL} from "../utils/Constants";
// import {Button} from "@rneui/core";
import {SocialIcon} from "@rneui/themed";

const MobileDarkMode = () => {

  const [message, setMessage] = useState('')
  const [customLinks, setCustomLinks] = useState([])
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${API_BASE_URL}accounts/me`, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem('token')}`
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAxNTU0MTEyLCJpYXQiOjE3MDE0Njc3MTIsImp0aSI6IjUyMWY5NzE5MGIyNDRhOGQ5NzZiNTA0YTk1NjFmNjdjIiwidXNlcl9pZCI6MX0.Z8CDSQiCTmxTM85lfyT_kHdaV4ru31FYBt46A_9WL78`
      }
    })
        .then(response => {
          console.log("Me");
          setMessage(response.data);
          setLinks(response.data.profile.links)
          //console.log(message);
          console.log(links);
        })
        .catch(error => {
          setError(error);
          console.log(error);
        });

    axios.get(`${API_BASE_URL}links/custom-links`, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem('token')}`
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAxNTU0MTEyLCJpYXQiOjE3MDE0Njc3MTIsImp0aSI6IjUyMWY5NzE5MGIyNDRhOGQ5NzZiNTA0YTk1NjFmNjdjIiwidXNlcl9pZCI6MX0.Z8CDSQiCTmxTM85lfyT_kHdaV4ru31FYBt46A_9WL78`
      }
    })
        .then(response => {
          //console.log("Custom");
          setCustomLinks(response.data.results);
          console.log(customLinks);
        })
        .catch(error => {
          setError(error);
          console.log(error);
        });
  }, []);

  function link2CustomLinks() {
    console.log("link2CustomLinks");
  }

  return (
    <LinearGradient
        style={styles.homeScreen}
        locations={[0, 0.38, 1]}
        colors={["#484c4d", "#121212", "#121212"]}
    >
    {/*<ImageBackground*/}
    {/*  style={styles.mobileDarkMode}*/}
    {/*  resizeMode="cover"*/}
    {/*  source={require("../assets/mobiledarkmode.png")}*/}
    {/*>*/}
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerScrollViewContent}
      >
        <View style={[styles.profile, styles.linksSpaceBlock]}>
          <Image
            style={styles.avatarIcon}
            contentFit="cover"
            source={require("../assets/themedark-mode.png")}
          />
          <Text style={[styles.maykbrito, styles.linkTypo]}>@{message.first_name} {message.last_name}</Text>
          <Text style={[styles.maykbrito, styles.linkTypo]}>Descrip</Text>
        </View>
        <ScrollView
          style={styles.socialLinks}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.socialLinksScrollViewContent}
        >

          {links.map((link) => (
            <SocialIcon
              type={link.title.network}
              onPress={() => Linking.openURL(link.url)}
            />
          ))}

          <SocialIcon
              type='g'
          />

          {/*<Image*/}
          {/*  style={[styles.socialLinksIcon1, styles.socialIconLayout]}*/}
          {/*  contentFit="cover"*/}
          {/*  source={require("../assets/social-links3.png")}*/}
          {/*/>*/}

        </ScrollView>
        <View style={[styles.links, styles.linksSpaceBlock]}>

          {customLinks.map((customLink) => (
            <Pressable style={[styles.button1, styles.buttonFlexBox]}>
              <Text style={[styles.link, styles.linkTypo]} onPress={
                () => Linking.openURL(customLink.url)}>
                {customLink.title}
              </Text>
            </Pressable>
          ))}

        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  socialLinksScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start", //"flex-start",
    justifyContent: "center",
  },
  containerScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  linksSpaceBlock: {
    padding: Padding.p_5xl,
    width: 360,
  },
  linkTypo: {
    color: Color.textColorDarkMode,
    fontFamily: FontFamily.textMd,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.textMd_size,
  },
  socialIconLayout: {
    height: 40,
    width: 40,
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    backgroundColor: Color.surfaceColorDarkMode,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  avatarIcon: {
    width: 112,
    height: 112,
  },
  maykbrito: {
    textAlign: "left",
    marginTop: 8,
  },
  profile: {
    alignItems: "center",
    padding: Padding.p_5xl,
    width: 360,
  },
  socialLinksIcon1: {
    marginLeft: 16,
  },
  socialLinks: {
    alignSelf: "stretch", //"stretch",
    flex: 1,
    //padding: Padding.p_5xl,
    //width: "100%",
  },
  link: {
    textAlign: "center",
    flex: 1,
  },
  button1: {
    marginTop: 16,
  },
  links: {
    padding: Padding.p_5xl,
    width: 360,
  },
  container: {
    position: "absolute",
    top: 56,
    flex: 1,
  },
  mobileDarkMode: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  homeScreen: {
    width: "100%",
    height: 895,
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: 217,
    backgroundColor: "transparent",
    flex: 1,
  },
});

export default MobileDarkMode;
