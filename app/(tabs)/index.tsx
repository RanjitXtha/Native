import { Text, View , StyleSheet,ScrollView } from "react-native";
import { Link } from "expo-router";


const categories = [
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
    priority:'Medium',
    time:'12h 20min'
  },
  {
    title:'Finance Landing',
    description:'Design System',
    priority:'Medium',
    time:'12h 20min'
  },

]

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent:"flex-start",
        alignItems:'flex-start',
        paddingHorizontal:20,
       
      }}
    >
      <View  style={styles.categoryContainer}>

     
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        {
          categories.map((category,index)=>(
          <View key={index} style={styles.bubble}>
          <Text style={{fontWeight:'bold'}}>{category.name}</Text>
          <View  style={{justifyContent:'center',alignItems:'center',width:25,height:25,backgroundColor:'white',borderRadius:'100%',padding:2}}><Text >{category.total}</Text></View>
        </View>
          ))
        }
        
      </ScrollView>

       </View>

<View style={styles.taskHeader}>
  <Text>Tasks:</Text>
  <Text>View all</Text>
</View>
       <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
        {
          tasks.map((task,index)=>(
          <View key={index} style={[styles.taskCard,{marginBottom:15}]}>
            <Text style={{fontSize:18,fontWeight:500}}>{task.title}</Text>
            <Text>{task.description}</Text>
            <View style={{flexDirection:'row',marginTop:15}}>
              <Text style={styles.bubble}>{task.priority}</Text>
              <Text style={styles.bubble}>{task.time}</Text>
            </View>
          </View>
          ))
        }
          
       </ScrollView>
      
    </View>
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
    backgroundColor:'cyan',
    width:'100%',
    paddingVertical:10,
    paddingHorizontal:15,
    borderRadius:14,
    gap:10
  }
  ,
  categoryContainer:{
    justifyContent:'center',
    flexDirection:'row',
    gap:8,
  },
  bubble:{
    backgroundColor:'#ededed',
    borderRadius:16,
    padding:8,
    paddingHorizontal:12,
    alignItems:'center',
    flexDirection:'row',
    gap:6,
    marginRight:8
  

  }
})
