import { TextInput, View , Text,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Post(){
    return(
        <SafeAreaView style={{paddingHorizontal:20,paddingVertical:10}}>
            <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                <LinearGradient style={{padding:10,borderRadius:8}} start={{x:0,y:0}} end={{x:1,y:0}} colors={['#8b5cf6', '#a855f7', '#d946ef']}><AntDesign name="arrowleft" size={24} color="white" /></LinearGradient>
                <Text style={styles.title}>Create Task</Text>
                <View style={{padding:10,borderRadius:8}}></View>
            </View>
            
        <View style={[styles.inputCard,{marginTop:20}]}>
            <View style={{alignItems:'center',flexDirection:'row',gap:10}}><MaterialCommunityIcons style={styles.icon} name="note-text-outline" size={24} color="black" /><Text style={styles.title}>Title:</Text></View>
            <TextInput style={styles.input} placeholder="Enter Title" />
           
        </View>
        <View>
<Text>Description:</Text>
            <TextInput style={styles.input} placeholder="Enter Description" />
        </View>
         
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:18,
    },
    icon:{
        backgroundColor:'lightblue',
        padding:4,
        borderRadius:8,
        color:'white'
    },
    input:{
        borderWidth:0,
        paddingVertical:10,
        paddingHorizontal:20,
    },
    inputCard:{
        backgroundColor:'white',
        elevation:6,
        paddingHorizontal:20,
        paddingVertical:10,
        gap:12,
        borderRadius:14,
        marginBottom:20
        
    }
})
