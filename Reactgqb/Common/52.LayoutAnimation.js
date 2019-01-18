// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {
//     Platform, 
//     StyleSheet, 
//     Text, 
//     View,
//     AlertIOS,
//     LayoutAnimation,
// } from 'react-native';



// type Props = {};
// var Dimensions = require('Dimensions');
// var width = Dimensions.get('window').width;
// export default class LayoutAnimationTest extends Component<Props> {

//     constructor(props) 
//     {
//         super(props);
//         this.state = 
//         {
//               switchstate:true
//         };
//     }

//     render() {
//         return (
//         <View style={styles.container}>

//         </View>
//     );
//     }
// }


// const styles = StyleSheet.create({
//     container:{
//         backgroundColor:"#dddddd",
//         flex:1,
//         alignItems:'center',
//         justifyContent:"center",
//         flexDirection:"column",
//     },

// })











'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    LayoutAnimation,
    Platform,
    UIManager,
}from 'react-native';

//自定义动画
var CustomLayoutAnimation={
    duration:3000,//动画执行的时间 毫秒
    create:{//布局创建时的动画
        type:LayoutAnimation.Types.easeIn,//动画类型(主要涉及:spring,linear,easeInEaseOut,easeIn,easeOut,keyboard)
        property:LayoutAnimation.Properties.scaleY,//动画作用的元素属性(主要涉及:opacity,scaleXY,scaleX,scaleY)
    },
    update:{//布局更新时的动画
        type:LayoutAnimation.Types.linear,//动画类型
        property:LayoutAnimation.Properties.scaleXY,//动画作用的元素属性
    }
};

export default class LayoutAnimationDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        if (Platform.OS == 'android') {//android平台需要开启允许LayoutAnimation ios默认开启
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        // 初始状态
        this.state = {
            views: [],
            index:0,
        };
    }

    //布局更新时执行
    componentWillUpdate() {

var index = this.state.index;
index = 2;

switch(index%3){
    case 0:
    LayoutAnimation.easeInEaseOut();
    break;
    case 1:
    LayoutAnimation.linear();
    break;
    case 2:
    //执行自定义LayoutAnimation动画    
    LayoutAnimation.configureNext(CustomLayoutAnimation);
    break;
    case 3:
    LayoutAnimation.easeInEaseOut();
    break;
    case 4:
    LayoutAnimation.easeInEaseOut();
    break;
    case 5:
    LayoutAnimation.easeInEaseOut();
    break;

}

        // LayoutAnimation.linear();//每次组件更新前，执行LayoutAnimation动画
        // LayoutAnimation.configureNext(CustomLayoutAnimation);//执行自定义LayoutAnimation动画

        // LayoutAnimation.easeInEaseOut();
        // LayoutAnimation.linear();

        // LayoutAnimation.configureNext({duration:300,create:{//布局创建时的动画
        //     type:LayoutAnimation.Types.spring,
        //     property:LayoutAnimation.Properties.opacity,//动画作用的元素属性(主要涉及:opacity,scaleXY)
        
        // }},()=>{
        //     console.log("1111");
        // })
    }

    _configureNext(){

    }


    //添加一张图片
    _addImg() {
        var index = this.state.index + 1;
        this.setState({
            index:index,
        })
        //LayoutAnimation.easeInEaseOut();//在setState()前，添加LayoutAnimation动画方法
        this.setState({views: [...this.state.views, {}]});//往数组中加入一个空对象
    }

    //移除最后一张图片
    _removeImg() {

        var index = this.state.index + 1;
        this.setState({
            index:index,
        })
        //LayoutAnimation.easeInEaseOut();//在setState()前，添加LayoutAnimation动画方法
        this.setState({views: this.state.views.slice(0, -1)});//移除views数组中最后一个对象
    }

    render() {
        // const views = this.state.views.map((view, i)=> {
        //     return (
        //         <Image key={i} source={require('./Source/img/icon3.png')} style={styles.image}
        //         />
        //     );
        // });//将this.state.views数组中的每个元素映射成一个<Image/>组件

        const views = [];
        for(var i = 0;i<this.state.views.length;i++){
            views.push(
                <Image key={i} source={require('./Source/img/icon3.png')} style={styles.image}
                />
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.buttonLinear}>
                    <TouchableHighlight style={styles.button} underlayColor={"#eeeeee"}
                                        onPress={this._addImg.bind(this)}>
                        <Text style={styles.buttonText}>add</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} underlayColor={"#eeeeee"}
                                        onPress={this._removeImg.bind(this)}>
                        <Text style={styles.buttonText}>remove</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.viewContainer}>
                    {views}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    buttonLinear: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-around'
    },
    button: {
        borderRadius: 5,
        backgroundColor: "#eeeeee",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonText: {
        fontSize: 16,
    },
    image: {
        width: 50,
        height: 50,
        margin: 1,
    },
    viewContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
    }
})


