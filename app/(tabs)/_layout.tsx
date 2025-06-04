import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { View , Text } from "react-native";

export default function TabsLayout(){
    return <Tabs screenOptions={{tabBarActiveTintColor:"red",
        headerStyle:{borderWidth:0,elevation:0},
        headerTitle:()=>null,
        headerLeft:()=>(
            <View style={{flexDirection:'row',gap:6,alignItems:'center'}}>
                <View style={{width:40,height:40,borderRadius:'100%',backgroundColor:'black'}}>
                   
                </View>
                <Text>Welcome, Ranjit</Text>
            </View>
        ),
         headerRight:()=>(
            <View style={{flexDirection:'row',gap:6,alignItems:'center'}}>
                <View style={{width:40,height:40,borderRadius:'100%',backgroundColor:'black'}}>
                   
                </View>
            </View>
        ),
    sceneStyle:{backgroundColor:'white',paddingHorizontal:20}}}>
        <Tabs.Screen name="index" options={{
            tabBarLabel:"Home",
            tabBarIcon:({color})=>(
                <FontAwesome5 name="home" size={24} color={color} />
            )
        }} />

    </Tabs>
}