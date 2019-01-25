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
    Vibration,
} from 'react-native';



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
        title = {"震动"}
        onPress = {this._vibrate}
        />

        <Button
        title = {"取消"}
        onPress = {this._cancel}
        />

        </View>
    );
    }


    _vibrate = ()=>{
        // Vibration.vibrate();
        // this.timer = setInterval(()=>{
        //     Vibration.vibrate();
        // },1)

        this.timer = setTimeout(() => {
            Vibration.vibrate(); 
        }, 1);
    }

    _cancel = ()=>{
        Vibration.cancel();
        clearInterval(this.timer);
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


