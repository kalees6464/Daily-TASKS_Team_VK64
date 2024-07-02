import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
} from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 29, fontWeight: "bold" }}>THANNICAN</Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 35 }}>
          Create Account
        </Text>
      </View>
      <View style={{ gap: 20, padding: 20 }}>
        <View
          style={{
            width: "100%",
            height: 40,
            paddingHorizontal: 20,
            display: "flex",
            flexDirection: "row",
            shadowColor: "#b3b3b3",
            shadowOffset: { width: 2, height: 4 },
            borderRadius: 10,
            borderColor: "#aeaeae",
            borderWidth: 1,
          }}
        >
          <Icon
            name="user"
            style={{
              textAlign: "right",
              fontWeight: "bold",
              fontSize: 25,
              paddingTop: 5,
            }}
          ></Icon>
          <TextInput
            placeholder="Enter Your Name"
            style={{
              width: "100%",
              fontSize: 15,
              textAlign: "center",
            }}
          ></TextInput>
        </View>

        <View
          style={{
            width: "100%",
            height: 40,
            paddingHorizontal: 20,
            display: "flex",
            flexDirection: "row",
            shadowColor: "#b3b3b3",
            shadowOffset: { width: 2, height: 4 },
            borderRadius: 10,
            borderColor: "#aeaeae",
            borderWidth: 1,
          }}
        >
          <Icon
            name="envelope-o"
            style={{
              textAlign: "right",
              fontWeight: "bold",
              fontSize: 25,
              paddingTop: 5,
            }}
          ></Icon>
          <TextInput
            placeholder="Enter Your Email"
            style={{
              width: "100%",
              fontSize: 15,
              textAlign: "center",
            }}
          ></TextInput>
        </View>

        <View
          style={{
            width: "100%",
            height: 40,
            paddingHorizontal: 20,
            display: "flex",
            flexDirection: "row",
            shadowColor: "#b3b3b3",
            shadowOffset: { width: 2, height: 4 },
            borderRadius: 10,
            borderColor: "#aeaeae",
            borderWidth: 1,
          }}
        >
          <Icon
            name="lock"
            style={{
              textAlign: "right",
              fontWeight: "bold",
              fontSize: 25,
              paddingTop: 5,
            }}
          ></Icon>
          <TextInput
            placeholder="Create Password"
            style={{
              width: "100%",
              fontSize: 15,
              textAlign: "center",
            }}
          ></TextInput>
          <Icon
            name="eye"
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: 25,
            }}
          ></Icon>
        </View>

        <View
          style={{
            width: "100%",
            height: 40,
            paddingHorizontal: 20,
            display: "flex",
            flexDirection: "row",
            shadowColor: "#b3b3b3",
            shadowOffset: { width: 2, height: 4 },
            borderRadius: 10,
            borderColor: "#aeaeae",
            borderWidth: 1,
          }}
        >
          <Icon
            name="lock"
            style={{
              textAlign: "right",
              fontWeight: "bold",
              fontSize: 25,
              paddingTop: 5,
            }}
          ></Icon>
          <TextInput
            placeholder="Confirm Password"
            style={{
              width: "100%",
              fontSize: 15,
              textAlign: "center",
            }}
          ></TextInput>
          <Icon
            name="eye"
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: 25,
            }}
          ></Icon>
        </View>
      </View>
      <View style={{ paddingTop: 160 }}>
        <View style={styles.button}>
          <Text
            style={{
              backgroundColor: "#cb4747",
              paddingHorizontal: 130,
              paddingVertical: 15,
              borderRadius: 5,
              color: "white",
            }}
          >
            Sign in
          </Text>
        </View>
        <View style={styles.signup}>
          <Text style={{}}>Don't have an account? Signup</Text>
        </View>
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
    shadowOffset: { width: 2, height: 4 },
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
  button: {
    color: "white",
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    gap: 20,
  },
  signup: {
    width: "100%",
    alignItems: "center",
  },
});
