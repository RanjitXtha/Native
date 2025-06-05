import { View,Text ,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';


export default function Header(){
    return(
        <SafeAreaView style={styles.header}>
            <View style={styles.headerTop}>
                <View>
                    <View style={{flexDirection:'row',gap:12,alignItems:'center'}}>
                        <View style={{justifyContent:'center',alignItems:'center',width:50,height:50,borderRadius:'100%',backgroundColor:'#ededed'}}>
                            <Feather name="user" size={34} color="black" />
                        </View>
                                    
                        <Text style={{fontWeight:600,fontSize:20}}>Hello, Ranjit 👋</Text>
                    </View>   
                </View>

                <View style={{alignItems:'center',flexDirection:'row',gap:6,paddingRight: 20}}>
                    <View style={{justifyContent:'center',alignItems:'center',width:40,height:40,borderRadius:'100%',backgroundColor:'#ededed'}}>
                        <Feather name="bell" size={24} color="black" />
                    </View>
                </View>
            </View>
            <Text style={{color:'#121514',marginTop:10,fontSize:34,fontWeight:900}}>You have 20 Tasks this month.</Text>
        </SafeAreaView>
    )
}

 const styles = StyleSheet.create({
        header:{
            backgroundColor:'#62d5fb',
            paddingHorizontal:20,
            paddingVertical:10,
            marginBottom:14,
            borderBottomLeftRadius:24,
            borderBottomRightRadius:24,
            elevation:6
        },
        headerTop:{
            flexDirection:'row',
            justifyContent:'space-between',
        }
    })