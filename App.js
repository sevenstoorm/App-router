import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FavoritesProvider } from "./src/screens/FavoritesContext";

import DrawerNavigator from "./src/navigation/DrawerNavigator";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FavoritesProvider>
        <NavigationContainer>
          <StackNavigator />
          <DrawerNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
      </FavoritesProvider>
    </GestureHandlerRootView>
  );
}
