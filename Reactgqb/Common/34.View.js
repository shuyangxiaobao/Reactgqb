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
export default class ViewTest extends Component<Props> {

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
            <View
            style={{
              flexDirection: "row",
              height: 100,
              padding: 20,
              backgroundColor:"yellow"
            }}
    // 设置这个视图是否要响应 touch start 事件。
            onStartShouldSetResponder={this._onStartShouldSetResponder}
    // 定义触摸事件在距离视图多远以内时可以触发的。典型的接口规范建议触摸目标至少要 30-40 点/密度-独立像素。
            hitSlop={{top: 10, bottom: 100, left: 0, right: 0}}
    // 用来从原生类定位这个视图
            nativeID={"001"}
    // 当组件挂载或者布局变化的时候调用，参数为：:{nativeEvent: { layout: {x, y, width, height}}}
            onLayout={(event)=>this.onLayout(event)}

    // 当 accessible 为 true 时，如果用户做了一个双指轻触(Magic tap)手势，系统会调用此函数。
            accessible={true}
            onMagicTap={this.onMagicTap}
    // 滑动的时候触发
            onMoveShouldSetResponder={(event)=>{this.onMoveShouldSetResponder(event)}}
    // 如果父视图想要阻止子视图响应 touch move 事件时，它就应该设置这个方法并返回 true
    // true  onMoveShouldSetResponder 不响应  onResponderGrant 响应
    // false  onMoveShouldSetResponder 响应  onResponderGrant 不响应
            onMoveShouldSetResponderCapture={(event)=>this._onMoveShouldSetResponderCapture(event)}
    // 当用户正在屏幕上移动手指时调用这个函数(每次触摸调用一次)
            onResponderGrant={(event)=>{this.onResponderGrant(event)}}
    // 有一个响应器正处于活跃状态，并且不会向另一个要求响应这个事件的视图释放这个事件。
            onResponderReject={(event)=>{this.onResponderReject(event)}}
    // 在整个触摸事件结束时调用这个函数。
            onResponderRelease={this._onResponderRelease}

    // 如果父视图想要阻止子视图响应 touch start 事件，它就应该设置这个方法并返回 true。
            onStartShouldSetResponderCapture={this._onStartShouldSetResponderCapture}
    // 用于控制当前视图是否可以作为触控事件的目标。
        // auto：视图可以作为触控事件的目标。
        // none：视图不能作为触控事件的目标。
        // box-none：视图自身不能作为触控事件的目标，但其子视图可以。类似于你在 CSS 中这样设置:
            pointerEvents={"auto"}

            removeClippedSubviews={true}
            // 用来在端到端测试中定位这个视图
            testID={"id001"}

          >
            <View style={{ backgroundColor: "blue", flex:1 }} />
            <View style={{ backgroundColor: "red", flex:3}}
            onMoveShouldSetResponder={(event)=>{this.subonMoveShouldSetResponder(event)}}/>
            <Text>Hello World23!</Text>
          </View>
    );
    }


    _onStartShouldSetResponder(){
        AlertIOS.alert("onStartShouldSetResponder来了")
    }

    onLayout(event){
        console.log(event);
        AlertIOS.alert("_onLayout来了")
    }

    onMagicTap(){
        AlertIOS.alert("onMagicTap来了")
    }



    onMoveShouldSetResponder(){
        console.log("onMoveShouldSetResponder来了")
    }

    subonMoveShouldSetResponder(){
        console.log("subonMoveShouldSetResponder来了")
 
    }

    _onMoveShouldSetResponderCapture(event){
        // console.log(event);
        // console.log("0000");
        return true;
    }

    onResponderGrant(){
        console.log("onResponderGrant来了");
        // AlertIOS.alert("onResponderGrant来了")
    }


    onResponderReject(event){
        // console.log("onResponderReject来了");
    }

    _onResponderRelease(){
         AlertIOS.alert("_onResponderRelease来了") 
    }

    _onStartShouldSetResponderCapture(){
        return false;
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


