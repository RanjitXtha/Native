import { View,Text ,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Header(){
    return(
        <SafeAreaView style={styles.header}>
            <View style={styles.headerTop}>
                <View>
                    <View style={{flexDirection:'row',gap:12,alignItems:'center'}}>
                        <View style={{width:50,height:50,borderRadius:'100%',backgroundColor:'black'}}>
                        </View>
                                    
                        <Text style={{fontWeight:600,fontSize:18}}>Hello, Ranjit</Text>
                    </View>   
                </View>

                <View style={{flexDirection:'row',gap:6,alignItems:'center',paddingRight: 20}}>
                    <View style={{width:40,height:40,borderRadius:'100%',backgroundColor:'black'}}>
                    </View>
                </View>
            </View>
            <Text style={{backgroundColor:'blue',marginTop:10,fontSize:34,fontWeight:600}}>You have 20 Tasks this month.</Text>
        </SafeAreaView>
    )
}

 const styles = StyleSheet.create({
        header:{
            backgroundColor:'red',
            paddingHorizontal:20,
            paddingVertical:10,
            marginBottom:14,
            borderBottomLeftRadius:24,
            borderBottomRightRadius:24,
        },
        headerTop:{
            flexDirection:'row',
            justifyContent:'space-between',
        }
    })