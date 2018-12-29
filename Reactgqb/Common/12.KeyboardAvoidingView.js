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
    SegmentedControlIOS,
    TouchableOpacity,
    Button,
} from 'react-native';

// 本组件可以自动根据键盘的位置，调整自身的position或底部的padding，以避免被遮挡

type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class KeyboardAvoidingView12 extends Component<Props> {
    constructor(props) 
    {
        super(props);
        this.state = 
        {
              animating:true,
              switchstate:true,
              buttonTitle:1,
              date:new Date(),
              data:"12233",
              buttonTitle:1,

        };
    }

    render() {
        return (
        <View style={styles.container}>  
            <KeyboardAvoidingView behavior="padding"
            style={styles.KeyboardAvoidingViewStyle}>
                <TextInput
                value={this.state.data}
                style={styles.textInput}
                onChangeText={this.handleChangeData.bind(this)}
                />
            </KeyboardAvoidingView> 
        </View>


        );
    }
    myDateChange(date){
        AlertIOS.alert(date)
    }

    handleChangeData(value){
        AlertIOS.alert(value.toString());
        this.setState({
            data:value
        })
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:'center',
        justifyContent:"flex-end",
        flexDirection:"column",
    },
    textInput:{
    marginTop:20,
        width:375,
        height:60,
        backgroundColor:'gray',
        //边框
        borderWidth:1,
        borderColor:'#dddddd',
    },
    textInputContainer:{
        flex:1,
        backgroundColor:"red",
    },
    KeyboardAvoidingViewStyle:{
        marginBottom:100,
        backgroundColor:"yellow",
        
    }
})


