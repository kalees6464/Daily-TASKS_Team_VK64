import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import { Iconify } from "react-native-iconify";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/Fontisto";
import Icon6 from "react-native-vector-icons/Octicons";
import Icon7 from "react-native-vector-icons/AntDesign";
import Icon9 from "react-native-vector-icons/FontAwesome6";
import Icon11 from "react-native-vector-icons/FontAwesome";
import Icon12 from "react-native-vector-icons/AntDesign";
import Icon14 from "react-native-vector-icons/AntDesign";
export default function Page59() {
  return (
    <SafeAreaView style={{ width: "100%", height: "100%", paddingBottom: 100 }}>
      <View
        style={{
          width: "100%",
          backgroundColor: "#564478",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
          THANNICAN
        </Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
          <Iconify icon="ei:search" size={30} color="white" />
          <Iconify icon="tabler:bell-ringing-filled" size={30} color="white" />
        </View>
      </View>
      <ScrollView>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              gap: 20,
            }}
          >
            <Iconify
              icon="solar:fluent-emoji-high-contrast:left-arrow"
              size={30}
              color="black"
            />
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Checkout</Text>
          </View>

          <View style={{ width: "100%" }}>
            <View
              style={{
                width: "100%",
                padding: 15,
                paddingTop: 10,
                paddingBottom: 0,
              }}
            >
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#feeac1",
                  borderWidth: 1,
                  borderColor: "#aeaeae",
                  borderRadius: 10,
                  shadowColor: "#aeaeae",
                  shadowOffset: { width: 2, height: 4 },
                  shadowOpacity: 0.8,
                }}
              >
                <Iconify icon="material-symbols:circle" size={11} color="red" />
                <View style={{ width: "25%", justifyContent: "center" }}>
                  <Image
                    source={require("../assets/images/10litre.png")}
                    style={{}}
                  />
                </View>
                <View
                  style={{
                    width: "73%",
                    // alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: 15,
                  }}
                >
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 10,
                      }}
                    >
                      <Text style={{ fontSize: 22, fontWeight: 500 }}>
                        Why haven't you
                      </Text>
                      <View>
                        <Text>1d ago</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{ fontSize: 21, fontWeight: 500 }}>
                        checked out yet?
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text>Hurry up! Complete your order</Text>
                    <Text>now. Limited stocks available - act</Text>
                    <Text>fast!</Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                padding: 15,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#feeac1",
                  borderWidth: 1,
                  borderColor: "#aeaeae",
                  borderRadius: 10,
                  shadowColor: "#aeaeae",
                  shadowOffset: { width: 2, height: 4 },
                  shadowOpacity: 0.8,
                }}
              >
                <Iconify icon="material-symbols:circle" size={11} color="red" />
                <View
                  style={{
                    width: "25%",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../assets/images/20litre.png")}
                    style={{ height: 90, width: 90 }}
                  />
                </View>
                <View
                  style={{
                    width: "73%",
                    // alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: 15,
                  }}
                >
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 10,
                      }}
                    >
                      <Text style={{ fontSize: 22, fontWeight: 500 }}>
                        Why haven't you
                      </Text>
                      <View>
                        <Text>1d ago</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{ fontSize: 21, fontWeight: 500 }}>
                        checked out yet?
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text>Hurry up! Complete your order</Text>
                    <Text>now. Limited stocks available - act</Text>
                    <Text>fast!</Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                padding: 15,
                paddingTop: 0,
              }}
            >
              <View
                style={{
                  padding: 9,
                  paddingRight: 0,
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#feeac1",
                  borderWidth: 1,
                  borderColor: "#aeaeae",
                  borderRadius: 10,
                  shadowColor: "#aeaeae",
                  shadowOffset: { width: 2, height: 4 },
                  shadowOpacity: 0.8,
                }}
              >
                <View
                  style={{
                    width: "27%",
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../assets/images/van.png")}
                    style={{}}
                  />
                </View>
                <View
                  style={{
                    width: "70%",
                    paddingBottom: 10,
                    // alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: 15,
                  }}
                >
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 10,
                      }}
                    >
                      <Text style={{ fontSize: 22, fontWeight: 500 }}>
                        Don't miss out,
                      </Text>
                      <View>
                        <Text>2d ago</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{ fontSize: 21, fontWeight: 500 }}>
                        Join us today
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text>Exciting News! Get your first order</Text>
                    <Text>delivered for free. Don't miss out.</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "33%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 35,
                  }}
                >
                  <Text style={{ fontSize: 22, fontWeight: "500" }}>
                    &#8377; 25
                  </Text>
                  <Icon2 name="delete" size={25} color="black"></Icon2>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          bottom: 0,
          backgroundColor: "#564478",
          padding: 5,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Iconify icon="fluent:home-12-filled" size={30} color="white" />
          <Text style={{ color: "white" }}>Home</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Iconify icon="entypo:shop" size={30} color="orange" />
          <Text style={{ color: "orange" }}>Shop</Text>
        </View>
        <View
          style={{ backgroundColor: "white", borderRadius: 50, padding: 15 }}
        >
          <Iconify icon="fontisto:nav-icon-grid-a" size={20} color="purple" />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Iconify icon="fa6-solid:user" size={30} color="white" />
          <Text style={{ color: "white" }}>Account</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Iconify icon="ph:shopping-cart" size={30} color="white" />
          <Text style={{ color: "white" }}>Cart</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
