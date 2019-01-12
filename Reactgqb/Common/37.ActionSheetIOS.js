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
    ActionSheetIOS,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class ActionSheetIOSTest extends Component<Props> {

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
        <View style={styles.container}
        onStartShouldSetResponder={this._onStartShouldSetResponder}

        >

        </View>
    );
    }

    _onStartShouldSetResponder(){


        ActionSheetIOS.showActionSheetWithOptions({

    // options （字符串数组） - 一组按钮的文字（必选）
            options:[
                '拨打电话',
                '发送邮件',
                '发送短信',
                '取消'
            ],

    // cancelButtonIndex （整型） - 取消性质的按钮在options中的位置（索引）
            cancelButtonIndex: 3,
    // destructiveButtonIndex （整型） - 删除性质的按钮在options中的位置（索引）
            destructiveButtonIndex: 1,
    // 弹出框顶部的标题
            title:"title",
    // 弹出框顶部标题下方的信息
            message:"message",
    // 按钮的文字的颜色
            tintColor:"orange",
        },
            (index)=>{
            alert('您点击了:' + index);
            }
        );



        ActionSheetIOS.showShareActionSheetWithOptions({
            url: 'http://www.baidu.com',
            message:"message",
            subject:"主题",
            excludedActivityTypes:["1","2","3"]
          },function(error){
            alert("error")
          },function(e){
            alert(e);
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

})


