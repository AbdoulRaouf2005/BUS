// import Geolocation from 'react-native-geolocation-service';
 import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid, Platform} from 'react-native';

const getCurrentPosition = async () => {
  // Permission Android
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      throw new Error('Permission localisation refusée');
    }
  }

  // Retourne une promesse contenant latitude/longitude
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        resolve({latitude, longitude});
      },
      error => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  });
};

export default getCurrentPosition;
