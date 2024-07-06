import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import { Iconify } from "react-native-iconify";
export default function Page62() {
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
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Edit Address
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              padding: 15,
              paddingTop: 10,
              paddingBottom: 0,
            }}
          >
            <View style={{ width: "100%", paddingBottom: 50, gap: 20 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    width: "30%",
                    padding: 20,
                    backgroundColor: "#feeac1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 1,
                    borderColor: "#aeaeae",
                    borderRadius: 10,
                    shadowColor: "#aeaeae",
                    shadowOffset: { width: 2, height: 4 },
                    shadowOpacity: 0.5,
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 500 }}>4a/60</Text>
                </View>
                <View
                  style={{
                    width: "65%",
                    backgroundColor: "#feeac1",
                    padding: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 1,
                    borderColor: "#aeaeae",
                    borderRadius: 10,
                    shadowColor: "#aeaeae",
                    shadowOffset: { width: 2, height: 4 },
                    shadowOpacity: 0.8,
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 500 }}>
                    Samathanapuram
                  </Text>
                </View>
              </View>

              <View
                style={{
                  padding: 20,
                  backgroundColor: "#feeac1",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderWidth: 1,
                  borderColor: "#aeaeae",
                  borderRadius: 10,
                  shadowColor: "#aeaeae",
                  shadowOffset: { width: 2, height: 4 },
                  shadowOpacity: 0.8,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 500 }}>City Name</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    width: "45%",
                    padding: 20,
                    backgroundColor: "#feeac1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 1,
                    borderColor: "#aeaeae",
                    borderRadius: 10,
                    shadowColor: "#aeaeae",
                    shadowOffset: { width: 2, height: 4 },
                    shadowOpacity: 0.8,
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 500 }}>
                    Tamilnadu
                  </Text>
                </View>
                <View
                  style={{
                    width: "45%",
                    padding: 20,
                    backgroundColor: "#feeac1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 1,
                    borderColor: "#aeaeae",
                    borderRadius: 10,
                    shadowColor: "#aeaeae",
                    shadowOffset: { width: 2, height: 4 },
                    shadowOpacity: 0.8,
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 500 }}>600 005</Text>
                </View>
              </View>

              <View
                style={{
                  padding: 20,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "#aeaeae",
                  borderRadius: 10,
                  shadowColor: "#aeaeae",
                  shadowOffset: { width: 2, height: 4 },
                  shadowOpacity: 0.8,
                  backgroundColor: "#ffb504",
                  gap: 10,
                }}
              >
                <Iconify
                  icon="ic:twotone-my-location"
                  size={30}
                  color="black"
                />
                <Text style={{ fontSize: 20, fontWeight: 500 }}>
                  Use My Location
                </Text>
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
          bottom: 5,
          padding: 15,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            padding: 20,
            display: "flex",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#aeaeae",
            borderRadius: 10,
            shadowColor: "#aeaeae",
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.8,
            backgroundColor: "#564478",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "white",
              textAlign: "center",
            }}
          >
            Save Address
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
