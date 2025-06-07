import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import TabBar from "@/components/tabBar";
import { View ,Text} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabsLayout(){
    return <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'#8b5cf6',
        tabBarStyle:{
            
           
         
            elevation: 8,
          
            borderRadius:14,
            
        },
     
    }} >
       
        <Tabs.Screen name="index" options={{
            tabBarLabel:"Home",
            tabBarIcon:({color})=>(
                <FontAwesome5 name="home" size={24} color={color} />
            )
        }} />

        <Tabs.Screen name="post" options={{
            tabBarIcon:({color})=>(
                <LinearGradient style={{width:54,height:54,borderRadius:14,alignItems:'center',
                     transform: [{ translateY: -10 }], 
            elevation: 6, 
                }} colors={['#8b5cf6', '#a855f7', '#d946ef']}>
                    <Text style={{fontSize:34,fontWeight:400,color:'white'}}>+</Text>
                </LinearGradient>
            ),
           
            tabBarLabel:()=>false
        }} />

        <Tabs.Screen name="taskPage" options={{
            tabBarLabel:"Tasks",
            tabBarIcon:({color})=>(
                <MaterialIcons name="task-alt" size={24} color={color} />
            )
        }} />

    </Tabs>
}