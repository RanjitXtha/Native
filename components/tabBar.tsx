import { View, Text, StyleSheet } from "react-native";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const navButtons = [
    {
        label:'Home',
        icon:<FontAwesome5 name="home" size={24} color={'black'} />
    },
    {
        label:'Home',
        icon:<FontAwesome5 name="home" size={24} color={'black'} />
    },
    {
        label:'Home',
        icon:<FontAwesome5 name="home" size={24} color={'black'} />
    },
]

const TabBar: React.FC<BottomTabBarProps> = ({state,descriptors,navigation})=>{

    return(
        <View style={styles.navigationBar}>
            {
                navButtons.map((nav,index)=>(
                    <View key={index}>
                        <View>{nav.icon}</View>
                        <Text>{nav.label}</Text>
                    </View>
                ))
            }
        </View>
    )
}


const styles = StyleSheet.create({
    navigationBar:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 5,
        backgroundColor:'white',
        marginVertical:10,
        marginHorizontal:20,
        borderRadius:14,
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-between'

    }
}) 

export default TabBar