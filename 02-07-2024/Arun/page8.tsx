import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";
import { Link } from "expo-router";
import Icon0 from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Icon6 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/FontAwesome6";
// import Icon2 from "react-native-vector-icons/AntDesign";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 29, fontWeight: "bold" }}>THANNICAN</Text>
      </View>
      <View style={{ paddingLeft: 20 }}>
        <Text style={{ justifyContent: "flex-start" }}>
          <Icon0 name="leftcircleo" size={25} color="black" style={{}} />
        </Text>
      </View>

      <View style={{ padding: 20, width: "100%" }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 35 }}>
          Enter Details
        </Text>
      </View>

      <View style={styles.input}>
        <Icon3 name="mobile-phone" size={25}></Icon3>
        <TextInput
          style={{ paddingRight: 130, textAlign: "center" }}
          placeholder="Enter Your Mobile Number"
        />
      </View>

      <View style={styles.input}>
        <Icon5 name="store" size={20}></Icon5>
        <TextInput
          style={{ paddingRight: 130, textAlign: "center" }}
          placeholder="Enter Shop Name"
        />
      </View>
      <View style={styles.input}>
        <Icon4 name="map-location-dot" size={20}></Icon4>
        <TextInput
          style={{ paddingRight: 130, textAlign: "center" }}
          placeholder="Enter Shop Address"
        />
      </View>
      <View style={styles.input}>
        <Icon6 name="crosshairs" size={20}></Icon6>
        <TextInput
          style={{ paddingRight: 130, textAlign: "center" }}
          placeholder="Enter Shop Pincode"
        />
      </View>

      <View style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link
          href="/userInterFace1"
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(34,87,122,1)",
            padding: 10,
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            borderRadius: 10,
            height: 40,
            marginTop: 120,
            marginBottom: 15,
            shadowColor: "#aeaeae",
            shadowOffset: { width: 2, height: 4 },
          }}
        >
          <Text>Verify</Text>
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
    // justifyContent: "space-between",
    // alignItems: "center",
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
