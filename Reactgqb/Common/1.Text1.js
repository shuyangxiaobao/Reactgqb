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
              switchstate:true
        };
    }

    render() {
        return (
           <View style={stylesxlp.container}>
                <Text style={stylesxlp.textStyle}

            // 决定用户是否可以长按选择文本，以便复制和粘贴
                selectable={true}
                accessibilityHint={"235"}

                accessibilityLabel={"hahha"}

                accessible={false}

            //head - 从文本内容头部截取显示省略号。例如： "...efg"
            // middle - 在文本内容中间截取显示省略号。例如： "ab...yz"
            // tail - 从文本内容尾部截取显示省略号。例如： "abcd..."
            // clip - 不显示省略号，直接从尾部截断。
                ellipsizeMode={"clip"}
                numberOfLines={2}

                nativeID={"test"}
                onLayout={()=>{this.onMyLayout}}
            // 当文本被长按以后调用此回调函数
                onLongPress={()=>{this.click("长按")}}
            // 当文本被点击以后调用此回调函数。
                onPress={()=>{this.click("点击")}}

                pressRetentionOffset={{top:30,left:100,bottom:400,right:300}}
            // 控制字体是否要根据系统的“字体大小”辅助选项来进行缩放。默认值为true。
                allowFontScaling={false}

                testID={"id"}

                disabled={false}

            // Android
                selectionColor={"purple"}

            // iOS 指定字体是否随着给定样式的限制而自动缩放。
                adjustsFontSizeToFit={true}
                minimumFontScale={0.02}
            // 设为true时，当文本被按下会没有任何视觉效果。默认情况下，文本被按下时会有一个灰色的、椭圆形的高光。
                suppressHighlighting={false}
                >1234567abcdefgfYYjkjUIII888jjjJJJ 

                </Text>
             </View>
    );
    }

    onMyLayout(){
        AlertIOS.alert("123");
    }

    click(value){
        console.log(value.toString());
        if (value){
            AlertIOS.alert(value.toString());
        }
        this.setState({
            switchstate:value
        })
    }





}


const stylesxlp = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        // alignItems:'center',
        justifyContent:"center",
        flexDirection:"column",
    },
    // 设置文字居中的三种方式

//1.外面包装一层view，来使里面的文字居中对齐。
      viewStyle:{
        // backgroundColor:"orange",
        // height:200,
        // padding:20,
        // flexDirection:"column",
        // justifyContent:"center",
        // alignItems:"center",
    },
    textStyle:{
        backgroundColor:'white',
        flexWrap:"wrap",
        padding:20,
        fontSize: 20,   //字体大小
    //字体粗细 ('normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
        fontWeight:"bold", 
        color:"orange",  //字体颜色
        fontStyle:"italic",  //  字体样式 normal, italic(斜体)
        //ying yin
        textShadowOffset:{width: 2,height: 3},
        textAlign:"center",    //('auto', 'left', 'right', 'center', 'justify')
    // ('none', 'underline', 'line-through', 'underline line-through')
        textDecorationLine:"underline line-through",

        textDecorationColor:"blue",     //下划线颜色

        letterSpacing:5,// 每个字的间隔

    // ('none', 'uppercase'(大写), 'lowercase'（小写）, 'capitalize'（第一个字母大写，后面小写）)
        textTransform:"capitalize",
    // enum('auto', 'ltr', 'rtl') (iOS)
        writingDirection:"ltr",

        textShadowColor:"red",
        // fontFamily:"fhj",
    // 阴影模糊程度
        textShadowRadius:3,

// 方式2 行高居中
        // lineHeight:50,  //行高
        // height:50,

// 方式3.设置上下边距使其居中
        paddingTop:20,
        paddingBottom:20,




    }

})


// 主轴方向 flexDirection: column    column-reverse  row   row-reversr
// 侧轴对齐方式  alignItems: baseline center flex-end flex-start stretch

