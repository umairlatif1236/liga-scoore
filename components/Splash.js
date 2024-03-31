import React, { useEffect } from "react";
import { View,Text,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import myimage from "./image/my-splash.jpg"

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home");
        }, 1000);
    }, []);

    return (
        <SafeAreaView>
         <View>
      <Image
        source={myimage}
        style={{ width: 390, height: 950 }}
      />
    </View>
        </SafeAreaView>
    );
}

export default Splash;
