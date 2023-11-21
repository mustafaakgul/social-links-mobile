import * as React from "react";
//import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import axios from 'axios';
import {useState, useEffect} from "react";

const MobileDarkMode = () => {

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Effect")
    setLoading(true);
    axios.get('http://127.0.0.1:8085/api/v1/tags/')
        .then(response => {
          console.log(response.data.data);
          setMessage(response.data.data.length);
        })
        .catch(error => {
          setError(error);
          console.log(error);
        });
  }, []);

  return (
    <ImageBackground
      style={styles.mobileDarkMode}
      resizeMode="cover"
      source={require("../assets/mobiledarkmode.png")}
    >
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
          <Text style={[styles.maykbrito, styles.linkTypo]}>@darbetigh</Text>
        </View>
        <ScrollView
          style={styles.socialLinks}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.socialLinksScrollViewContent}
        >
          <Image
            style={styles.socialIconLayout}
            contentFit="cover"
            source={require("../assets/social-links.png")}
          />
          <Image
            style={[styles.socialLinksIcon1, styles.socialIconLayout]}
            contentFit="cover"
            source={require("../assets/social-links1.png")}
          />
          <Image
            style={[styles.socialLinksIcon1, styles.socialIconLayout]}
            contentFit="cover"
            source={require("../assets/social-links2.png")}
          />
          <Image
            style={[styles.socialLinksIcon1, styles.socialIconLayout]}
            contentFit="cover"
            source={require("../assets/social-links3.png")}
          />
          <Image
            style={[styles.socialLinksIcon1, styles.socialIconLayout]}
            contentFit="cover"
            source={require("../assets/social-links3.png")}
          />
          <Image
            style={[styles.socialLinksIcon1, styles.socialIconLayout]}
            contentFit="cover"
            source={require("../assets/social-links3.png")}
          />
          <Image
            style={[styles.socialLinksIcon1, styles.socialIconLayout]}
            contentFit="cover"
            source={require("../assets/social-links3.png")}
          />
          <Image
            style={[styles.socialLinksIcon1, styles.socialIconLayout]}
            contentFit="cover"
            source={require("../assets/social-links3.png")}
          />
        </ScrollView>
        <View style={[styles.links, styles.linksSpaceBlock]}>
          <View style={styles.buttonFlexBox}>
            <Text style={[styles.link, styles.linkTypo]}>
              Inscreva-se no NLW
            </Text>
          </View>
          <View style={[styles.button1, styles.buttonFlexBox]}>
            <Text style={[styles.link, styles.linkTypo]}>Baixe meu e-book</Text>
          </View>
          <View style={[styles.button1, styles.buttonFlexBox]}>
            <Text style={[styles.link, styles.linkTypo]}>
              Veja meu portfólio
            </Text>
          </View>
          <View style={[styles.button1, styles.buttonFlexBox]}>
            <Text style={[styles.link, styles.linkTypo]}>
              Conheça o Explorer
            </Text>
          </View>
          <View style={[styles.button1, styles.buttonFlexBox]}>
            <Text style={[styles.link, styles.linkTypo]}>
              Conheça o Explorer
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  socialLinksScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
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
    alignSelf: "stretch",
    padding: Padding.p_5xl,
    width: "100%",
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
    marginLeft: -240,
    top: 56,
    left: "50%",
    flex: 1,
  },
  mobileDarkMode: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default MobileDarkMode;
