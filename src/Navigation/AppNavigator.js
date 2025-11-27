import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AxeDetail from "../screens/AxeDetailScreen";
import Home from "../screens/HomeScreen";
import Trajet from "../screens/TrajetScreen";

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