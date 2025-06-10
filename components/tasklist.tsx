import { View, Text, StyleSheet , Pressable,ScrollView , Button} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSortedScreens } from "expo-router/build/useScreens";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
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

const colors = [
  {primary:'#ffebee' },

  {primary:'#e6f7fd' },

  
    {primary:'#fff0e0' },

]
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
  interface taskType {
    id:string,
    title:string,
    description:string,
    priority:string,
    time:Date,
    date:Date,
    icon:string,
    status:string,
    statusText:string,
    isCompleted:boolean,
  }
    const [tasks,setTasks] = useState<taskType[]>([])
    const [listType, setListType] = useState(0);
    const [filteredTasks , setFilteredTasks] = useState<taskType[]>([]);

     const getStatus = (task: any) => {
  const now = new Date();

  const taskDateTime = new Date(task.date);
  const taskTime = new Date(task.time);

  // Combine date and time into one Date object
  taskDateTime.setHours(taskTime.getHours());
  taskDateTime.setMinutes(taskTime.getMinutes());
  taskDateTime.setSeconds(0);
  taskDateTime.setMilliseconds(0);

  if (task.isCompleted) {
    return { statusText: "Completed", status: "Completed" };
  }

  if (taskDateTime > now) {
    // Time difference calculation
    const diffMs = taskDateTime.getTime() - now.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60)) % 60;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    return {
      statusText: `${diffDays}d ${diffHours}h ${diffMinutes}m`,
      status: "Upcoming",
    };
  } else {
    // Task time has passed but is not marked completed
    return { statusText: "Ongoing", status: "Ongoing" };
  }
};

useFocusEffect(
  useCallback(() => {
   
    const getData = async () => {
      const tasks = await AsyncStorage.getItem('posts');
      if (tasks) {
        const parsedData = JSON.parse(tasks);
       const data = parsedData.map((task: any) => {
  const statusObj = getStatus(task);
  return {
    ...task,
    date: new Date(task.date),
    time: new Date(task.time),
    statusText: statusObj.statusText,
    status: statusObj.status,
  };
});

        console.log(data)

        setTasks(data);
        setFilteredTasks(data);
      } else {
        setTasks([]);
        setFilteredTasks([]);
      }
    };

    getData();
  }, [])
);


useEffect(() => {
  function filterTasks() {
    
    switch(listType){
      case 0: {
        setFilteredTasks(tasks);
        break;
      }
      case 1:{
        const filtered = tasks.filter((task:any)=>task.status === "Ongoing");
        setFilteredTasks(filtered);
        break;
      }case 2:
      {
        const filtered = tasks.filter((task:any)=>task.status==="Upcoming");
        setFilteredTasks(filtered);
        break;
      }
      case 3:{
        const filtered = tasks.filter((task:any)=>task.status ==="Completed");
        setFilteredTasks(filtered);
        break;
      }
      default:{
        setFilteredTasks(tasks);
        break;
      }
    }


  }

  filterTasks();
}, [listType, tasks]);

    


  const handleDelete = async (taskId:string) => {
  try {

    const updatedTasks = tasks.filter(task => task.id !== taskId);
    console.log(updatedTasks);
    setTasks(updatedTasks);


    await AsyncStorage.setItem('posts', JSON.stringify(updatedTasks));
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

const handleComplete = async (taskId: string) => {
  const updatedTasks = tasks.map(task => {
    if (task.id === taskId) {
      const updatedTask = { ...task, isCompleted: true };
      const statusObj = getStatus(updatedTask);
      return { ...updatedTask, ...statusObj };
    }
    return task;
  });

  setTasks(updatedTasks);
  await AsyncStorage.setItem('posts', JSON.stringify(updatedTasks));
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
                  filteredTasks && filteredTasks.map((task:any,index)=>{
                   
                  return (<View key={index} style={[styles.taskCard,{marginBottom:15,backgroundColor:`white`}]}>
                    <View>
                       <Text style={{fontSize:18,fontWeight:500}}>{task.title}</Text>
                       <Button title="X" onPress={()=>handleDelete(task.id)}/>
                        <Button title="com" onPress={()=>handleComplete(task.id)} />
                    </View>
                   
                    <Text>{task.description}</Text>
                    <View style={{flexDirection:'row',marginTop:15}}>
                      <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={setPriorityColor(task.priority)} style={[styles.bubble]}><Text style={{color:'white',fontWeight:'bold'}}>{task.priority}</Text></LinearGradient>
                      <View  style={[styles.bubble,{alignItems:'center',gap:6,backgroundColor:'white'}]}>
                        <Feather name="calendar" size={20} color="black" />
                        <Text style={{fontWeight:'bold'}}>{
                          task.statusText
                          }</Text>
                    </View>
                      </View>
                     
                  </View>
                  )})
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
