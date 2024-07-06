import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
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
        <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
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
            <Text style={{ fontSize: 25, fontWeight: "bold", paddingTop: 9 }}>
              Add Address
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
              height: 70,
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
              <Image source={require("../assets/images/Group 46.png")} />
              <Text>Payment</Text>
            </View>
          </View>
        </View>
        <View style={{ paddingVertical: 20, gap: 20 }}>
          <View
            style={{
              width: "100%",
              height: 40,
              paddingHorizontal: 20,
            }}
          >
            <TextInput
              placeholder="Full Name"
              style={{
                width: "100%",
                height: 50,
                fontSize: 15,
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                borderRadius: 10,
                borderColor: "#aeaeae",
                borderWidth: 1,
                paddingLeft: 13,
                backgroundColor: "#FEEAC1",
              }}
            ></TextInput>
          </View>
          <View
            style={{
              width: "100%",
              height: 40,
              paddingHorizontal: 20,
            }}
          >
            <TextInput
              placeholder="Mobile Number*"
              style={{
                width: "100%",
                height: 50,
                fontSize: 15,
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                borderRadius: 10,
                borderColor: "#aeaeae",
                borderWidth: 1,
                paddingLeft: 13,
                backgroundColor: "#FEEAC1",
              }}
            ></TextInput>
          </View>

          <View
            style={{
              width: "100%",
              height: 40,
              paddingHorizontal: 20,
            }}
          >
            <TextInput
              placeholder="Door No*"
              style={{
                width: "45%",
                height: 50,
                fontSize: 15,
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                borderRadius: 10,
                borderColor: "#aeaeae",
                borderWidth: 1,
                paddingLeft: 13,
                backgroundColor: "#FEEAC1",
              }}
            ></TextInput>
          </View>

          <View
            style={{
              width: "100%",
              height: 40,
              paddingHorizontal: 20,
            }}
          >
            <TextInput
              placeholder="Street Name*"
              style={{
                width: "100%",
                height: 50,
                fontSize: 15,
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                borderRadius: 10,
                borderColor: "#aeaeae",
                borderWidth: 1,
                paddingLeft: 13,
                backgroundColor: "#FEEAC1",
              }}
            ></TextInput>
          </View>

          <View
            style={{
              width: "100%",
              height: 40,
              paddingHorizontal: 20,
            }}
          >
            <TextInput
              placeholder="City Name*"
              style={{
                width: "100%",
                height: 50,
                fontSize: 15,
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                borderRadius: 10,
                borderColor: "#aeaeae",
                borderWidth: 1,
                paddingLeft: 13,
                backgroundColor: "#FEEAC1",
              }}
            ></TextInput>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              paddingHorizontal: 20,
              justifyContent: "space-between",
              // gap: 30,
            }}
          >
            <View style={{ width: "45%" }}>
              <TextInput
                placeholder="State*"
                style={{
                  height: 40,
                  fontSize: 15,
                  shadowColor: "#b3b3b3",
                  shadowOffset: { width: 2, height: 4 },
                  borderRadius: 10,
                  borderColor: "#aeaeae",
                  borderWidth: 1,
                  paddingLeft: 13,
                  backgroundColor: "#FEEAC1",
                }}
              ></TextInput>
            </View>
            <View style={{ width: "45%" }}>
              <TextInput
                placeholder="Pin Code*"
                style={{
                  height: 40,
                  fontSize: 15,
                  shadowColor: "#b3b3b3",
                  shadowOffset: { width: 2, height: 4 },
                  borderRadius: 10,
                  borderColor: "#aeaeae",
                  borderWidth: 1,
                  paddingLeft: 13,
                  backgroundColor: "#FEEAC1",
                }}
              ></TextInput>
            </View>
          </View>
        </View>
        <View style={{ gap: 20 }}>
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
                backgroundColor: "#FFB504",
                borderColor: "transparent",
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
              <Iconify
                icon="fluent:my-location-12-filled"
                size={27}
                color="black"
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                Use My Location
              </Text>
            </View>
          </View>
          <View style={{ width: "100%", paddingHorizontal: 20 }}>
            <Text
              style={{
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 2, height: 4 },
                color: "white",
                borderRadius: 8,
                fontSize: 18,
                backgroundColor: "#564478",
                height: 50,
                fontWeight: "bold",
                textAlign: "center",
                paddingVertical: 17,
              }}
            >
              Add Address
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
