import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AxeDetail from "../AxeDetailScreen";
import Home from "../HomeScreen";
import Trajet from "../TrajetScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
      return (
            <Stack.Navigator initialRouteName="Home" >
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="AxeDetail" component={AxeDetail} />
                  <Stack.Screen name="Trajet" component={Trajet} />
            </Stack.Navigator>
      );
};

export default AppNavigator;