import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Homescreen";    
import Descricao from "../screens/Descricaoscreen";
import Trailer from "../screens/Trailerscreen";   
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      <Stack.Screen 
        name="Descricao" 
        component={Descricao}
        options={{ 
          presentation: "modal" 
        }}
      />
      <Stack.Screen 
      name="Trailer" 
      component={Trailer} 
      options={{
        presentation: 'modal',
        }}
/>
    </Stack.Navigator>
  );
};

export default StackNavigator;