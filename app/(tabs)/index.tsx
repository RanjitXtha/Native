import { Text, View , StyleSheet,ScrollView, Pressable,StatusBar } from "react-native";
import { Link } from "expo-router";
import Header from '../../components/header'
import Feather from '@expo/vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from "react";
import Categories from "@/components/categories";
import Tasklist from "@/components/tasklist";


//['#3b82f6', '#06b6d4', '#14b8a6']
// gradientColors: ['#8b5cf6', '#a855f7', '#e879f9'],
// gradientColors: ['#f59e0b', '#facc15', '#f97316'],
// gradientColors: ['#6366f1', '#3b82f6', '#0ea5e9'],


const tasks = [
  {
    title:'Finance Landing',
    description:'Design System',
    priority:'Medium',
    time:'12h 20min'
  },
  {
    title:'Finance Landing',
    description:'Design System',
    priority:'High',
    time:'12h 20min'
  },
  {
    title:'Finance Landing',
    description:'Design System',
    priority:'High',
    time:'12h 20min'
  },
  {
    title:'Finance Landing',
    description:'Design System',
    priority:'Medium',
    time:'12h 20min'
  },
  {
    title:'Finance Landing',
    description:'Design System',
    priority:'Low',
    time:'12h 20min'
  },
   {
    title:'Finance Landing',
    description:'Design System',
    priority:'Low',
    time:'12h 20min'
  },

]

export default function Index() {

  return (
    <LinearGradient
  colors={['#ffe4e6', '#faf5ff', '#eff6ff', '#cffafe']}
  

>
   <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <View style={{flexDirection:'row',gap:10,marginVertical:20,paddingHorizontal:20}}>
                <View style={styles.stats}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Total Tasks</Text>
                    <Text style={{color:'white',fontSize:38,fontWeight:900}}>20</Text>
                </View>

                <View style={styles.stats}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Total Completed</Text>
                    <Text style={{color:'white',fontSize:38,fontWeight:900}}>10</Text>
                </View>
            </View>
    <View style={{ flex: 1,  justifyContent:"flex-start",  alignItems:'flex-start', paddingHorizontal:20,  }}>
   <Categories />

<View style={styles.taskHeader}>
  <Text>Tasks:</Text>
  <Text>View all</Text>
</View>
       
       <Tasklist />
      
    </View>
    </ScrollView>
    </LinearGradient>
  );
}

const styles=StyleSheet.create({
  taskHeader:{
    marginVertical:20,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%'
  },
  taskCard:{
    width:'100%',
    paddingVertical:16,
    paddingHorizontal:20,
    borderRadius:14,
    gap:10,
    elevation:6,
 
  },
      stats:{backgroundColor:'#18a7df',
            flex:1,
            borderRadius:14,
            paddingHorizontal:10,
            paddingVertical:20,
            justifyContent:'center',
            alignItems:'center',
            gap:6
        },
  
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
