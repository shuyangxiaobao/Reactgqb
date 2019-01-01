/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';



// import IOSView from './IOSView'
import SecondView from "./SecondView"

export default class FirstView extends Component {
    // 构造函数
    constructor(props){
        super(props);
        this.state={
            userName:null
        }
    }

    render() {
        return (
            
           <View style={styles.container}>
               {/*导航条*/}
               <View style={styles.navStyle}>
                   {/*导航条中间的文字*/}
                   <Text>{this.props.title+'名字是'+ this.state.userName +this.props.name}</Text>

               </View>
               <TouchableOpacity
                onPress={()=>this.viewClick()}   //ES6 箭头函数写法
                // onPress={this.viewClick.bind(this)}    //动态绑定
        // onPress={()=>this.myClick(this.props.name)}

               >
                    <Text>{this.props.title} + {this.props.name}</Text>

               </TouchableOpacity>
               <Text>                    </Text>
               <Text>                    </Text>
               <Text>                    </Text>


            <TouchableOpacity
                onPress={()=>this.yuanshengClick()} >
                    <Text>
                        加载原生组件
                    </Text>

            </TouchableOpacity>

           </View>
        );
    }

    yuanshengClick(){
        // this.props.nav.push({
        //     component:IOSView,
        //     name:"顺传数值",
        //     params:{
        //         title:'001',
        //         //从第二个页面获取userName
        //         getUserName:function (user) {
        //             this.setState({
        //                 userName:user
        //             })
        //         }.bind(this),
        //         // name:"第二个name",

        //     }
        // })
    }


    myClick(title){
        AlertIOS.alert(title);
    }

    viewClick(){
        //props 属性!!! 这个属性是你这个对象创建的时候定义的!!!
        this.props.nav.push({
            component:SecondView,
            name:"顺传数值",
            params:{
               title:'这是多参数传值',
                //从第二个页面获取userName
                getUserName:function (user) {
                    this.setState({
                        userName:user
                    })
                }.bind(this),
                // name:"第二个name",

            }
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    navStyle:{
        position:'absolute',
        top:0,
        width:375,
        height:64,
        backgroundColor:'#dddddd',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'rgba(1,1,1,1)',
        paddingTop:20,

    }
});
