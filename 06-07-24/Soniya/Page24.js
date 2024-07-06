import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import { Iconify } from "react-native-iconify";

export default function shops() {
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
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
        <View style={{ display: "flex", flexDirection: "row", gap: 15 }}></View>
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
            <Text style={{ fontSize: 25, fontWeight: "bold", paddingTop: 9 }}>
              Change Address
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
          <View style={{ padding: 20, gap: 10 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Iconify
                  icon="clarity:success-standard-solid"
                  size={20}
                  color="#3fbdf1"
                  style={{ paddingBottom: 55 }}
                />
              </View>
              <View style={{ paddingBottom: 20, gap: 5 }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    paddingBottom: 10,
                  }}
                >
                  Roboert
                </Text>
                <Text>Robert - Samathanapuram,</Text>
                <Text>Tirunelveli, Tamilnadu - 600 005</Text>
                <Text style={{ paddingTop: 10 }}>9858462486</Text>
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
                  Edit
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Iconify
                  icon="humbleicons:circle"
                  size={20}
                  color="#3fbdf1"
                  style={{ paddingBottom: 55 }}
                />
              </View>
              <View style={{ paddingBottom: 20, gap: 5 }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    paddingBottom: 10,
                  }}
                >
                  Roboert
                </Text>
                <Text>Robert - Samathanapuram,</Text>
                <Text>Tirunelveli, Tamilnadu - 600 005</Text>
                <Text style={{ paddingTop: 10 }}>9858462486</Text>
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
                  Edit
                </Text>
              </View>
            </View>
          </View>
          {/* <View
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "#FEEAC1",
              borderRadius: 5,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 2 },
              borderColor: "#aeaeae",
              borderWidth: 1,
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Iconify icon="typcn:plus" size={30} color="black" />

              <Text style={{ fontWeight: "bold", paddingTop: 9 }}>
                Add a new address
              </Text>
            </View>
          </View> */}
          <View
            style={{
              width: "100%",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                height: 50,
                borderWidth: 1,
                borderRadius: 8,
                backgroundColor: "#FEEAC1",
                borderColor: "grey",
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                display: "flex",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <Iconify icon="typcn:plus" size={27} color="black" />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                Add a new address
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ margin: 10, padding: 5 }}>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#F5A623",
            borderRadius: 5,
            shadowColor: "gray",
            shadowOffset: { width: 2, height: 2 },
            paddingVertical: 17,
            borderColor: "#aeaeae",
            borderWidth: 1,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "black", fontSize: 18 }}>
            Deliver This Address
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
