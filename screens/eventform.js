import React, {useState} from "react";
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Modal, Button} from 'react-native';
import {Form, Formik} from 'formik';
import { TextInput } from "react-native-gesture-handler";
import * as yup from 'yup';

const EventSchema = yup.object({
    title: yup.string().required().min(4),
    info: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number between 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

export default function Eventform({addEvent}){
    return(
        <View>
            <Formik 
                initialValues={{title: '', body:'', rating:''}}
                validationSchema = {EventSchema}
                onSubmit = {(values, actions) =>{
                    actions.resetForm();
                    addEvent(values);
                }}
            >
                {(props) => (
                    <View>
                        <Text>{"\n"}</Text>
                        <TextInput style={{borderColor: "grey", borderWidth:1, height:40, padding: 10, fontWeight: "bold"}}
                            onChangeText={props.handleChange('title')}
                            onBlur={props.handleBlur('title')}
                            placeholder="Enter Event Title"
                        />
                        <Text >{props.touched.title && props.errors.title}</Text>
                        <TextInput style={{borderColor: "grey", borderWidth:1, height:40, padding: 10, fontWeight: "bold"}}
                            onChangeText={props.handleChange('info')}
                            onBlur={props.handleBlur('info')}
                            placeholder="Enter Event Information"
                        />
                        <Text >{props.touched.info && props.errors.info}</Text>
                        <TextInput style={{borderColor: "grey", borderWidth:1, height:40, padding: 10, fontWeight: "bold"}}
                            onChangeText={props.handleChange('rating')}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                            placeholder="Give Event Rating"
                        />
                        <Text >{props.touched.rating && props.errors.rating}</Text>
                        <Button title='Add Event' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}