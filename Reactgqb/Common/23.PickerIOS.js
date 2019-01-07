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
    PickerIOS,
} from 'react-native';


type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class PickerIOStest extends Component<Props> {


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
            <PickerIOS
                // 默认选中的值。可以是字符串或整数。
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 100}}

                // 某一项被选中时执行此回调。调用时带有如下参数
                    onValueChange={(itemValue, itemIndex)=> this.onValueChange(itemValue,itemIndex)}
                // 用于在端对端测试中定位此视图
                    testID="002"
                // 每项标签上的样式
                    itemStyle={{color:"red",fontSize:15}}
                    >
                    <PickerIOS.Item label="Java" value="java" />
                    <PickerIOS.Item label="JavaScript" value="js" />
                    <PickerIOS.Item label="IOS" value="ios" />

                </PickerIOS>
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

