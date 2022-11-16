import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function Header({ title, noSideBar, widthVal,navigation }) {
  return (
    <View>
      <View
        style={{
          height: "100%",
          width: Dimensions.get("window").width - widthVal,
        }}
      >
        {!noSideBar && (
          <MaterialIcons
            name="menu"
            size={28}
            onPress={()=>{navigation.navigate('SideMenu')}}
            style={styles.icon}
          />
        )}
        <View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: `${Dimensions.get("window").width} -`,
    height: "100%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    position: "absolute",
    left: 0,
  },
});
