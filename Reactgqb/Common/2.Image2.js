/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
    StyleSheet, 
    Text, 
    View,
    Image,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class Text1 extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    加载项目中的图片
                </Text>
                <View style={styles.imagesStyle}>
                    <Image 
                    source={require('./Source/img/icon3.png')} 
                    style={styles.imgeStyle}
                    ></Image>
                    <Image source={require('./Source/img/icon7.png')}
                    style={styles.imgeStyle}></Image>
                </View>

                <Text>
                    加载APP中的图片
                </Text>
                <Image source={{uri:"icon"}} style={styles.imgeStyle}>
                </Image>
               
                <Text>
                    加载网络上的图片
                </Text>

                <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490198964612&di=4437ef95ce00e4b4c5628eb4496c0099&imgtype=0&src=http%3A%2F%2Fv1.qzone.cc%2Favatar%2F201408%2F03%2F23%2F44%2F53de58e5da74c247.jpg%2521200x200.jpg'}} style={styles.imge1Stye}>
                    {/* <Text style={styles.textStyle}>
                        设置图片为背景
                    </Text> */}
                </Image>
            </View>
    );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    imgeStyle:{
        width:100,
        height:100,
        //      resizeMode:'cover',
        resizeMode:'contain', //'cover', 'contain', 'stretch', 'repeat', 'center'
        margin:50,
        borderWidth:5,  // 边框宽度
        borderColor:"red",  //边框颜色
        borderTopRightRadius:10,
        borderRadius:40,  //边框圆角
        backgroundColor:"blue",   //背景色
        borderTopRightRadius:5, 
        backfaceVisibility:"visible",
        // tintColor:"yellow", //为所有非透明的像素指定一个颜色。
        opacity:0.5,  //透明度
        overflow:"scroll",

    },
    imagesStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    imge1Stye:{
        width:300,
        height:200,

    },
    textStyle:{
        paddingTop:80,
        // backgroundColor:'rgba(0,0,0,0)',
        backgroundColor:'transparent',
    }

});
