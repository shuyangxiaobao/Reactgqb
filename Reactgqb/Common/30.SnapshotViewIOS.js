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
    SnapshotViewIOS,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class SnapshotViewIOStest extends Component<Props> {

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
            <SnapshotViewIOS
                onSnapshotReady={(value)=>{this.click(value)}}
                style={styles.SnapshotViewIOSStyle}>
            
            </SnapshotViewIOS>

        </View>
    );
    }


    click(value){
        AlertIOS.alert(value.toString());
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

    SnapshotViewIOSStyle:{
        width:100,
        height:100,
        marginTop:100,
        backgroundColor:"red",
    }


})


