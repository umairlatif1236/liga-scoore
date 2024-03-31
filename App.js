import React from 'react';
import Splash from './components/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from './components/Home';
import Form from './components/Form';
import { SafeAreaView } from 'react-native';
import Details from './components/src/Details';
 let Drawer=createDrawerNavigator()
let Stack= createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Splash">
    
      <Drawer.Screen name="Splash" component={Splash} options={{ headerShown: null }} />
      <Drawer.Screen name="Home" component={Home}  />
      <Drawer.Screen name="Contact-us" component={Form}  />

   </Drawer.Navigator>
   
  </NavigationContainer>
  );
}

