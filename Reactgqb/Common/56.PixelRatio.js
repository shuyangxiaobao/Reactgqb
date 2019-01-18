// PixelRatio 类提供了访问设备的像素密度的方法。

import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    AlertIOS,
    PixelRatio,
    Button,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class PixelRatioTest extends Component<Props> {

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
        >
         <Button
         title ={"PixelRatio.get"}
         color = {"#555555"}
         onPress={this._pixelRatioGet}
         />

        <Button
         title ={"getFontScale"}
         color = {"#555555"}
         onPress={this._getFontScale}
         />

        <Button
         title ={"getPixelSizeForLayoutSize"}
         color = {"#555555"}
         onPress={this._getPixelSizeForLayoutSize}
         />

        <Button
         title ={"roundToNearestPixel"}
         color = {"#555555"}
         onPress={this._roundToNearestPixel}
         />





        </View>
    );
    }


    _pixelRatioGet = ()=>{
     var num =  PixelRatio.get();
     alert(num.toString());
    }

    _getFontScale = ()=>{
        var size = PixelRatio.getFontScale();
        alert(size.toString());

    }


// 将一个布局尺寸(dp)转换为像素尺寸(px)。
// 一定会返回一个整数数值。
    _getPixelSizeForLayoutSize = ()=>{
        var size = PixelRatio.getPixelSizeForLayoutSize(100);
        alert(size.toString());
    }

    _roundToNearestPixel = ()=>{
        var size = PixelRatio.roundToNearestPixel(99.7);
        alert(size.toString());
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


