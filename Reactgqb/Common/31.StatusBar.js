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
    StatusBar,
    Button,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class StatusBartest extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
              hiddenStatus:false,
              buttonTitle:"状态栏显示",
              networkStatus:true
        };
    }

    render() {
        return (
        <View style={styles.container}>

<StatusBar
        // 指定状态栏的变化是否应以动画形式呈现
            animated={true}
        // 是否隐藏状态栏
            hidden={this.state.hiddenStatus}
        // Android 状态栏的背景色。
            backgroundColor={"red"}
        // Android 指定状态栏是否透明
            translucent={false}
        // iOS 指定是否显示网络活动提示符
            networkActivityIndicatorVisible={this.state.networkStatus}
        // iOS 通过hidden属性来显示或隐藏状态栏时所使用的动画效果。默认值为'fade'。
            showHideTransition={"fade"}
        // 设置状态栏文本的颜色
            // default(黑色) light-content(白色) dark-content(黑色)
            barStyle={'dark-content'}

            setHidden={(hidden,animation)=>{this.setHiddenStatus(hidden,animation)}}
            >
            </StatusBar>

            <Button
            onPress={()=>this.onPressLearnMore()}
            title={this.state.buttonTitle.toString()}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
            <Button
            onPress={()=>this.networkStatusClick()}
            title={"网络状态"}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />



        </View>
    );
    }


    onPressLearnMore(){
        // AlertIOS.alert("12345");
        this.setState({
            hiddenStatus:!this.state.hiddenStatus,    
        })
    }


    networkStatusClick(){
        // AlertIOS.alert("12345");
        this.setState({
            networkStatus:!this.state.networkStatus,    
        })
    }

    setHiddenStatus(hidden,animation){
        AlertIOS.alert("hidden");
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
