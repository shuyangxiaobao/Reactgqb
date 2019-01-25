/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    AlertIOS,
    Button,
} from 'react-native';

import {NativeModules} from 'react-native';

var manager = NativeModules.RCTModules;

type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class Text1 extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
              switchstate:true
        };
    }

    render() {
        return (
        <View style={styles.container}>
            <Button
            onPress={()=>this.buttonClick()}
            title={"跳转到原生页面"}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
    }


    buttonClick(){
        alert("000");
        manager.RNOpenFaceRegister('我来了!!!');

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

})


