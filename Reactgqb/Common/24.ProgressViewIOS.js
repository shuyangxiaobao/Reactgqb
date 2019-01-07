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
    ProgressViewIOS,
    Button
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class ProgressViewIOStest extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
            progress:0.0,
            buttonTitle:"点我",
        };
    }

    render() {
        return (
           <View style={styles.container}>
                <ProgressViewIOS
                // 当前的进度值
                    progress={this.state.progress}
                // 一个可以拉伸的图片，用于显示进度条()
                    // progressImage={require('./Source/img/icon7.png')}
                // 一个可拉伸的图片，用于显示进度条后面的轨道
                    // trackImage={require('./Source/img/icon3.png')}

                // 进度条的样式
                    progressViewStyle={"bar"}

                // 进度条本身染上的颜色。progressImage 和 progressTintColor 2选1
                    progressTintColor={"red"}
                    trackTintColor={"blue"}

                    style={styles.ProgressViewIOSStyle}
                >
                </ProgressViewIOS>

                <Button
                    onPress={()=>this.onPressLearnMore()}
                    title={this.state.buttonTitle.toString()}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
             </View>
    );
    }


    onPressLearnMore(){
        // AlertIOS.alert("12345");
        var value = this.state.progress;
        if(value > 0.99){
            value = 0
        }
        this.setState({
            progress:value +0.04
        })
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
    ProgressViewIOSStyle:{
        height:50,
        marginLeft:10,
        width:375,
        marginRight:10,

    }

})


