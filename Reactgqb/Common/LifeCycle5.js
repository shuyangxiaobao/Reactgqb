import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
    TouchableOpacity,
    Button,
} from 'react-native';

class LifeCycle5 extends React.Component{

    // this.state={
    //     title:"HHHH"
    // }
    constructor(props){
        super(props);
        this.state={
            title:"HHHH"
        }
    }
    render() {
        // AlertIOS.alert("render")
        console.log("render 2");
        return (            
           <View style={styles.container}> 
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>this.click('点击')}>
                    <Text style={styles.textStyle}>{this.state.title}</Text>
                </TouchableOpacity>
           </View>
        );    
   } // 注意这里既没有分号也没有逗号 }

    getDefaultProps(){
        console.log("getDefaultProps");

        // AlertIOS.alert("getDefaultProps 来了1")
    }

    // 在组件创建，并初始化了状态之后，在第一次绘制 render() 之前。
    // 在整个生命周期中只被调用一次
    componentWillMount(){
        console.log("componentWillMount 来了1");
        // AlertIOS.alert("componentWillMount 来了1")
    }
// 在组件第一次绘制之后调用 通知组件已经加载完成
    componentDidMount(){
        console.log("componentDidMount 来了3");
        // AlertIOS.alert("componentDidMount 来了2")
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps 来了4")
        // AlertIOS.alert("componentWillReceiveProps 来了3")
    }

    //这个方法!!刷新UI之后调用!!!第一次加载UI不会来!!
    componentDidUpdate(){
        console.log('DidUpdate');
        // AlertIOS.alert('DidUpdate');
    }

    // 当组件接收到新的属性和状态改变的话 组件是否需要更新
    shouldComponentUpdate(){
        return true;
        // AlertIOS.alert("shouldComponentUpdate");
    }

    click(event){
        this.setState({
            title:event,
            haha:event
        })
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    }
});

//输出一个类
module.exports = LifeCycle5;