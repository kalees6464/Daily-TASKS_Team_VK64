import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { Iconify } from "react-native-iconify";

export default function shops() {
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        paddingBottom: 80,
      }}
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
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
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
            <Text style={{ fontSize: 25, fontWeight: "bold", paddingTop: 8 }}>
              Checkout
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              borderBottomColor: "black",
              borderBottomWidth: 1,
              padding: 10,
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/images/one.png")} />
              <Text>Address</Text>
            </View>
            <Image
              style={{ backgroundColor: "#555" }}
              source={require("../assets/images/Line 2.png")}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bottom: 10,
              }}
            >
              <Image source={require("../assets/images/Group 46.png")} />
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text style={{ top: 5 }}>Order</Text>
                <Text style={{ top: 5 }}>Summary</Text>
              </View>
            </View>
            <Image
              style={{ backgroundColor: "#555" }}
              source={require("../assets/images/Line 2.png")}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/images/Group 47.png")} />
              <Text>Payment</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            <View style={{ marginTop: 15 }}>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>Dwater</Text>
              <Text style={{ fontSize: 13 }}>Perumal puram,Tirunelveli</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginTop: 15, paddingBottom: 15 }}>
                <Text style={{ fontSize: 20 }}>Delivery Location</Text>
                <Text>Robert - Samathanapuram,Tirunelveli</Text>
                <Text>Tamilnadu - 600 005</Text>
              </View>
              <View>
                <Text
                  style={{
                    backgroundColor: "#ffb504",
                    width: 80,
                    height: 30,
                    borderRadius: 6,
                    textAlign: "center",
                    paddingVertical: 7,
                    shadowColor: "gray",
                    shadowOpacity: 0.7,
                    shadowOffset: { width: 2, height: 4 },
                  }}
                >
                  Change
                </Text>
              </View>
            </View>
          </View>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "black",
              paddingTop: 20,
              paddingLeft: 20,
            }}
          >
            Delivery Schedule
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 20,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "45%",
                borderColor: "black",
                borderWidth: 1,
                borderColor: "grey",
                height: 50,
                backgroundColor: "#FEEAC1",
                borderRadius: 10,
                padding: 10,
                gap: 10,
              }}
            >
              <View>
                {/* <Icon15
                  name="check-circle"
                  size={25}
                  style={{ color: "#3fbdf1", paddingLeft: 20, paddingTop: 7 }}
                ></Icon15> */}
                <Iconify
                  icon="humbleicons:circle"
                  size={25}
                  color="#3fbdf1"
                  style={{ paddingLeft: 20, paddingTop: 20 }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 15, fontWeight: "black" }}>
                  {" "}
                  Standard
                </Text>

                <Text style={{ fontSize: 11 }}> 20 - 30mins</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "45%",
                borderColor: "grey",
                borderWidth: 1,
                backgroundColor: "#FEEAC1",
                height: 50,
                borderRadius: 10,
                padding: 10,
                gap: 5,
              }}
            >
              <View>
                {/* <Icon15
                  name="check-circle"
                  size={25}
                  style={{ color: "#3fbdf1", paddingLeft: 20, paddingTop: 7 }}
                ></Icon15> */}
                <Iconify
                  icon="clarity:success-standard-solid"
                  size={25}
                  color="#3fbdf1"
                  style={{ paddingLeft: 20, paddingTop: 7 }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 15, fontWeight: "black" }}>
                  {" "}
                  scheduled Time
                </Text>

                <Text style={{ fontSize: 11, paddingLeft: 4 }}>
                  Choose Time
                </Text>
              </View>
            </View>
          </View>

          <View>
            <TextInput
              placeholder="Set Date"
              style={{
                display: "flex",
                flexDirection: "row",
                borderColor: "#aeaeae",
                borderWidth: 1,
                marginTop: 10,
                marginLeft: 17,
                marginRight: 17,
                height: 80,
                shadowColor: "#aeaeae",
                shadowOffset: { width: 2, height: 2 },
                borderRadius: 10,
                height: 45,
                fontWeight: "black",
                paddingLeft: 20,
                backgroundColor: "#FEEAC1",
              }}
            ></TextInput>
          </View>

          <View>
            <TextInput
              placeholder="Set Time"
              style={{
                display: "flex",
                flexDirection: "row",
                borderColor: "#aeaeae",
                borderWidth: 1,
                marginTop: 10,
                marginLeft: 17,
                marginRight: 17,
                height: 80,
                shadowColor: "#aeaeae",
                shadowOffset: { width: 2, height: 2 },
                borderRadius: 10,
                height: 45,
                fontWeight: "black",
                paddingLeft: 20,
                backgroundColor: "#FEEAC1",
              }}
            ></TextInput>
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
              //   paddingBottom: 70,
            }}
          >
            Total Amount
          </Text>
          <Text style={{ fontWeight: "bold" }}>₹ 95</Text>
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
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={{}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              paddingTop: 10,
            }}
          >
            Total Bill &#8377;95
          </Text>
        </View>
        <View
          style={{
            display: "flex",
          }}
        >
          <Text
            style={{
              backgroundColor: "#F5A623",
              width: 100,
              height: 40,
              borderRadius: 10,
              textAlign: "center",
              paddingVertical: 11,
              shadowColor: "gray",
              shadowOpacity: 0.7,
              shadowOffset: { width: 2, height: 4 },
            }}
          >
            Continue
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
