import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Homescreen";    
import Descricao from "../screens/Descricaoscreen";
import Trailer from "../screens/Trailerscreen";
import FavoritosScreen from "../screens/FavoritoScreen";
import PesquisaScreen from "../screens/PesquisaScreen";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      <Stack.Screen name="Descricao" component={Descricao} />
      <Stack.Screen name="Trailer" component={Trailer} />
      <Stack.Screen name="Favoritos" component={FavoritosScreen} />
      <Stack.Screen name="Pesquisas" component={PesquisaScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;