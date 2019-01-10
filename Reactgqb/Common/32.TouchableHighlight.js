
// 本组件用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低，同时会有一个底层的颜色透过而被用户看到，使得视图变暗或变亮。

import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    AlertIOS,
    TouchableHighlight,
    Image,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class TouchableHighlightTest extends Component<Props> {

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
            <TouchableHighlight
            onPress={this._onPressButton}
    // 指定封装的视图在被触摸操作激活时以多少不透明度显示
            activeOpacity={0.4}
    // 底层的颜色被隐藏的时候调用。
            onHideUnderlay={this._onHideUnderlay}
    // 当底层的颜色被显示的时候调用
            onShowUnderlay={this._onShowUnderlay}

    // 有触摸操作时显示出来的底层的颜色
            underlayColor={"red"}
            >
                <Image
                style={styles.button}
                source={require("./Source/img/icon3.png")}
                >

                </Image>
                
            </TouchableHighlight>

        </View>
    );
    }

    _onPressButton(){
        console.log('2222---_onPressButton');
        // AlertIOS.alert("value");
    }

    _onHideUnderlay(){
        console.log('33333--底层的颜色被隐藏的时候调用');

        // AlertIOS.alert("底层的颜色被隐藏的时候调用");
    }

    _onShowUnderlay(){
        console.log('111---当底层的颜色被显示的时候调用');
        // AlertIOS.alert("当底层的颜色被显示的时候调用"); 
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
    button:{
        width:100,
        height:100

    }

})


