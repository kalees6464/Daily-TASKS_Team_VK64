import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
// import { Link } from "expo-router";
import { Iconify } from "react-native-iconify";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <LinearGradient
        colors={["#C4DFE6", "#66A5AD"]}
        style={styles.background}
      /> */}
      <View style={{ padding: 20, paddingTop: 60 }}>
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
          THANNI CAN
        </Text>
      </View>
      <View style={{ paddingLeft: 20 }}>
        <Text style={{ justifyContent: "flex-start" }}>
          {/* <Link href="/home"> */}
          <Iconify
            icon="solar:fluent-emoji-high-contrast:left-arrow"
            size={30}
            color="white"
          />
          {/* </Link> */}
        </Text>
      </View>
      <View style={{ padding: 20, width: "100%", gap: 30 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            paddingBottom: 30,
            color: "white",
          }}
        >
          Sign In
        </Text>

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
      </View>
      <View
        style={{ width: "100%", paddingHorizontal: 40, paddingBottom: 180 }}
      >
        {/* <Link
          href="forgetPass"
          
        > */}
        <Text
          style={{ textAlign: "right", fontWeight: "bold", color: "white" }}
        >
          Forget Password?
        </Text>
        {/* </Link> */}
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
          paddingTop: 50,
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
              padding: 10,
              paddingRight: 10,
              backgroundColor: "#F5A623",
              fontWeight: "bold",
            }}
          >
            Submit
          </Text>
        </View>
        <Text style={{ color: "white" }}>
          Don't have an account?{" "}
          <Text
            href="/createAcc1"
            style={{ fontWeight: "bold", color: "#F5A623" }}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#564478",
    width: "100%",
    height: "100%",
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
