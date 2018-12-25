import React, {Component} from 'react';
import {
    APPRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
} from "react-native";
Props = {};

export default class TextInput3 extends Component<Props> {
    render(){
        return (
            <View style={styles.container}>
            <TextInput
            style={styles.inputStyle}
            // value={'我是默认文字'}
            placeholder={'我是占位的'}
            password={true}
            clearButtonMode={'always'}
            />

            <TextInput
            style={styles.inputStyle}
            // value={'我是默认文字'}
            placeholder={'我是占位的'}
            clearButtonMode={"always"}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        
    },
    inputStyle:{
        width:100,
        height:50,
        borderWidth:1,   //外边距的宽度
        borderColor:"#dddddd",  //外边距的颜色
        
        margin:10,
        borderRadius:10,  //设置圆角的效果
        shadowColor:'#0000ff',//设置一个阴影的颜色
        shadowOpacity: 0.5 ,//阴影的透明度  0~1
        shadowRadius:3 ,//阴影的扩散程度
        shadowOffset:{
            height:1,
            width:1
        }//阴影的偏移量

    }
})

