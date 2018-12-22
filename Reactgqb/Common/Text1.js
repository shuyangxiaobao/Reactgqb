/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class Text1 extends Component<Props> {
    render() {
        return (
           <View style={stylesxlp.container}>
                <View style={stylesxlp.viewStyle}>
                <Text style={stylesxlp.textStyle}>12345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345 </Text>
                {/* <Text>一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五</Text> */}
                </View>
             </View>
    );
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
    // 设置文字居中的三种方式

//1.外面包装一层view，来使里面的文字居中对齐。
      viewStyle:{
        // backgroundColor:"orange",
        // height:200,
        // padding:20,
        // flexDirection:"column",
        // justifyContent:"center",
        // alignItems:"center",
    },
    textStyle:{
        backgroundColor:'red',
        flexWrap:"wrap",
        padding:20,

// 方式2 行高居中
        // lineHeight:50,
        // height:50,

// 方式3.设置上下边距使其居中
        paddingTop:20,
        paddingBottom:20,
    }

})


// 主轴方向 flexDirection: column    column-reverse  row   row-reversr
// 侧轴对齐方式  alignItems: baseline center flex-end flex-start stretch

