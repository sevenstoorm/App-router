import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Descricao from "../screens/Descricaoscreen";
import Trailer from "../screens/Trailerscreen";
import FavoritoScreen from "../screens/FavoritoScreen";
import PesquisaScreen from "../screens/PesquisaScreen";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Descricao"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#F4F8F7" },
      }}
    >
      <Stack.Screen name="Descricao" component={Descricao} />
      <Stack.Screen name="Trailer" component={Trailer} />
      <Stack.Screen name="Favoritos" component={FavoritoScreen} />
      <Stack.Screen name="Pesquisas" component={PesquisaScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
