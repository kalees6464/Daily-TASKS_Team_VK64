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
// import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/EvilIcons";
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
            <Link href="/home">
              <Icon1 name="arrow-left" size={45} color="black" />
            </Link>
          </Text>
        </View>
        <View style={{ padding: 20, width: "100%", paddingBottom: 30 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              paddingBottom: 30,
            }}
          >
            Change Password
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
            <Icon2
              name="lock"
              size={40}
              color="black"
              style={{ width: "20%" }}
            ></Icon2>
            <TextInput
              placeholder="Create New Password"
              style={{ width: "80%", padding: 10, fontSize: 19 }}
            />
            <Icon2
              name="remove-red-eye"
              size={40}
              color="black"
              style={{ width: "20%" }}
            ></Icon2>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 4 },
              marginTop: 30,
            }}
          >
            <Icon2
              name="remove-red-eye"
              size={40}
              color="black"
              style={{ width: "20%" }}
            ></Icon2>
            <TextInput
              placeholder="Confirm Password"
              style={{ width: "80%", padding: 10, fontSize: 20 }}
            />
            <Icon2
              name="lock"
              size={40}
              color="black"
              style={{ width: "20%" }}
            ></Icon2>
          </View>
        </View>
        <View
          style={{ width: "100%", paddingHorizontal: 40, paddingBottom: 180 }}
        ></View>
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
            <Text>Sign in</Text>
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
