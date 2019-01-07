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
    Slider,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class Slidetest extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
              value:0
        };
    }

    render() {
        return (
        <View style={styles.container}>
        <Slider 
        style={styles.sliderStyle}
    // 如果为true，用户就不能移动滑块。默认为false
        disabled={false}
    // 滑块的初始值。这个值应该在最小值和最大值之间。默认值是0
        value={this.state.value}
    // 在用户拖动滑块的过程中不断调用此回调
        onValueChange={(value)=>{this.change(value)}}
    // 滑块的最大值
        maximumValue={100}
    // 滑块的最小值（当滑块滑到最左端时表示的值）
        minimumValue={20}
    // 用户松开滑块的时候调用此回调
        onSlidingComplete={(value)=>{this.complete(value)}}

    // 滑块的步长
        step={2}
    // 滑块左侧轨道的颜色
        // minimumTrackTintColor={"red"}
    // 滑块右侧轨道的颜色
        // maximumTrackTintColor={"blue"}

    // Used to locate this view in UI automation tests.
        testID={"001"}
    // 滑块的颜色(Android)
        thumbTintColor={"yellow"}
    // 指定一个滑块右侧轨道背景图
        maximumTrackImage={require('./Source/img/icon3.png')}
    // 指定一个滑块左侧轨道背景图
        minimumTrackImage={require('./Source/img/icon7.png')}


        >


        </Slider>
        <Text>{this.state.value}</Text>

        </View>
    );
    }

    change(value){
        this.setState({
            value:value
        })
    }

    complete(value){
        AlertIOS.alert(value.toString())
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
    sliderStyle:{
        width:375,
        height:10,
    }

})


