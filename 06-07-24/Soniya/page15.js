import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { Iconify } from "react-native-iconify";

export default function Shops() {
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      {/* <StatusBar style="dark" /> */}
      <View
        style={{
          width: "100%",
          backgroundColor: "#564478",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "#171717",
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
          THANNI CAN
        </Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Iconify icon="tabler:search" size={30} color="white" />
          <Iconify
            icon="ic:baseline-notifications-active"
            size={30}
            color="white"
          />
        </View>
      </View>
      <View style={{ position: "relative" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // marginTop: 20,
            // marginLeft: 17,
            gap: 20,
            padding: 20,
          }}
        >
          <Iconify
            icon="solar:fluent-emoji-high-contrast:left-arrow"
            size={30}
            color="black"
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 9,
              color: "black",
            }}
          >
            Order Items
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            paddingHorizontal: 20,
            flexDirection: "row",
            borderBottomColor: "black",
            borderWidth: 1,
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            justifyContent: "space-between",
          }}
        >
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,Tirunelveli</Text>
          </View>
          <View>
            <Iconify
              icon="mdi:heart"
              size={30}
              color="red"
              style={{ padding: 5 }}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // marginLeft: 20,
            // marginRight: 20,
            // marginTop: 15,
            padding: 20,
          }}
        >
          <View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Iconify
                icon="ant-design:star-filled"
                size={25}
                color="#ffb504"
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>4.5</Text>
            </View>
            <Text>1K Reviews</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, color: "#00b300" }}>Timings</Text>
            <Text>7am-7pm</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, color: "#00b300" }}>Open</Text>
            <Text>For Delivery</Text>
          </View>
        </View>
      </View>

      <ScrollView style={{}}>
        <View style={{ gap: 20, padding: 20 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "#aeaeae",
              borderWidth: 1,
              height: 160,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 2 },
              borderRadius: 10,
              padding: 20,
              justifyContent: "space-between",
              backgroundColor: "#FEEAC1",
            }}
          >
            <View>
              <Image
                source={require("../assets/images/5litre.png")}
                style={{}}
              ></Image>
            </View>
            <View style={{ gap: 30 }}>
              <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Water Can
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                  <Iconify
                    icon="fa6-solid:bottle-water"
                    size={20}
                    color="black"
                  />

                  <Text style={{ textAlign: "center", paddingTop: 6 }}>
                    05 Liters
                  </Text>
                </View>
              </View>
              <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {/* <Iconify icon="lucide:indian-rupee" size={20} color="black" /> */}

                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", paddingTop: 7 }}
                  >
                    ₹60
                  </Text>
                </View>
                <Text
                  style={{
                    shadowColor: "#b3b3b3",
                    shadowOffset: { width: 2, height: 2 },
                    color: "black",
                    borderRadius: 8,
                    fontSize: 17,
                    backgroundColor: "#FFA500",
                    width: 80,
                    height: 30,
                    paddingTop: 6,
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  Add
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "#aeaeae",
              borderWidth: 1,
              height: 160,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 2 },
              borderRadius: 10,
              padding: 20,
              justifyContent: "space-between",
              backgroundColor: "#FEEAC1",
            }}
          >
            <View>
              <Image
                source={require("../assets/images/10 litre.png")}
                style={{}}
              ></Image>
            </View>
            <View style={{ gap: 30 }}>
              <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Water Can
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                  <Iconify
                    icon="fa6-solid:bottle-water"
                    size={20}
                    color="black"
                  />

                  <Text style={{ textAlign: "center", paddingTop: 6 }}>
                    10 Liters
                  </Text>
                </View>
              </View>
              <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {/* <Iconify icon="lucide:indian-rupee" size={20} color="black" /> */}

                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", paddingTop: 7 }}
                  >
                    ₹25
                  </Text>
                </View>
                <Text
                  style={{
                    shadowColor: "#b3b3b3",
                    shadowOffset: { width: 2, height: 2 },
                    color: "black",
                    borderRadius: 8,
                    fontSize: 17,
                    backgroundColor: "#FFA500",
                    width: 80,
                    height: 30,
                    paddingLeft: 20,
                    paddingTop: 6,
                    alignItems: "center",
                  }}
                >
                  Added
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "#aeaeae",
              borderWidth: 1,
              height: 160,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 2 },
              borderRadius: 10,
              padding: 20,
              justifyContent: "space-between",
              backgroundColor: "#FEEAC1",
            }}
          >
            <View>
              <Image
                source={require("../assets/images/20litre.png")}
                style={{}}
              ></Image>
            </View>
            <View style={{ gap: 30 }}>
              <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Water Can
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                  <Iconify
                    icon="fa6-solid:bottle-water"
                    size={20}
                    color="black"
                  />

                  <Text style={{ textAlign: "center", paddingTop: 6 }}>
                    20 Liters
                  </Text>
                </View>
              </View>
              <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {/* <Iconify icon="lucide:indian-rupee" size={20} color="black" /> */}

                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", paddingTop: 7 }}
                  >
                    ₹30
                  </Text>
                </View>
                <Text
                  style={{
                    shadowColor: "#b3b3b3",
                    shadowOffset: { width: 2, height: 2 },
                    color: "black",
                    borderRadius: 8,
                    fontSize: 17,
                    backgroundColor: "#FFA500",
                    width: 80,
                    height: 30,
                    paddingLeft: 20,
                    paddingTop: 6,
                    alignItems: "center",
                  }}
                >
                  Added
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "#aeaeae",
              borderWidth: 1,
              height: 160,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 2 },
              borderRadius: 10,
              padding: 20,
              justifyContent: "space-between",
              backgroundColor: "#FEEAC1",
            }}
          >
            <View>
              <Image
                source={require("../assets/images/dispenser can.png")}
                style={{}}
              ></Image>
            </View>
            <View style={{ gap: 30 }}>
              <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Dispenser Can
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                  <Iconify
                    icon="fa6-solid:bottle-water"
                    size={20}
                    color="black"
                  />

                  <Text style={{ textAlign: "center", paddingTop: 6 }}>
                    10 Liters
                  </Text>
                </View>
              </View>
              <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {/* <Iconify icon="lucide:indian-rupee" size={20} color="black" /> */}

                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", paddingTop: 7 }}
                  >
                    ₹90
                  </Text>
                </View>
                <Text
                  style={{
                    shadowColor: "#b3b3b3",
                    shadowOffset: { width: 2, height: 2 },
                    color: "black",
                    borderRadius: 8,
                    fontSize: 17,
                    backgroundColor: "#FFA500",
                    width: 80,
                    height: 30,
                    paddingLeft: 20,
                    paddingTop: 6,
                    alignItems: "center",
                  }}
                >
                  Added
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "#aeaeae",
              borderWidth: 1,
              height: 160,
              shadowColor: "#aeaeae",
              shadowOffset: { width: 2, height: 2 },
              borderRadius: 10,
              padding: 20,
              justifyContent: "space-between",
              backgroundColor: "#FEEAC1",
            }}
          >
            <View>
              <Image
                source={require("../assets/images/dispenser pump.png")}
                style={{}}
              ></Image>
            </View>
            <View style={{ gap: 30 }}>
              <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Dispenser Pump
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                  <Iconify
                    icon="fa6-solid:bottle-water"
                    size={20}
                    color="black"
                  />

                  <Text style={{ textAlign: "center", paddingTop: 6 }}>
                    20 Liters
                  </Text>
                </View>
              </View>
              <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {/* <Iconify icon="lucide:indian-rupee" size={20} color="black" /> */}

                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", paddingTop: 7 }}
                  >
                    ₹90
                  </Text>
                </View>
                <Text
                  style={{
                    shadowColor: "#b3b3b3",
                    shadowOffset: { width: 2, height: 2 },
                    color: "black",
                    borderRadius: 8,
                    fontSize: 17,
                    backgroundColor: "#FFA500",
                    width: 80,
                    height: 30,
                    paddingLeft: 20,
                    paddingTop: 6,
                    alignItems: "center",
                  }}
                >
                  Added
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingBottom: 70 }}>
          <Text
            style={{
              shadowColor: "#b3b3b3",
              shadowOffset: { width: 2, height: 2 },
              // color: "Black",
              borderRadius: 8,
              fontSize: 18,
              backgroundColor: "#F5A623",
              textAlign: "center",
              paddingVertical: 17,
              height: 50,
              fontWeight: "bold",
            }}
          >
            Go To Cart
          </Text>
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
          <Iconify icon="entypo:shop" size={30} color="#F5A623" />
          <Text style={{ color: "#F5A623" }}>Shop</Text>
        </View>
        <View
          style={{ backgroundColor: "white", padding: 10, borderRadius: 50 }}
        >
          <Iconify icon="fontisto:nav-icon-grid-a" size={27} color="#564478" />
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
          <Iconify icon="ph:shopping-cart-bold" size={30} color="white" />
          <Text style={{ color: "white" }}>Cart</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
