import { View, Text, StyleSheet , Pressable,ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";

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

];
const categoriesList = [
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

export default function Tasklist(){
    const [listType, setListType] = useState(0);
    const [filteredTasks , setFilteredTasks] = useState(tasks);


    function filterTasks(){
      switch(listType){
        case 0: {
          setFilteredTasks(tasks)
          break;
        }
        case 1: {
          
        }
      }
    }


function setPriorityColor (color:string):[string,string,...string[]]{
  switch(color){
    case 'Medium':return ['#f59e0b', '#facc15', '#f97316'];
    case 'Low': return ['#10b981', '#22c55e', '#84cc16'];
    case 'High':return['#ec4899', '#f43f5e', '#f97316']  ;
    default:
      return ['#6b7280', '#4b5563'];
  }
}
const colors = [
  {primary:'#ffebee' },

  {primary:'#e6f7fd' },

  
    {primary:'#fff0e0' },

]

    return(
        <View style={{width:'100%'}}>
           <View  style={styles.categoryContainer}>
         <ScrollView style={{paddingVertical:10}} horizontal showsHorizontalScrollIndicator={false}>
        
                {
                  categoriesList.map((category,index)=>(
                  <Pressable key={index} onPress={()=>setListType(index)}>
                 <LinearGradient colors={index===listType?['#8b5cf6', '#a855f7', '#d946ef']:['white','white']}   style={[styles.bubble,{elevation:3}]}>
                  <Text style={{fontWeight:'bold',color:index===listType?'white':'black'}}>{category.name}</Text>
                  <View  style={{justifyContent:'center',alignItems:'center',width:25,height:25,backgroundColor:'white',borderRadius:50,padding:2}}><Text >{category.total}</Text></View>
                </LinearGradient>
                </Pressable>
           
                  ))
                }
                
              </ScrollView>
              </View>
           <View style={styles.taskHeader}>
  <           Text>Tasks:</Text>
              <Text>View all</Text>
            </View>
          {
                /**colors[index%colors.length].primary**/
                  tasks && tasks.map((task,index)=>(
                  <View key={index} style={[styles.taskCard,{marginBottom:15,backgroundColor:`white`}]}>
                    <Text style={{fontSize:18,fontWeight:500}}>{task.title}</Text>
                    <Text>{task.description}</Text>
                    <View style={{flexDirection:'row',marginTop:15}}>
                      <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={setPriorityColor(task.priority)} style={[styles.bubble]}><Text style={{color:'white',fontWeight:'bold'}}>{task.priority} priority</Text></LinearGradient>
                      <View  style={[styles.bubble,{alignItems:'center',gap:6,backgroundColor:'white'}]}>
                        <Feather name="calendar" size={20} color="black" />
                        <Text style={{fontWeight:'bold'}}>{task.time}</Text>
                    </View>
                      </View>
                     
                  </View>
                  ))
                }
                  
               </View>
    )
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
 
  }
  ,
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
  

  },
  
})
