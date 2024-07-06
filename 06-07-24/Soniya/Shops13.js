import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
// import { } from "react-native-gesture-handler";
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
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "#171717",
          shadowOpacity: 0.2,
          shadowRadius: 3,
          paddingTop: 30,
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

      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          flex: 1,
          marginBottom: 50,
        }}
      >
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <Image
            source={require("../assets/images/water.jpeg")}
            style={{ borderRadius: 15, width: "95%" }}
          />
          <Text
            style={{
              position: "absolute",
              left: "10%",
              top: "80%",
              width: "40%",
            }}
          >
            One small step is all that it takes. Save water. Save our planet.
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 0,
          }}
        >
          <Iconify icon="octicon:dot-fill-24" size={30} color="black" />
          <Iconify icon="octicon:dot-24" size={30} color="black" />
        </View>

        <View
          style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 5 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>Top Vendors</Text>
        </View>

        <View
          style={{
            width: "100%",
            padding: 20,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 20,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "40%",
              padding: 7,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
              backgroundColor: "#FEEAC1",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,</Text>
            <Text style={{ fontSize: 13 }}>Tirunelveli</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "center",
              }}
            >
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
                style={{ paddingTop: 0 }}
              />
              <Iconify icon="ri:star-half-fill" size={20} color="#ffb504" />
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ffb504",
                  padding: 10,
                  borderRadius: 10,
                  shadowColor: "gray",
                  shadowOffset: { width: 2, height: 2 },
                }}
              >
                Shop Now
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "40%",
              padding: 7,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
              backgroundColor: "#FEEAC1",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,</Text>
            <Text style={{ fontSize: 13 }}>Tirunelveli</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "center",
              }}
            >
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify icon="ri:star-half-fill" size={20} color="#ffb504" />
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ffb504",
                  padding: 10,
                  borderRadius: 10,
                  shadowColor: "gray",
                  shadowOffset: { width: 2, height: 2 },
                }}
              >
                Shop Now
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "40%",
              padding: 7,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
              backgroundColor: "#FEEAC1",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,</Text>
            <Text style={{ fontSize: 13 }}>Tirunelveli</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "center",
              }}
            >
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify icon="ri:star-half-fill" size={20} color="#ffb504" />
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ffb504",
                  padding: 10,
                  borderRadius: 10,
                  shadowColor: "gray",
                  shadowOffset: { width: 2, height: 2 },
                  paddingBottom: 10,
                }}
              >
                Shop Now
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "40%",
              padding: 7,
              shadowColor: "gray",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.5,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
              backgroundColor: "#FEEAC1",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Dwater</Text>
            <Text style={{ fontSize: 13 }}>Perumal Puram,</Text>
            <Text style={{ fontSize: 13 }}>Tirunelveli</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "center",
              }}
            >
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify
                icon="ant-design:star-filled"
                size={20}
                color="#ffb504"
              />
              <Iconify icon="ri:star-half-fill" size={20} color="#ffb504" />
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Text
                style={{
                  backgroundColor: "#ffb504",
                  padding: 10,
                  borderRadius: 10,
                  shadowColor: "gray",
                  shadowOffset: { width: 2, height: 2 },
                }}
              >
                Shop Now
              </Text>
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
          <Iconify icon="fluent:home-12-filled" size={30} color="#ffb504" />
          <Text style={{ color: "#ffb504" }}>Home</Text>
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
