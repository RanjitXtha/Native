import { TextInput, View , Text,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Post(){
    return(
        <SafeAreaView style={{paddingHorizontal:20,paddingVertical:10}}>
            <View>
<               Text>Create Task</Text>
            </View>
            
        <View>
            <Text>Title:</Text>
            <TextInput style={styles.input} placeholder="Enter Title" />
            <Text>Description:</Text>
            <TextInput style={styles.input} placeholder="Enter Description" />
        </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    input:{

    }
})
