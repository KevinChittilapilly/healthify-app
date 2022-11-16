import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo, SimpleLineIcons } from "@expo/vector-icons";


const SideMenu = () => {
  return (
    <View style={{marginLeft:'auto',marginRight:'auto',marginTop:70}}>
      <View style={{display:'flex',flexDirection:'row',marginBottom:30}}>
        <MaterialIcons name="account-circle" size={28}/>
        <Text>My Profile</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginBottom:30}}>
      <Entypo name="cog" size={28} color="black" />
        <Text>Settings</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row'}}>
      <SimpleLineIcons name="logout" size={28} color="black" />
        <Text>Logout</Text>
      </View>
    </View>
  );
};
export default SideMenu;
