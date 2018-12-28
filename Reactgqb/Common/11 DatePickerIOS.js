/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    Switch,
    AlertIOS,
    ActivityIndicator,
    Button,
    DatePickerIOS,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class DatePickerIOS11 extends Component<Props> {
    constructor(props) 
    {
        super(props);
        this.state = 
        {
              animating:true,
              switchstate:true,
              buttonTitle:1,
              date:new Date()
        };
    }

    render() {
        return (
        <View style={styles.container}>    
        <Text>001</Text>      
          <DatePickerIOS
        //   当前被选中的日期。
           date={this.state.date}
        //    可选的最小的分钟单位。
           minuteInterval={1}
        //    选择器模式 date:年月日     time：时分    datetime：
           mode="date"
           style={styles.dataPickStyle}
          />
        <Text>002</Text>      

        <DatePickerIOS
        //   当前被选中的日期。
           date={this.state.date}
        //    可选的最小的分钟单位。
           minuteInterval={1}
        //    选择器模式 date:年月日     time：时分    datetime：星期 月 日 时 分 上午/下午
           mode="datetime"
           style={styles.dataPickStyle}
          />
        <Text>003</Text>      

        <DatePickerIOS
        //   当前被选中的日期。
           date={this.state.date}
        //    可选的最小的分钟单位。
           minuteInterval={11}
        //    选择器模式 date:年月日     time：时分    datetime：
           mode="time"
           style={styles.dataPickStyle}
        //    当用户修改日期或时间时调用此回调函数。 唯一的参数是一个日期对象，表示新的日期和时间。
           onDateChange={this.myDateChange}
        //    时区差，单位是分钟
           timeZoneOffsetInMinutes={25}
          />                
          
        </View>
        );
    }
    myDateChange(date){
        // AlertIOS.alert("002")
        AlertIOS.alert(date)
    }

    // onPressLearnMore(){
    //     // AlertIOS.alert("12345");
    //     this.setState({
    //       animating:!this.state.animating,
    //       switchstate:!this.state.switchstate,
    //       buttonTitle:this.state.buttonTitle + 1
    //     })
    // }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dddddd",
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        flexDirection:"column",
    },
    dataPickStyle:{
        marginTop:10,
        width:375,
        height:200,
        backgroundColor:"red",
    }

})


