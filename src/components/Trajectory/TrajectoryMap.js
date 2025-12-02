import React from 'react'
import { View } from 'react-native'

import MapView, { Marker } from 'react-native-maps';

const Map = () => {
      return (
            <View >
                  <MapView
                        
                        initialRegion={{
                              latitude: 13.5116,
                              longitude: 2.1254,
                              latitudeDelta: 0.05,
                              longitudeDelta: 0.05,
                        }}
                  >
                        <Marker
                              coordinate={{ latitude: 13.5116, longitude: 2.1254 }}
                              title="Niamey"
                              description="Gare de bus"
                        />
                  </MapView>
            </View>

      )
}
export default Map