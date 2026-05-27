import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Descricao from "../screens/Descricaoscreen";
import Trailer from "../screens/Trailerscreen";

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
    </Stack.Navigator>
  );
};

export default StackNavigator;
