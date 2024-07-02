import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Entypo";
import Icon1 from "react-native-vector-icons/EvilIcons";
// import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";

export default function Home() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>THANNICAN</Text>
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ justifyContent: "flex-start" }}>
            <Link href="/signin">
              <Icon1 name="arrow-left" size={45} color="black" />
            </Link>
          </Text>
        </View>
        <View style={{ padding: 20, width: "100%", paddingBottom: 300 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              paddingBottom: 30,
            }}
          >
            Forgot Password
          </Text>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
            }}
          >
            <Icon
              name="mail"
              size={40}
              color="black"
              style={{ width: "20%" }}
            ></Icon>
            <TextInput
              placeholder="Enter Email"
              style={{ width: "80%", padding: 10, fontSize: 20 }}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Link
            href="/"
            style={{
              backgroundColor: "rgba(34, 87, 122, 1)",
              paddingVertical: 15,
              paddingHorizontal: 100,
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              borderRadius: 10,
            }}
          >
            <Text>Submit</Text>
          </Link>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    width: "100%",
    height: "100%",
  },
});
