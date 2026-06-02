import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";

import Assinatura from "../screens/Assinaturascreen";
import Configuracoes from "../screens/Configuracaoscreen";
import Conta from "../screens/ContaScreen";
import Home from "../screens/Homescreen";
import Favoritos from "../screens/FavoritoScreen";
import Perfil from "../screens/Perfilscreen";
import Pesquisa from "../screens/PesquisaScreen";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

const hiddenTabOptions = {
  tabBarButton: () => null,
  tabBarItemStyle: { display: "none" },
};

const tabIcons = {
  Home: "home-outline",
  Perfil: "person-outline",
  Favoritos: "heart-outline",
  Pesquisa: "search-outline",
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        headerShown: true,
        headerTitle: route.name,
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.getParent()?.openDrawer()}
            style={{ marginLeft: 16 }}
          >
            <Ionicons name="menu-outline" size={28} color="#1F2937" />
          </Pressable>
        ),
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size, focused }) => {
          const iconName = focused
            ? tabIcons[route.name]?.replace("-outline", "")
            : tabIcons[route.name];

          if (!iconName) {
            return null;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
      <Tab.Screen name="Pesquisa" component={Pesquisa} />
      <Tab.Screen name="Conta" component={Conta} options={hiddenTabOptions} />
      <Tab.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="Assinatura"
        component={Assinatura}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="Detalhes"
        component={StackNavigator}
        options={hiddenTabOptions}
      />
    </Tab.Navigator>
  );
}
