import React, {useState} from "react";
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Modal, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Eventform from "./eventform";

export default function Home({navigation}){

    const [modalOpen, setModalOpen] = useState(false);
    const [event, setEvent] = useState([
       { title: 'Diwali', rating: 4, info: 'On the Eve of Deepawali', key: '1'},
       { title: 'Goodies Distribution', rating: 3, info: 'Goodies to the freshers', key: '2'},
       { title: 'Team Lunch', rating: 5, info: 'Friday enjoyment', key: '3'}

    ]);


  const longPressHandler = (key) =>{
    // console.log(key);
    setEvent((prevEvent) => {
      return prevEvent.filter(event => event.key != key)
    })
  }

    const addEvent = (events) =>{
        events.key = Math.random().toString();
        setEvent((currentevents) => {
            return [events, ...currentevents]
        });
        setModalOpen(false);
    }

    // const pressHandler = () =>{
    //     navigation.navigate('Details');
    // }

    return(
        <View style = {styles.container}>

        <Modal visible={modalOpen}>
            <TouchableWithoutFeedback>
                <View><Text>{"\n"}</Text>
                   <Button title='Close' onPress={() => setModalOpen(false)} />
                       <Eventform addEvent = {addEvent}/>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
             
            <Button title='Add' onPress={() => setModalOpen(true)} />

            <FlatList 
                data = {event}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress={ () => navigation.navigate('Details', item)} onLongPress = {() => longPressHandler(item.key)}>
                        <Text>{"\n"}</Text>
                        <Text style = {{borderColor: "grey", borderWidth:1, height:40, padding: 10, fontWeight: "bold"}}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },

});

