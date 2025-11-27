import React from "react";
import { Text, View, } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";


const Home = () => {
      const navigate = useNavigation()
      return (
            <View style={{paddingTop:120}}>
                  <Text>Home Screen</Text>
                  <Button onPress={() => navigate.navigate('AxeDetail')}></Button>
            </View>
      )
}
export default Home
