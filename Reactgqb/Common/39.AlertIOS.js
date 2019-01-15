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
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class AlertIOSTest extends Component<Props> {

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
        <View style={styles.container}
        // onStartShouldSetResponder={this._onStartShouldSetResponder.bind(this)}

        onStartShouldSetResponder={()=>{this._onStartShouldSetResponder()}}

        >
 {/* // 设置这个视图是否要响应 touch start 事件。 */}
        </View>
    );
    }

    _onStartShouldSetResponder(){
        console.log()
        // this._demo1();
        this._demo2();
  
    }

// 使用方式1
    _demo1(){
        AlertIOS.alert(
            "Update available",
            "Keep your app up to date to enjoy the latest features",
            [
              {
                text: "Cancel",
                onPress: () => {this._cancelClick()},
                style: "cancel"
              },
              {
                text: "Install",
                onPress: () => {this._install("install")}
              }
            ]
          );
    }

    _cancelClick(){
        AlertIOS.alert("Cancel");
    }
    _install(value){
        AlertIOS.alert(value);
    }



// 使用方式2
    _demo2(){
        AlertIOS.prompt(
        'Enter a value',
        null,
        text => {this.click2(text)}
        );
    }

    click2(value){
        AlertIOS.alert(value);
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


