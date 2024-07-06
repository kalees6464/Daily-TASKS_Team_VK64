import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
// import { Link } from "expo-router";
// import { Icon } from "@iconify/react";
import { Iconify } from "react-native-iconify";
import { LinearGradient } from "expo-linear-gradient";
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <LinearGradient
        colors={["#C4DFE6", "#66A5AD"]}
        style={styles.background}
      /> */}
      <View>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "white",
              paddingTop: 15,
            }}
          >
            THANNI CAN
          </Text>
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ justifyContent: "flex-start" }}>
            {/* <Link href="/"> */}
            <Iconify
              icon="solar:fluent-emoji-high-contrast:left-arrow"
              size={30}
              color="white"
            />
            {/* </Link> */}
          </Text>
        </View>
        <View style={{ padding: 20, width: "100%" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 30,
              color: "white",
            }}
          >
            Enter OTP
          </Text>
          <Text style={{ textAlign: "center", color: "white" }}>
            OTP sent to **86
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
            paddingTop: 100,
          }}
        >
          <TextInput
            style={{
              borderBottomColor: "white",
              borderWidth: 2,
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              width: 50,
              height: 40,
              padding: 10,
              paddingBottom: 20,
              fontSize: 40,
              fontWeight: "bold",
              color: "white",
            }}
          />
          <TextInput
            style={{
              borderBottomColor: "white",
              borderWidth: 2,
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              width: 50,
              height: 40,
              padding: 10,
              paddingBottom: 20,
              fontSize: 40,
              fontWeight: "bold",
              color: "white",
            }}
          />
          <TextInput
            style={{
              borderBottomColor: "white",
              borderWidth: 2,
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              width: 50,
              height: 40,
              padding: 10,
              paddingBottom: 20,
              fontSize: 40,
              fontWeight: "bold",
              color: "white",
            }}
          />
          <TextInput
            style={{
              borderBottomColor: "white",
              borderWidth: 2,
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              width: 50,
              height: 40,
              padding: 10,
              paddingBottom: 20,
              fontSize: 40,
              fontWeight: "bold",
              color: "white",
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
            paddingTop: 15,
            paddingBottom: 150,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Did not receive OTP in 60s?{" "}
            <Text href="/" style={{ fontWeight: "bold", color: "#F5A623" }}>
              Resend
            </Text>
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
          paddingTop: 70,
        }}
      >
        <View style={{ width: "100%", padding: 20 }}>
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              shadowColor: "grey",
              shadowOffset: { width: 2, height: 2 },
              color: "black",
              borderRadius: 8,
              fontSize: 18,
              // alignItems: "center",
              paddingVertical: 17,
              backgroundColor: "#F5A623",
              fontWeight: "bold",
              height: 50,
            }}
          >
            Submit
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
