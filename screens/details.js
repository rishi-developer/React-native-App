import React from "react";
import {View, StyleSheet, Text, Button} from 'react-native';

export default function Details({ navigation, route}){

    // const pressHandler = () => {
    //     navigation.goBack();
    // }

    return(
        <View style = {styles.container}>
            <Text  style = {{borderColor: "grey", borderWidth:1, height:70, padding: 10, fontWeight: "bold"}}>
            Event name : {"\n\n"}
            {route.params.title}</Text>
            <Text>{"\n"}</Text>
            <Text  style = {{borderColor: "grey", borderWidth:1, height:70, padding: 10, fontWeight: "bold"}}>
            Event details : {"\n\n"}
            {route.params.info}</Text>
            <Text>{"\n"}</Text>
            <Text  style = {{borderColor: "grey", borderWidth:1, height:70, padding: 10, fontWeight: "bold"}}>
            Event rating : {"\n\n"}
            {route.params.rating}</Text>
            
            {/* <Button title='Back to homescreen' onPress={pressHandler} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});