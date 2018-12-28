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
    ActivityIndicator,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class ActivityIndicator9 extends Component<Props> {
    constructor(props) 
    {
        super(props);
        this.state = 
        {
              animating:true,
              switchstate:true
        };
    }

    render() {
        return (
        <View style={styles.container}>

          <ActivityIndicator
          // 是否要显示指示器
          animating={this.state.animating}
          // 滚轮的前景颜色
          color="yellow"
          // 在没有动画的时候，是否要隐藏指示器
          ioshidesWhenStopped={true}
          // 指示器的大小
          size="small"

          style={[styles.centering, {height: 80,backgroundColor:"red"}]}
          />

          <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering, {height: 80,backgroundColor:"blue"}]}
          size="large"
          />

          <Switch tintColor={'yellow'} onTintColor={'blue'} value={this.state.switchstate}onValueChange={(value)=>this.click(value)}/>
        </View>
         
    );
    }

    click(value){
        console.log(value.toString());
        if (value){
            AlertIOS.alert(value.toString());
        }
        this.setState({
          animating:!this.state.animating,
          switchstate:!this.state.switchstate
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
    centering:{
      marginTop:10,
      
    }

})


