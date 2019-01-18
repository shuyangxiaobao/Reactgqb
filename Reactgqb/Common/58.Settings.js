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
    Settings,
    Button,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class SettingsTest extends Component<Props> {

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
         title ={"Settings.get"}
         color = {"#555555"}
         onPress={this._get}
         />

        <Button
         title ={"Settings.set"}
         color = {"#555555"}
         onPress={this._set}
         />

        <Button
         title ={"Settings.watchKeys"}
         color = {"#555555"}
         onPress={this._watchKeys}
         />

        <Button
         title ={"Settings.clearWatch"}
         color = {"#555555"}
         onPress={this._clearWatch}
         />


        <Button
         title ={"changeValue"}
         color = {"#555555"}
         onPress={this._changeValue}
         />



        </View>
    );
    }


    _get = ()=>{
       var str =  Settings.get("suneee");
       alert(str);
    }
    _set = ()=>{
        Settings.set({"suneee":"123456"});
    }

    _watchKeys = ()=>{
        Settings.watchKeys(["suneee"],()=>{
            alert(result.toString());
        })
    }


    _clearWatch = ()=>{
        Settings.clearWatch("suneee");
    }

    _changeValue = ()=>{
        Settings.set({"suneee":"change new"});
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


