import React, { useState } from "react";
import { StyleSheet, Text, View,Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title, navigation }) {
  const [openSideMenu, setIsSideMenu] = useState(false);
  const openMenu = () => {
    setIsSideMenu(true);
  };
  const sideMenu = () => {
    return( <View style={styles.sideMenu}>
        <Text>sideMenu</Text>
    </View>);
  };
  return (
    <View>
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    textAlign:'center'
  },
  icon: {
    position: "absolute",
    left: 0,
  },
});
