import { View, Text, StyleSheet , Pressable,ScrollView , Button} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSortedScreens } from "expo-router/build/useScreens";
const taskse = [
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


const getAllTasks = async () => {
  
};



export default function Tasklist(){
  interface taskType {
    title:string,
    description:string,
    priority:string,
    time:Date,
    date:Date,
    icon:string
  }
    const [tasks,setTasks] = useState<taskType[]>([])
    const [listType, setListType] = useState(0);
    const [filteredTasks , setFilteredTasks] = useState<taskType[]>([]);

useEffect(() => {
  async function getData() {
    const tasks = await AsyncStorage.getItem('posts');
    if (tasks) {
      const parsedData = JSON.parse(tasks);

      // 🔧 Convert string date/time back to Date objects
      const data = parsedData.map((task: any) => ({
        ...task,
        date: new Date(task.date),
        time: new Date(task.time),
      }));

      console.log(data);
      setTasks(data);         
      setFilteredTasks(data);
    } else {
      setTasks([]);
      setFilteredTasks([]);
    }
  }

  getData();
}, []);
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


  const handleDelete = async (index: number) => {
  try {

    const updatedTasks = tasks.filter((_, i) => i !== index);
    console.log(updatedTasks);
    setTasks(updatedTasks);


    await AsyncStorage.setItem('posts', JSON.stringify(updatedTasks));
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};


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
        <View style={{width:'100%',flex:1}}>
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
                    <View>
                       <Text style={{fontSize:18,fontWeight:500}}>{task.title}</Text>
                       <Button title="X" onPress={()=>handleDelete(index)}/>
                    </View>
                   
                    <Text>{task.description}</Text>
                    <View style={{flexDirection:'row',marginTop:15}}>
                      <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={setPriorityColor(task.priority)} style={[styles.bubble]}><Text style={{color:'white',fontWeight:'bold'}}>{task.priority}</Text></LinearGradient>
                      <View  style={[styles.bubble,{alignItems:'center',gap:6,backgroundColor:'white'}]}>
                        <Feather name="calendar" size={20} color="black" />
                        <Text style={{fontWeight:'bold'}}>{task.time.toLocaleTimeString()}</Text>
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
