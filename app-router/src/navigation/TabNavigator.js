import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Homescreen";
import Filmes from "../screens/Filmescreen";
import Favoritos from "../screens/Favoritoscreen";
import Pesquisa from "../screens/Pesquisascreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Filmes" component={Filmes} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
      <Tab.Screen name="Pesquisa" component={Pesquisa} />
    </Tab.Navigator>
  );
}
