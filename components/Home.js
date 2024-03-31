import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text, Image,StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Epl from "./src/EPL";
import Laliga from "./src/Laliga";
import Bundesliga from "./src/Bundesliga";
import laliga from "./image/140.png"
import bundesliga from "./image/78.png"
import epl from "./image/39.png"
import ligue from "./image/61.png"
import Ligue1 from "./src/Ligue1";
import SeriaA from "./image/135.png"
import SEriaA from "./src/SeriaA";


 let Tab=createBottomTabNavigator()
const Home =()=>{
  return (


    <Tab.Navigator initialRouteName="EPL">
      <Tab.Screen name="EPL" component={Epl} options={{headerShown:null,tabBarIcon:({focuced})=>{
        return(
          <Image style={styles.img} source={epl}/>
        )
      }}}/>
      <Tab.Screen  name="Laliga" component={Laliga} options={{headerShown:null,tabBarIcon:({focuced})=>{
        return(
          <Image style={styles.img} source={laliga}/>
        )
      }}} />
      <Tab.Screen name="Bundesliga" component={Bundesliga} options={{headerShown:null,tabBarIcon:({focuced})=>{
        return(
          <Image style={styles.img} source={bundesliga}/>
        )
      }}}l/>
      <Tab.Screen name="ligue1" component={Ligue1} options={{headerShown:null,tabBarIcon:({focuced})=>{
        return(
          <Image style={styles.img} source={ligue}/>
        )
      }}}l/>
      <Tab.Screen name="Seria A" component={SEriaA} options={{headerShown:null,tabBarIcon:({focuced})=>{
        return(
          <Image style={styles.img} source={SeriaA}/>
        )
      }}}l/>
    </Tab.Navigator>
   
   
   
  )
}
const styles=StyleSheet.create({
  img:{
    width: 30,
    height: 30,
    borderRadius:10
  }
})

export default Home
