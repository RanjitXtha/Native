import { View,Text ,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import { Platform } from "react-native";
import { StatusBar } from "react-native";

export default function Header(){
    return(
        
        <SafeAreaView style={[styles.header,{marginBottom:0,paddingBottom:0}]} edges={['top']}>
            
                <View style={{flexDirection:'row',gap:12,alignItems:'center'}}>
                    <LinearGradient colors={['#8b5cf6', '#a855f7', '#d946ef']} style={{justifyContent:'center',alignItems:'center',width:50,height:50,borderRadius:20}}>
                        <Feather name="user" size={24} color="white" />
                    </LinearGradient>
                                    
                    <Text style={{fontWeight:600,fontSize:20}}>Hello, Ranjit 👋</Text>
                </View>   
               

                <View style={{alignItems:'center',flexDirection:'row'}}>
                    <LinearGradient  style={{borderRadius:14,overflow:'hidden',justifyContent:'center',alignItems:'center',width:40,height:40,} }  colors={['#fb923c', '#ef4444']}>
                        <Feather name="bell" size={24} color="white" />
                    </LinearGradient>
                </View>
        </SafeAreaView>
    )
}

 const styles = StyleSheet.create({
        header:{
            paddingHorizontal:20,
            paddingVertical:10,
            
            flexDirection:'row',
            justifyContent:'space-between',
        }

    })