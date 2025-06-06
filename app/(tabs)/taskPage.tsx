import Categories from "@/components/categories";
import Header from "@/components/header";
import Tasklist from "@/components/tasklist";
import {View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function TasksPage(){

    return(
        <SafeAreaView  style={{paddingHorizontal:20,flex:1,marginTop:10}}>
        <View>
            <Text style={{fontWeight:900,fontSize:24,marginVertical:10}}>Tasks:</Text>
            <Categories />
        </View>
        <ScrollView style={{marginTop:14}} showsVerticalScrollIndicator={false}>
            <Tasklist />
        </ScrollView>
        </SafeAreaView>
    )
}