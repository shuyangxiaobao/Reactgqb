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
    Switch,
    AlertIOS,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class SWitch8 extends Component<Props> {


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
           <View style={stylesxlp.container}>
          <Switch  disabled={true}/>
          <Switch tintColor={'yellow'} onTintColor={'blue'} value={this.state.switchstate}onValueChange={(value)=>this.click(value)}/>
         </View>
    );
    }

    click(value){
        console.log(value.toString());
        if (value){
            AlertIOS.alert(value.toString());
        }
        this.setState({
            switchstate:value
        })
    }





}


const stylesxlp = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        flexDirection:"column",
    },

})


