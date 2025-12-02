import React from "react";
// import Map from "../components/Trajectory/TrajectoryMap"
import { View,Text } from "react-native";
import { MapView } from "@maplibre/maplibre-react-native"
// import MapView, { Marker, PROVIDER_GOOGLE  } from 'react-native-maps';

const Trajet = () =>{
      return(
            <View>
                  <Text>le Trajet du bus sur l'axe</Text>
                  <MapView style={{ flex: 1 }} />    
            </View>
      )
}
export default Trajet