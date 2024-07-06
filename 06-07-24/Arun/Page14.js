import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import { Iconify } from "react-native-iconify";

export default function Page14() {
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
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "#171717",
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
          THANNICAN
        </Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Iconify icon="ei:search" size={30} color="white" />
          <Iconify icon="tabler:bell-ringing-filled" size={30} color="white" />
        </View>
      </View>

      <ScrollView>
        <View>
          <View
            style={{
              display: "flex",
              padding: 10,
              paddingTop: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Iconify
              icon="solar:fluent-emoji-high-contrast:left-arrow"
              size={30}
              color="black"
            />
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Nearest Shops
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Recommended</Text>
        </View>

        <View
          style={{
            width: "100%",
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              padding: 10,
              borderColor: "gray",
              borderRadius: 5,
              backgroundColor: "#feeac1",
            }}
          >
            <View style={{ width: "100%", flexDirection: "row" }}>
              <View style={{ width: "50%", gap: 5 }}>
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      gap: 5,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      Dwater
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <Iconify
                        icon="material-symbols:circle"
                        size={11}
                        color="green"
                      />
                      <Text style={{ color: "green" }}>Open</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%" }}>
                  <Text style={{}}>Perumal puram,Tirunelveli</Text>
                </View>
                <View
                  style={{
                    width: "25%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 5,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={15}
                      color="black"
                    />
                    <Text>5L</Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={17}
                      color="black"
                    />
                    <Text>10L</Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={19}
                      color="black"
                    />
                    <Text>20L</Text>
                  </View>
                </View>
              </View>

              <View style={{ width: "50%" }}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    gap: 10,
                    // paddingVertical: 5,
                    paddingHorizontal: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <Iconify icon="ic:round-star" size={24} color="orange" />
                    <Text>4.5 </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Iconify
                      icon="gravity-ui:heart-fill"
                      size={20}
                      color="red"
                    />
                  </View>
                </View>
                <View style={{ width: "100%", padding: 15 }}>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      textAlign: "center",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    Order now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* ------------- */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              padding: 10,
              borderColor: "gray",
              borderRadius: 5,
              backgroundColor: "#feeac1",
            }}
          >
            <View style={{ width: "100%", flexDirection: "row" }}>
              <View style={{ width: "50%", gap: 5 }}>
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      gap: 5,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      Dwater
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <Iconify
                        icon="material-symbols:circle"
                        size={11}
                        color="red"
                      />
                      <Text style={{ color: "red" }}>Closed</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%" }}>
                  <Text style={{}}>Perumal puram,Tirunelveli</Text>
                </View>
                <View
                  style={{
                    width: "25%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 5,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={15}
                      color="black"
                    />
                    <Text>5L</Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={17}
                      color="black"
                    />
                    <Text>10L</Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={19}
                      color="black"
                    />
                    <Text>20L</Text>
                  </View>
                </View>
              </View>

              <View style={{ width: "50%" }}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    gap: 10,
                    // paddingVertical: 5,
                    paddingHorizontal: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <Iconify icon="ic:round-star" size={24} color="orange" />
                    <Text>4.5 </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Iconify
                      icon="gravity-ui:heart-fill"
                      size={20}
                      color="red"
                    />
                  </View>
                </View>
                <View style={{ width: "100%", padding: 15 }}>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      textAlign: "center",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    Order now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* ------------- */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              padding: 10,
              borderColor: "gray",
              borderRadius: 5,
              backgroundColor: "#feeac1",
            }}
          >
            <View style={{ width: "100%", flexDirection: "row" }}>
              <View style={{ width: "50%", gap: 5 }}>
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      gap: 5,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      Dwater
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <Iconify
                        icon="material-symbols:circle"
                        size={11}
                        color="green"
                      />
                      <Text style={{ color: "green" }}>Open</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%" }}>
                  <Text style={{}}>Perumal puram,Tirunelveli</Text>
                </View>
                <View
                  style={{
                    width: "25%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 5,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={15}
                      color="black"
                    />
                    <Text>5L</Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={17}
                      color="black"
                    />
                    <Text>10L</Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={19}
                      color="black"
                    />
                    <Text>20L</Text>
                  </View>
                </View>
              </View>

              <View style={{ width: "50%" }}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    gap: 10,
                    // paddingVertical: 5,
                    paddingHorizontal: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <Iconify icon="ic:round-star" size={24} color="orange" />
                    <Text>4.5 </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Iconify
                      icon="gravity-ui:heart-fill"
                      size={20}
                      color="red"
                    />
                  </View>
                </View>
                <View style={{ width: "100%", padding: 15 }}>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      textAlign: "center",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    Order now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* ------------- */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#7c7c7c",
            margin: 15,
          }}
        ></View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              padding: 10,
              borderColor: "gray",
              borderRadius: 5,
              backgroundColor: "#feeac1",
            }}
          >
            <View style={{ width: "100%", flexDirection: "row" }}>
              <View style={{ width: "50%", gap: 5 }}>
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      gap: 5,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      Dwater
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <Iconify
                        icon="material-symbols:circle"
                        size={11}
                        color="green"
                      />
                      <Text style={{ color: "green" }}>Open</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%" }}>
                  <Text style={{}}>Perumal puram,Tirunelveli</Text>
                </View>
                <View
                  style={{
                    width: "25%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 5,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={15}
                      color="black"
                    />
                    <Text>5L</Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={17}
                      color="black"
                    />
                    <Text>10L</Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={19}
                      color="black"
                    />
                    <Text>20L</Text>
                  </View>
                </View>
              </View>

              <View style={{ width: "50%" }}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    gap: 10,
                    // paddingVertical: 5,
                    paddingHorizontal: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <Iconify icon="ic:round-star" size={24} color="orange" />
                    <Text>4.5 </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Iconify
                      icon="gravity-ui:heart-fill"
                      size={20}
                      color="red"
                    />
                  </View>
                </View>
                <View style={{ width: "100%", padding: 15 }}>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      textAlign: "center",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    Order now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* ------------- */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              padding: 10,
              borderColor: "gray",
              borderRadius: 5,
              backgroundColor: "#feeac1",
            }}
          >
            <View style={{ width: "100%", flexDirection: "row" }}>
              <View style={{ width: "50%", gap: 5 }}>
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      gap: 5,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      Dwater
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <Iconify
                        icon="material-symbols:circle"
                        size={11}
                        color="green"
                      />
                      <Text style={{ color: "green" }}>Open</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%" }}>
                  <Text style={{}}>Perumal puram,Tirunelveli</Text>
                </View>
                <View
                  style={{
                    width: "25%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 5,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={15}
                      color="black"
                    />
                    <Text>5L</Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={17}
                      color="black"
                    />
                    <Text>10L</Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      // alignItems: "baseline",
                    }}
                  >
                    <Iconify
                      icon="fa6-solid:bottle-water"
                      size={19}
                      color="black"
                    />
                    <Text>20L</Text>
                  </View>
                </View>
              </View>

              <View style={{ width: "50%" }}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    gap: 10,
                    // paddingVertical: 5,
                    paddingHorizontal: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <Iconify icon="ic:round-star" size={24} color="orange" />
                    <Text>4.5 </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Iconify
                      icon="gravity-ui:heart-fill"
                      size={20}
                      color="red"
                    />
                  </View>
                </View>
                <View style={{ width: "100%", padding: 15 }}>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      textAlign: "center",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    Order now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* ------------- */}
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
