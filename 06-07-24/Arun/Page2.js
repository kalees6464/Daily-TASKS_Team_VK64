import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Iconify } from "react-native-iconify";

export default function Page2() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
            THANNI CAN
          </Text>
        </View>
        <View style={{ paddingLeft: 20 }}>
          <View style={{ justifyContent: "flex-start" }}>
            <Iconify
              icon="fluent-emoji-high-contrast:left-arrow"
              size={25}
              color="white"
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/images/page_2.png")} />
        </View>
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              textAlign: "center",
              color: "white",
            }}
          >
            Set your preferred time for water delivery
          </Text>
          <Text
            style={{
              paddingHorizontal: 45,
              fontSize: 14,
              paddingTop: 5,
              textAlign: "center",
              color: "white",
            }}
          >
            The bad news is time flies. The good news is you're the pilot
          </Text>
        </View>
        <View style={{ width: "100%", paddingVertical: 20 }}>
          <View
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Iconify icon="ic:baseline-circle" size={25} color="white" />
            <Iconify icon="ic:baseline-circle" size={25} color="black" />
            <Iconify icon="ic:baseline-circle" size={25} color="white" />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 30,
          }}
        >
          <Text
            style={{
              backgroundColor: "#f5a623",
              paddingVertical: 15,
              paddingHorizontal: 100,
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              borderRadius: 10,
            }}
          >
            Next
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#564478",
  },
});
