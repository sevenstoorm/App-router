import { createDrawerNavigator } from "@react-navigation/drawer";

import Assinatura from "../screens/Assinaturascreen";
import Configuracoes from "../screens/Configuracaoscreen";
import Conta from "../screens/Contascreen";
import StackNavigator from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Inicio" component={TabNavigator} />
      <Drawer.Screen name="Detalhes" component={StackNavigator} />
      <Drawer.Screen name="Conta" component={Conta} />
      <Drawer.Screen name="Configuracoes" component={Configuracoes} />
      <Drawer.Screen name="Assinatura" component={Assinatura} />
    </Drawer.Navigator>
  );
}
