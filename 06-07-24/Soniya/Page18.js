import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import { Iconify } from "react-native-iconify";

export default function Shops() {
  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: "white" }}
    >
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
      <ScrollView>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              // padding: 20,
              paddingTop: 20,
              paddingLeft: 20,
              gap: 10,
            }}
          >
            <Iconify
              icon="solar:fluent-emoji-high-contrast:left-arrow"
              size={30}
              color="black"
            />
            <Text style={{ fontSize: 22, fontWeight: "bold", paddingTop: 8 }}>
              Cart
            </Text>
          </View>
          <View style={{ gap: 25, padding: 20 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderColor: "#aeaeae",
                borderWidth: 1,
                height: 160,
                shadowColor: "#aeaeae",
                shadowOffset: { width: 2, height: 2 },
                borderRadius: 10,
                padding: 20,
                backgroundColor: "#FEEAC1",
              }}
            >
              <View style={{}}>
                <Image
                  source={require("../assets/images/10 litre.png")}
                  style={{}}
                ></Image>
              </View>
              <View style={{ gap: 27, display: "flex" }}>
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    Water Can
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View>
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={20}
                      color="black"
                    />
                  </View>
                  <View>
                    <Text style={{ paddingTop: 5 }}>10 Litres</Text>
                  </View>
                </View>

                <View
                  style={{ display: "flex", flexDirection: "row", gap: 10 }}
                >
                  <View>
                    <Iconify icon="mdi:minus-circle" size={20} color="black" />
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold", paddingTop: 3 }}>1</Text>
                  </View>
                  <View>
                    <Iconify
                      icon="gravity-ui:circle-plus-fill"
                      size={20}
                      color="black"
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  gap: 70,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>₹25</Text>
                </View>
                <View>
                  <Iconify
                    icon="mingcute:delete-fill"
                    size={25}
                    color="black"
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderColor: "#aeaeae",
                borderWidth: 1,
                height: 160,
                shadowColor: "#aeaeae",
                shadowOffset: { width: 2, height: 2 },
                borderRadius: 10,
                padding: 20,
                backgroundColor: "#FEEAC1",
              }}
            >
              <View style={{ paddingTop: 10 }}>
                <Image
                  source={require("../assets/images/20litre.png")}
                  style={{ width: 100, height: 100, paddingTop: 10 }}
                ></Image>
              </View>
              <View style={{ gap: 27, display: "flex" }}>
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    Water Can
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View>
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={20}
                      color="black"
                    />
                  </View>
                  <View>
                    <Text style={{ paddingTop: 5 }}>10 Litres</Text>
                  </View>
                </View>

                <View
                  style={{ display: "flex", flexDirection: "row", gap: 10 }}
                >
                  <View>
                    <Iconify icon="mdi:minus-circle" size={20} color="black" />
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold", paddingTop: 3 }}>1</Text>
                  </View>
                  <View>
                    <Iconify
                      icon="gravity-ui:circle-plus-fill"
                      size={20}
                      color="black"
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  gap: 70,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>₹25</Text>
                </View>
                <View>
                  <Iconify
                    icon="mingcute:delete-fill"
                    size={25}
                    color="black"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <View style={{ gap: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              Total Bill
            </Text>
            <Text style={{ fontSize: 14 }}>Sub Total</Text>
            <Text style={{ fontSize: 14 }}>GST</Text>
            <Text style={{ fontSize: 14 }}>Delivery Charges</Text>
          </View>
          <View style={{ paddingTop: 30, gap: 10 }}>
            <Text style={{ fontSize: 14 }}>₹ 85</Text>
            <Text style={{ fontSize: 14 }}>₹ 10</Text>
            <Text style={{ fontSize: 14 }}>₹ 0</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",

            flexDirection: "row",
            borderBottomColor: "black",
            borderWidth: 1,
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
          }}
        ></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 19,
            }}
          >
            Total Amount
          </Text>
          <Text style={{ fontWeight: "bold" }}>₹ 95</Text>
        </View>

        <View style={{ paddingHorizontal: 20, paddingBottom: 60 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 15,
              shadowColor: "#b3b3b3",
              shadowOffset: { width: 2, height: 4 },
              borderRadius: 8,
              paddingVertical: 17,
              backgroundColor: "#F5A623",
              textAlign: "center",
              height: 50,
            }}
          >
            Checkout
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
          <Iconify icon="fluent:home-12-filled" size={30} color="#F5A623" />
          <Text style={{ color: "#F5A623" }}>Home</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Iconify icon="entypo:shop" size={30} color="white" />
          <Text style={{ color: "white" }}>Shop</Text>
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
