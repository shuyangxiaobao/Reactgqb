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
    Picker,
} from 'react-native';


type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class Text1 extends Component<Props> {


    constructor(props) 
    {
        super(props);
        this.state = 
        {
            language:"ios"
        };
    }

    render() {
        return (
           <View style={styles.container}>
            <Picker
                // 默认选中的值。可以是字符串或整数。
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 100}}

                // 某一项被选中时执行此回调。调用时带有如下参数
                    onValueChange={(itemValue, itemIndex)=> this.onValueChange(itemValue,itemIndex)}
                // 用于在端对端测试中定位此视图
                    testID="002"

                // 如果设为false，则会禁用此选择器。Android
                    enabled={false}

                // 在Android上，可以指定在用户点击选择器时，以怎样的形式呈现选项：
                //'dialog': 显示一个模态对话框。默认选项。
                // 'dropdown': 以选择器所在位置为锚点展开一个下拉框。
                    mode={"dialog"}

                // 设置选择器的提示字符串。在Android的对话框模式中用作对话框的标题
                    prompt={"我是提示字符串"}
                // 每项标签上的样式
                    itemStyle={{color:"red",fontSize:15}}
                    >

                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="IOS" value="ios" />

                </Picker>
            </View>
    );
    }

    onValueChange(itemValue, itemIndex){
        AlertIOS.alert(itemIndex.toString() + ":" + itemValue.toString());
        this.setState({
            language: itemValue 
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

