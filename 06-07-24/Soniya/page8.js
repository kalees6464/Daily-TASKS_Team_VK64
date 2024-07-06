import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
} from "react-native";
// import { Link } from "expo-router";
import { Iconify } from "react-native-iconify";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  // const [loaded] = useFonts({
  //   poppins: require("../assets/fonts/Poppins-Black.ttf"),
  // });
  // if (!loaded) {
  //   return null;
  // }
  return (
    <SafeAreaView
      style={{ height: "100%", width: "100%", backgroundColor: "#564478" }}
    >
      {/* <LinearGradient
        colors={["#C4DFE6", "#66A5AD"]}
        style={styles.background}
      /> */}
      <View style={{ padding: 20, paddingTop: 60 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>THANNICAN</Text>
      </View>
      <View style={{ paddingLeft: 20 }}>
        <Text style={{ justifyContent: "flex-start" }}>
          {/* <Link href="/signin"> */}
          <Iconify
            icon="solar:fluent-emoji-high-contrast:left-arrow"
            size={30}
            color="black"
          />
          {/* </Link> */}
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>
          Create Account
        </Text>
      </View>
      <View style={{ gap: 40, padding: 20 }}>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "grey",
            shadowOffset: { width: 2, height: 2 },
            borderRadius: 10,
            borderColor: "grey",
            borderWidth: 1,
            backgroundColor: "white",
            paddingTop: 4,
            gap: 10,
          }}
        >
          <Iconify icon="fa6-solid:user" size={33} color="black" />
          <TextInput
            placeholder="Enter Your Name"
            style={{
              width: "100%",
              fontSize: 16,
              height: 50,

              fontWeight: "bold",
            }}
          ></TextInput>
        </View>

        <View
          style={{
            width: "100%",
            paddingHorizontal: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "grey",
            shadowOffset: { width: 2, height: 2 },
            borderRadius: 10,
            borderColor: "grey",
            borderWidth: 1,
            backgroundColor: "white",
            paddingTop: 4,
            gap: 10,
          }}
        >
          <Iconify icon="ic:baseline-mail" size={33} color="black" />
          <TextInput
            placeholder="Enter Your Email"
            style={{
              width: "100%",
              fontSize: 16,
              height: 50,

              fontWeight: "bold",
            }}
          ></TextInput>
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "grey",
            shadowOffset: { width: 2, height: 2 },
            borderRadius: 10,
            borderColor: "grey",
            borderWidth: 1,
            backgroundColor: "white",
            paddingTop: 4,
            gap: 10,
          }}
        >
          <Iconify icon="ic:round-lock" size={33} color="black" />
          <TextInput
            placeholder="Create Password"
            style={{
              width: "100%",
              fontSize: 16,
              height: 50,

              fontWeight: "bold",
            }}
          ></TextInput>
          <Iconify icon="mdi:eye-lock" size={33} color="black" />
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "grey",
            shadowOffset: { width: 2, height: 2 },
            borderRadius: 10,
            borderColor: "grey",
            borderWidth: 1,
            backgroundColor: "white",
            paddingTop: 4,
            gap: 10,
            backgroundColor: "yellow",
          }}
        >
          <Iconify icon="ic:round-lock" size={33} color="black" />
          <TextInput
            placeholder="Confirm Password"
            style={{
              width: "100%",
              fontSize: 16,
              height: 50,

              fontWeight: "bold",
            }}
          ></TextInput>
          <Iconify icon="mdi:eye-lock" size={33} color="black" />
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "grey",
            shadowOffset: { width: 2, height: 2 },
            borderRadius: 10,
            borderColor: "grey",
            borderWidth: 1,
            backgroundColor: "white",
            paddingTop: 4,
            gap: 10,
          }}
        >
          <Iconify icon="ic:round-lock" size={33} color="black" />
          <TextInput
            placeholder="Enter Your Mobile Number"
            style={{
              width: "100%",
              fontSize: 16,
              height: 50,

              fontWeight: "bold",
            }}
          ></TextInput>
          {/* <Iconify icon="mdi:eye-lock" size={33} color="black" /> */}
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "grey",
            shadowOffset: { width: 2, height: 2 },
            borderRadius: 10,
            borderColor: "grey",
            borderWidth: 1,
            backgroundColor: "white",
            paddingTop: 4,
            gap: 10,
          }}
        >
          <Iconify icon="ic:round-lock" size={33} color="black" />
          <TextInput
            placeholder="Enter Your Address"
            style={{
              width: "100%",
              fontSize: 16,
              height: 50,

              fontWeight: "bold",
            }}
          ></TextInput>
          {/* <Iconify icon="mdi:eye-lock" size={33} color="black" /> */}
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <View
          href="/"
          style={{
            backgroundColor: "#3fbdf1",
            borderRadius: 10,
            height: 40,
            shadowColor: "grey",
            shadowOffset: { width: 2, height: 2 },
          }}
        >
          <Text
            style={{
              paddingTop: 10,
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            Next
          </Text>
        </View>
      </View>

      <Text style={{ textAlign: "center", color: "white" }}>
        Already have an account?{" "}
        <Text style={{ fontWeight: "bold", color: "black" }}>Sign in</Text>
      </Text>

      <Text style={{ textAlign: "center", marginTop: 20, color: "white" }}>
        Sign up with social Account?{" "}
      </Text>

      <View style={styles.bottom}>
        <Iconify icon="devicon:google" size={30} color="black" />
        <Iconify icon="logos:facebook" size={33} color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  child: {
    height: 40,
    margin: 17,
    borderWidth: 1,

    borderRadius: 8,
    backgroundColor: "#e6e6e6",
    borderColor: "transparent",
    shadowColor: "#b3b3b3",
    shadowOffset: { width: 2, height: 2 },
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
  tittle: {
    color: "black",
  },
  parent: {
    height: 667,
    width: 375,
    backgroundColor: "#C4DFE6",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    gap: 20,
    paddingTop: 20,
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
