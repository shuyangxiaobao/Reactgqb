// 除非你有一个很好的理由，否则不要用这个组件。所有能够响应触屏操作的元素在触屏后都应该有一个视觉上的反馈（然而本组件没有任何视觉反馈），这也是为什么一个"web"应用总是显得不够"原生"的主要原因之一。

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
export default class TouchableNativeFeedbacktest extends Component<Props> {

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

        </View>
    );
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


