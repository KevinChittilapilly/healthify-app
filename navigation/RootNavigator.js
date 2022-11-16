import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Footer from "../common/Footer";
import Header from "../common/Header";
import AddGoals from "../screens/AddGoals";
import Goals from "../screens/Goals";
import SideMenu from "../screens/SideMenu";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({navigation, route   }) => {
            return {
              headerTitle: () => (
                <Header title="Healthify Me" widthVal={0} navigation={navigation}/>
              ),
            };
          }}
          name="Default"
          component={Footer}
        />
        <Stack.Screen
          options={({navigation, route  }) => {
            console.log('check',navigation)
            return {
              headerTitle: (props) => (
                <Header title="Healthify Me"  noSideBar widthVal={100} />
              ),
            };
          }}
          
          name="AddGoal"
          component={AddGoals}
        />
        <Stack.Screen
          options={({  }) => {
            return {
              headerTitle: () => (
                <Header title="Healthify Me" noSideBar widthVal={100}/>
              ),
            };
          }}
          name="Goals"
          component={Goals}
        />
         <Stack.Screen
          options={({  }) => {
            return {
              headerTitle: () => (
                <Header title="Healthify Me" noSideBar widthVal={100}/>
              ),
            };
          }}
          name="SideMenu"
          component={SideMenu}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default RootNavigator;
