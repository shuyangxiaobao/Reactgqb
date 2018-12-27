/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
    StyleSheet, 
    Text, 
    View,
    AlertIOS,
} from 'react-native';
import Text1 from "./Common/Text1"
import Image2 from "./Common/Image2"
import TextInput3 from "./Common/TextInput3"
import TouchableOpacity4 from "./Common/TouchableOpacity4"
import LifeCycle5 from "./Common/LifeCycle5"
import ScrollView6 from "./Common/ScrollView6"
import Demo7 from "./Common/7.定时器(无限轮播)"
import Demo8 from "./Common/8.Switch"
// import Demo9 from "./Common/9. ActivityIndicator"

type
Props = {};
export default class App extends Component < Props > {
    render() {
        return (
            // <Text1/>
            // <Image2/>
            // <TextInput3/>
            // <TouchableOpacity4/>
            // <LifeCycle5/>
            // <ScrollView6/>
            // <Demo7/>
            <Demo8/>
            // <Demo9/>


    )
        ;
    }
}


// cnpm install --save react react-dom

// npm i react-timer-mixin --save      安装定时器
