import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

import { Iconify } from "react-native-iconify";
// import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

export default function Home() {
  const [loaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Black.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 20, paddingTop: 60 }}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "white",
            fontFamily: "poppins",
          }}
        >
          THANNI CAN
        </Text>
      </View>
      <View style={{ paddingLeft: 20 }}>
        <Text style={{ justifyContent: "flex-start" }}>
          {/* <Link href="/signin"> */}
          <Iconify
            icon="solar:fluent-emoji-high-contrast:left-arrow"
            size={30}
            color="white"
          />
          {/* </Link> */}
        </Text>
      </View>
      <View style={{ padding: 20, width: "100%", paddingBottom: 300 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            paddingBottom: 30,
            paddingTop: 80,
            color: "white",
            fontFamily: "poppins",
          }}
        >
          Forget Password
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",

            alignItems: "center",
            backgroundColor: "white",
            padding: 0,
            paddingLeft: 10,
            borderRadius: 10,
            borderColor: "gray",
            borderWidth: 1,
            shadowColor: "gray",
            shadowOffset: { width: 2, height: 2 },
          }}
        >
          <Iconify icon="ic:baseline-mail" size={24} color="black" />
          <TextInput
            placeholder="Enter Your Email"
            style={{
              width: "100%",
              padding: 10,
              fontSize: 16,
              fontWeight: "bold",
              height: 50,
              fontFamily: "poppins",
            }}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          // paddingBottom : 90,
          padding: 20,
        }}
      >
        {/* <Link href="/"> */}
        <Text
          style={{
            backgroundColor: "#F5A623",
            paddingVertical: 15,

            fontSize: 18,
            fontWeight: "bold",
            color: "black",
            borderRadius: 10,
            width: "100%",
            alignItems: "center",
            textAlign: "center",
            shadowColor: "gray",
            shadowOffset: { width: 2, height: 2 },
            fontFamily: "poppins",
          }}
        >
          Submit
        </Text>
        {/* </Link> */}
      </View>
    </SafeAreaView>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#564478",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
});
