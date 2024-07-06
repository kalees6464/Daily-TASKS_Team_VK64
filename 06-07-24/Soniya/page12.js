import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { Iconify } from "react-native-iconify";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <LinearGradient
        colors={["#C4DFE6", "#66A5AD"]}
        style={styles.background}
      /> */}
      <View style={{ padding: 20, paddingTop: 45 }}>
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
          THANNICAN
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
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 70,
          paddingBottom: 150,
        }}
      >
        <Iconify
          icon="clarity:success-standard-solid"
          size={70}
          color="#F5A623"
        />
        <Text
          style={{
            paddingTop: 30,
            fontSize: 23,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Mobile Number
        </Text>
        <Text style={{ fontSize: 23, fontWeight: "bold", color: "white" }}>
          Verified
        </Text>
        <Text style={{ fontSize: 23, fontWeight: "bold", color: "white" }}>
          Successfully
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 100,
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
              backgroundColor: "#F5A623",
              // padding: 10,
              // paddingRight: 10,
              paddingVertical: 17,
              fontWeight: "bold",
              height: 50,
            }}
          >
            Next
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
