/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    AlertIOS,
    NativeAppEventEmitter,
} from 'react-native';

var {requireNativeComponent } = require('react-native');
//第一个参数! 名字就是iOS原生的类名!! 那么如果有Manager 那么请去掉!!
// var HKView = requireNativeComponent('HKViewOne',IOSView);

// import {NativeModules} from 'react-native';
// var HKViewOne = NativeModules.HKViewOne;
// HKViewOne.changeTitle('我来了!!!');

var GQBView = requireNativeComponent('ViewOne',IOSView);
import {NativeModules} from 'react-native';
var manager = NativeModules.ViewOne;

// RN 调用原生
manager.changeTitle('我来了!!!');
// manager.ocmethod("1234");

// 原生调用RN
NativeAppEventEmitter.addListener('RNnotfication',(userInfo)=>{
    AlertIOS.alert(userInfo.name);
})

export default class IOSView extends Component {
    render() {
        return (
            // <TouchableOpacity>
                <GQBView
                style={{flex:1}}
                />
            // </TouchableOpacity>
           
        );
    }




    viewClick(){
        //为了严谨起见!!先判断
        if(this.props.getUserName){
            this.props.getUserName('全世界最帅的男人!!')
        }

        //props 属性!!! 这个属性是你这个对象创建的时候定义的!!!
        this.props.nav.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
});
