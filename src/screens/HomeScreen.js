import React from "react";
import { Text, View,StyleSheet,ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import theme from "../styles/themes"


const Home = () => {
      const navigate = useNavigation()
      return (
            <ScrollView style={style.container}>
                  <Text>Home Screen</Text>
                  <Button onPress={() => navigate.navigate('AxeDetail')}></Button>
            </ScrollView>
      )
}
const style = StyleSheet.create({
      container: {
            paddingTop: theme.spacing.md,
            backgroundColor: theme.colors.background
      }
})
export default Home
