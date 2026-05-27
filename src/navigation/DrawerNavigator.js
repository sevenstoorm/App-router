import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

function AppDrawerContent(props) {
  const goToTab = (screen) => {
    props.navigation.navigate("Inicio", { screen });
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Conta"
        icon={({ color, size }) => (
          <Ionicons name="person-circle-outline" color={color} size={size} />
        )}
        onPress={() => goToTab("Conta")}
      />
      <DrawerItem
        label="Configuracoes"
        icon={({ color, size }) => (
          <Ionicons name="settings-outline" color={color} size={size} />
        )}
        onPress={() => goToTab("Configuracoes")}
      />
      <DrawerItem
        label="Assinatura"
        icon={({ color, size }) => (
          <Ionicons name="card-outline" color={color} size={size} />
        )}
        onPress={() => goToTab("Assinatura")}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <AppDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Inicio" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
