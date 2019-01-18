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
    TextInput,
    Keyboard,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class KeyboardTest extends Component<Props> {

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
            <TextInput

             //把弹出的键盘收回去，同时使当前的文本框失去焦点。
            onSubmitEditing={Keyboard.dismiss}
            style={styles.inputStyle}
                
            />
        </View>
    );
    }


    componentDidMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);

        // "keyboardWillShow"
        // "keyboardDidShow"
        // 'keyboardWillHide'
        // 'keyboardDidHide'
        // 'keyboardWillChangeFrame'
        // 'keyboardDidChangeFrame'
      }
    
      componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }


      _keyboardDidShow () {
        console.log('Keyboard Shown');
      }
    
      _keyboardDidHide () {
        console.log('Keyboard Hidden');
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
    inputStyle:{
        width:300,
        height:50,
        borderWidth:1,   //外边距的宽度
        borderColor:"#dddddd",  //外边距的颜色
        margin:10,
        // borderRadius:10,  //设置圆角的效果
        borderLeftWidth:4,
        borderTopRightRadius:20,

        shadowColor:'#0000ff',//设置一个阴影的颜色
        shadowOpacity: 0.5 ,//阴影的透明度  0~1
        shadowRadius:3 ,//阴影的扩散程度
        shadowOffset:{
            height:1,
            width:1
        }//阴影的偏移量
        
    }

})


