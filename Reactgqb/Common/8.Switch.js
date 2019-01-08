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
          <Switch 
        //  如果为true则禁用此组件的交互
          disabled={false}
        //   关闭状态时的边框颜色(iOS)或背景颜色(Android)。
            tintColor={'yellow'} 
        //   开启状态时的背景颜色
            onTintColor={'blue'} 
        // 背景色
            ios_backgroundColor={"purple"}
        // 表示此开关是否打开。默认为false（关闭状态）
            value={this.state.switchstate}
        //   开关上圆形按钮的背景颜色
            thumbColor={"red"}
        //   当值改变的时候调用此回调函数，参数为新的值
          onValueChange={(value)=>this.click(value)}/>
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


