import { Text, View ,Button, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import { useState } from "react";

export default function Index() {
    const router = useRouter();
    const [isLoggedIn , setIsLoggedIn] = useState(true);
  return (
    
    <View style={styles.container}>
      
      <Text>To Do List</Text>
      <Link style={styles.button} href="/login">Login</Link>

      <Link style={[styles.button,{backgroundColor:'#ededed',color:'black'}]} href="/signup">Signup</Link>
      <Button title="Click" onPress={()=>router.push('/(tabs)')} />
    </View>
    )
 
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:35,
        backgroundColor:'white', 
    },
    button:{
        backgroundColor:'#8b5cf6',
        borderRadius:14,
        padding:14,
        color:'white',
        marginVertical:10,
        width:'100%',
        textAlign:'center',
        fontWeight:'bold',
    }

})
