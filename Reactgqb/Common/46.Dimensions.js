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
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window')
export default class DimensionsTest extends Component<Props> {

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
        onMoveShouldSetResponder = {this._onMoveShouldSetResponder}
        >
            {AlertIOS.alert(width.toString() + ":" + height.toString())}
        </View>
    );
    }

    _onMoveShouldSetResponder = ()=>{
        {AlertIOS.alert(width.toString() + ":" + height.toString())}
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


