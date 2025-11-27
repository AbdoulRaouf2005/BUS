import React from "react";
import { View,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";


const AxeDetail = ()=>{
      const navigate = useNavigation()
      return(
            <View>
                  <Text>les Details de l axe</Text>
                  <Button onPress={() => navigate.navigate('Trajet')}>Voir le trajet</Button>
            </View>
            
      )
}
export default AxeDetail