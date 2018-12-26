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

type
Props = {};
export default class App extends Component < Props > {
    render() {
        return (
            // <Text1/>
            // <Image2/>
            // <TextInput3/>
            // <TouchableOpacity4/>
            <LifeCycle5/>

    )
        ;
    }
}


// cnpm install --save react react-dom
