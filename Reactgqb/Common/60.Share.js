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
    Button,
    Share,
} from 'react-native';
import BUtton10 from './10.Button';

type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class ShareTest extends Component<Props> {

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
        <View style={styles.container}>
            <Button
            title = {"share"}
            onPress = {this._share}
            color = {"#666666"}
            />

        </View>
    );
    }


    _share = ()=>{
        Share.share({message:"message",title:"title",url:"www.baidu.com"},{subject:"subject",tintColor:"blue"})
        Share.sharedAction = ()=>{
            alert("成功分享");
        }

        Share.dismissedAction = ()=>{
            alert("取消");
        }


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


