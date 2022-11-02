import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Footer from "../common/Footer";
import Header from "../common/Header";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({  }) => {
            return {
              headerTitle: () => (
                <Header title="Healthify Me" />
              ),
            };
          }}
          name="Default"
          component={Footer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
