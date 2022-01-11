import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ToDoScreen from "./screens/ToDoScreen";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";
import WalletScreen from "./screens/WalletScreen";
import Logo from "./components/ui/Logo";
import StoreProvider from "./context";

const Stack = createStackNavigator();

function App() {
  const screenOptions = { headerTitle: Logo };
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="ToDo" component={ToDoScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Wallet" component={WalletScreen} />
          <Stack.Screen
            name="Home"
            options={screenOptions}
            component={HomeScreen}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
