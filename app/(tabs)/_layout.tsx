import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { View , Text } from "react-native";
import Header from '../../components/header'

export default function TabsLayout(){
    return <Tabs screenOptions={{tabBarActiveTintColor:"red",
        headerShown:false,

    sceneStyle:{backgroundColor:'white'}}}>
        <Tabs.Screen name="index" options={{
            tabBarLabel:"Home",
            tabBarIcon:({color})=>(
                <FontAwesome5 name="home" size={24} color={color} />
            )
        }} />

    </Tabs>
}