import { TextInput, View , Text,StyleSheet,Pressable,Button,Platform,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Post(){
    const [priority,setPriority] = useState<string>('Low Priority');
    const [iconIndex,setIconIndex] = useState(0);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [title, setTitle] = useState<string>('');
    const [description, setDirection] = useState<string>('');


 const handleChange = (dataType: 'date' | 'time') => (
  event: any,
  selectedDate?: Date
) => {
  if (event.type === 'dismissed') {
    setShowDate(false);
    setShowTime(false);
    return;
  }

  if (selectedDate) {
    if (dataType === 'date') {
      setDate(selectedDate);
      setShowDate(false);
    } else {
      setTime(selectedDate);
      setShowTime(false);
    }
  }
};


const handleSubmit=async()=>{
     try {
    const taskData = {
      title,
      description,
      priority,
      date,
      time,
      icon: icons[iconIndex],
    };
console.log(taskData);
    // Read existing tasks
    const existingTasks = await AsyncStorage.getItem('posts');
    const tasksArray = existingTasks ? JSON.parse(existingTasks) : [];

    // Append new task
    tasksArray.push(taskData);

    // Save updated tasks array
    await AsyncStorage.setItem('posts', JSON.stringify(tasksArray));

    console.log('Task saved:');
  } catch (error) {
    console.error('Error saving task:', error);
  }
}
    const icons = ['📝', '💰', '🛒', '📱', '🎨', '📢', '📊', '💻', '📋', '🚀', '⚡', '🎯'];
    
    return(
        <SafeAreaView style={{paddingHorizontal:20,paddingVertical:10}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                <LinearGradient style={{padding:10,borderRadius:8}} start={{x:0,y:0}} end={{x:1,y:0}} colors={['#8b5cf6', '#a855f7', '#d946ef']}><AntDesign name="arrowleft" size={24} color="white" /></LinearGradient>
                <Text style={styles.title}>Create Task</Text>
                <View style={{padding:10,borderRadius:8}}></View>
            </View>
        
         <View style={[styles.inputCard,{marginTop:20}]}>
            <View style={{alignItems:'center',flexDirection:'row',gap:10}}>
                <Ionicons name="color-palette-outline" style={styles.icon} size={24} color="black" />
                <Text style={styles.title}>Choose Task Icon:</Text>
            </View>
            <View style={{marginBottom:10,flexDirection:'row',justifyContent:'space-between',gap:14,flexWrap:'wrap'}}>
                {
                icons.map((icon,index)=>(
                    <Pressable key={index}  style={{
                    width: '12%',
                    aspectRatio:1,
        }} onPress={()=>setIconIndex(index)}> 
                    <LinearGradient key={index} start={{x:0,y:0}} end={{x:1,y:0}} colors={iconIndex===index?['#8b5cf6', '#a855f7', '#d946ef']:['white','white']} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    padding:6,
        }}><Text style={{fontSize:24}}>{icon}</Text>
        </LinearGradient>
        </Pressable>
                    
                ))
                }
            </View>
            
        </View>
            
        <View style={styles.inputCard}>
            <View style={{alignItems:'center',flexDirection:'row',gap:10}}>
                <MaterialCommunityIcons style={[styles.icon,{backgroundColor:'lightgreen'}]} name="note-text-outline" size={24} color="black" />
                <Text style={styles.title}>Title:</Text>
            </View>
            <TextInput style={styles.input} onChangeText={text=>setTitle(text)} placeholder="Enter Title" />
        </View>

        <View style={styles.inputCard}>
            <View style={{alignItems:'center',flexDirection:'row',gap:10}}>
                <MaterialCommunityIcons style={[styles.icon,{backgroundColor:'magenta'}]} name="note-text-outline" size={24} color="black" />
                <Text style={styles.title}>Description:</Text>
            </View>
            <TextInput multiline={true} onChangeText={text=>setDirection(text)} numberOfLines={3} style={[styles.input,{height: 72}]} placeholder="Enter Description" />
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',gap:16}}>

        
        <Pressable style={[styles.inputCard,{flex:1}]} onPress={()=>setShowDate(true)}>
            <View style={{flexDirection:'row',alignItems:'center' ,gap:10}}>
                <LinearGradient  style={styles.icon}  colors={['red','magenta']}>
                    <Feather name="calendar" size={24} color="white" /> 
                    
                </LinearGradient>
                <Text style={styles.title}>Date</Text>
            </View>
            
            <Text>
                {date.toDateString()}
            </Text>
        </Pressable>

        <Pressable  style={[styles.inputCard,{flex:1}]}  onPress={()=>setShowTime(true)}>
            <View style={{flexDirection:'row',alignItems:'center' ,gap:10}}>
                
                <LinearGradient  style={styles.icon}  colors={['orange','red']}>
                    <FontAwesome6 name="clock-four" size={24} color="white" />
                    
                </LinearGradient>
                <Text style={styles.title}>Time</Text>
            </View>
            
            <Text>
                {time.toLocaleTimeString()}
            </Text>
        </Pressable>
        </View>

        {showDate && <DateTimePicker value={date} mode="date" display="spinner" onChange={handleChange('date')}  />}
        {showTime && <DateTimePicker value={time} mode="time" display="spinner" onChange={handleChange('time')}   />}


        <View style={styles.inputCard}>
                <View style={{alignItems:'center',flexDirection:'row',gap:10}}>
                    <MaterialIcons name="emoji-flags" style={styles.icon} size={24} color="black" />
                    <Text style={styles.title}>Priority</Text>
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:10,gap:8}}>
                    <Pressable onPress={()=>setPriority('Low Priority')}>
                    <LinearGradient start={{x:1,y:0}} end={{x:0,y:0}} style={styles.bubble} colors={priority==="Low Priority"?['#10b981', '#22c55e', '#84cc16']:['white','white']}>
                        <Text style={{textAlign:'center',color:priority==="Low Priority"?'white':'black',fontWeight:'bold'}}>Low Priority</Text>
                    </LinearGradient>
                    </Pressable>

                    <Pressable onPress={()=>setPriority('Medium Priority')}>
                    <LinearGradient start={{x:1,y:0}} end={{x:0,y:0}} style={styles.bubble} colors={priority==="Medium Priority"?['#f59e0b', '#facc15', '#f97316']:['white','white']}>
                        <Text style={{textAlign:'center',color:priority==="Medium Priority"?'white':'black',fontWeight:'bold'}}>Medium Priority</Text>
                    </LinearGradient>
                    </Pressable>
                 
                    <Pressable onPress={()=>setPriority('High Priority')}>
                    <LinearGradient start={{x:1,y:0}} end={{x:0,y:0}} style={styles.bubble} colors={priority==="High Priority"?['#ec4899', '#f43f5e', '#f97316']:['white','white']}>
                        <Text style={{textAlign:'center',color:priority==="High Priority"?'white':'black',fontWeight:'bold'}}>High Priority</Text>
                    </LinearGradient>
                    </Pressable>
                </View>
            </View>

            <Pressable onPress={handleSubmit} style={{marginTop:16}} >
            <LinearGradient style={[styles.bubble,{elevation:6,padding:16,width:'100%',alignItems:'center', justifyContent:'center'}]} start={{x:0,y:0}} end={{x:1,y:0}} colors={['#8b5cf6', '#a855f7', '#d946ef']}>
                <AntDesign name="filetext1" size={24} color="white" />
                <Text style={{marginLeft:6,color:'white',fontWeight:'bold',fontSize:18}}>Create Task</Text>
                </LinearGradient></Pressable>
                </ScrollView>
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
        textAlignVertical: 'top'
    },
    inputCard:{
        backgroundColor:'white',
        elevation:6,
        paddingHorizontal:20,
        paddingVertical:10,
        gap:12,
        borderRadius:14,
        marginBottom:20
        
    },
    bubble:{
    borderRadius:16,
    width:100,
    padding:8,
    paddingHorizontal:12,
    alignItems:'center',
    flexDirection:'row',
    gap:6,
    marginRight:8,
    fontWeight:'bold',
    

  }
})
