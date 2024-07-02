import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";
import { Link } from "expo-router";
import Icon1 from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 29, fontWeight: "bold" }}>THANNICAN</Text>
      </View>
      <View style={{ paddingLeft: 20 }}>
        <Text style={{ justifyContent: "flex-start" }}>
          <Link href="/home">
            <Icon1 name="arrow-left" size={40} color="black" />
          </Link>
        </Text>
      </View>
      <View style={{ padding: 20, width: "100%" }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 35 }}>
          Create KYC Details
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
          <TextInput
            placeholder="Enter Bank Account Number*"
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
          <TextInput
            placeholder="Enter IFSC Code*"
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
          <TextInput
            placeholder="Enter Aadhaar number*"
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
          <TextInput
            placeholder="Enter PAN Card Number (Optional)"
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
          <TextInput
            placeholder="Enter Proofs (GST Docs) (Optional)"
            style={{
              width: "100%",
              fontSize: 15,
              textAlign: "center",
            }}
          ></TextInput>
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <Link
          href="/"
          style={{
            backgroundColor: "#22577A",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            borderRadius: 10,
            height: 40,
            paddingTop: 8,
            shadowColor: "black",
            shadowOffset: { width: 2, height: 4 },
          }}
        >
          <Text>Submit</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 17,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#e6e6e6",
    borderColor: "transparent",
    shadowColor: "#b3b3b3",
    shadowOffset: { width: 2, height: 4 },
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  tittle: {
    color: "black",
  },
  parent: {
    height: "100%",
    width: "100%",
  },
});

