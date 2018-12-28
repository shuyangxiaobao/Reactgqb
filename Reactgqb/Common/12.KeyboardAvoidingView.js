/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    Switch,
    AlertIOS,
    KeyboardAvoidingView,
    TextInput,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class DatePickerIOS11 extends Component<Props> {
    constructor(props) 
    {
        super(props);
        this.state = 
        {
              animating:true,
              switchstate:true,
              buttonTitle:1,
              date:new Date()
        };
    }

    render() {
        return (
        <View style={styles.container}>    
        <KeyboardAvoidingView>
        <TextInput
              placeholder="<TextInput />"
              style={styles.textInput} /> 
            </KeyboardAvoidingView>             
          
        </View>
        );
    }
    myDateChange(date){
        AlertIOS.alert(date)
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        flexDirection:"column",
    },
    textInput:{
        width:300,
        height:60,
        backgroundColor:'gray',
        //边框
        borderWidth:1,
        borderColor:'#dddddd',
    }
})


