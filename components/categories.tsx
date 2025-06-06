import { Text, View , StyleSheet,ScrollView, Pressable } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from "react";

const categoriesList = [
  {
    name:'All Tasks',
    total:17
  },
   {
    name:'Ongoing',
    total:4
  },
   {
    name:'Upcoming',
    total:6
  },
   {
    name:'Completed',
    total:7
  },
];

export default function Categories(){
const [listType, setListType] = useState(0);
    return(
        <View  style={styles.categoryContainer}>
         <ScrollView style={{paddingVertical:10}} horizontal showsHorizontalScrollIndicator={false}>
        
                {
                  categoriesList.map((category,index)=>(
                  <Pressable key={index} onPress={()=>setListType(index)}>
                 <LinearGradient colors={index===listType?['#8b5cf6', '#a855f7', '#d946ef']:['white','white']}   style={[styles.bubble,{elevation:3}]}>
                  <Text style={{fontWeight:'bold',color:index===listType?'white':'black'}}>{category.name}</Text>
                  <View  style={{justifyContent:'center',alignItems:'center',width:25,height:25,backgroundColor:'white',borderRadius:50,padding:2}}><Text >{category.total}</Text></View>
                </LinearGradient>
                </Pressable>
           
                  ))
                }
                
              </ScrollView>
              </View>
    )
}

const styles=StyleSheet.create({
  categoryContainer:{
    justifyContent:'center',
    flexDirection:'row',
    
  },
  bubble:{
    // backgroundColor:'#ededed',
    borderRadius:16,
    padding:8,
    paddingHorizontal:12,
    alignItems:'center',
    flexDirection:'row',
    gap:6,
    marginRight:8,
    fontWeight:'bold'

  }
})