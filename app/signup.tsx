import { View, Text , TextInput,Pressable, KeyboardAvoidingView ,StyleSheet } from "react-native"
export default function signup(){
    return <KeyboardAvoidingView style={styles.container}>
        <View style={{gap:6}}>
            <Text style={styles.label}>Signup</Text>
            <TextInput placeholder="Email" style={styles.input}/>
            <TextInput placeholder="Password" style={styles.input}/>
            <Pressable style={styles.button}>
                <Text style={{fontSize:14,textAlign:'center',color:'white',fontWeight:'bold'}}>Log In</Text>
            </Pressable>
        </View>
    </KeyboardAvoidingView>
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:20,
        backgroundColor:'white',
        
    },
    label:{
        fontSize:34,
        fontWeight:900,
        marginBottom:20,
        color:'#3f3d55',
        textAlign:'center'
    },
    input:{
        marginBottom:15,
        paddingHorizontal:20,
        paddingVertical:14,
        borderRadius:14,
        backgroundColor:'#ededed'
    },
    button:{
        backgroundColor:'#8b5cf6',
        borderRadius:14,
        padding:14,
        color:'white',
        marginVertical:10,
    }

})