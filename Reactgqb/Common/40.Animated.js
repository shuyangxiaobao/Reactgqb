
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
    Animated,
    Easing,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class AnimatedTest extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
            fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
            height: new Animated.Value(0),
        };
    }
    componentDidMount() {
        this.demo1();
      }


        demo1(){
            Animated.timing(                  // 随时间变化而执行动画
                this.state.height,
                {
                    toValue:300,
                    duration:5000,
            // 开始动画前的延迟时间
                    delay:3000,
            // linear(匀速)  ease(先慢后快)  quad() cubic()
                    easing: Easing.bezier[0,1], 
                    useNativeDriver:true,
                },
                ).start()
                                        // 开始执行动画
        }

        demo2(){
            Animated.decay(                  // 随时间变化而执行动画
                this.state.height,
                {
                    toValue:667,
                    duration:6000,
                    velocity:0.1,
                    deceleration:0.9999,
                }

                ).start();                        // 开始执行动画
        }


        easingfun(){
            console.log('212');
        }


    
      render() {    
        return (

            <View style={styles.container}>
                    <Animated.View                 // 使用专门的可动画化的View组件
                    style={{
                    //   ...this.props.style,
                    // opacity: this.state.fadeAnim,   
                    backgroundColor:"red",
                    // flex:1,
                    alignItems:'center',
                    justifyContent:"center",
                    flexDirection:"column",     // 将透明度指定为动画变量值
                    width:100,
                    marginTop:20,
                    height:this.state.height,
                    }}
                >
                <Text> 34534 </Text>
                    {this.props.children}
                </Animated.View>

            </View>
        
        );
      }

    }



const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:'center',
        justifyContent:"flex-end",
        flexDirection:"column",
        marginBottom:20,
    },

})


