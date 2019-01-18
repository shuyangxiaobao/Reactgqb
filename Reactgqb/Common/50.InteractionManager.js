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
    InteractionManager,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class InteractionManagerTest extends Component<Props> {

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
            onStartShouldSetResponder = {this._onStartShouldSetResponder}
        >
        </View>
    );
    }


    _onStartShouldSetResponder = ()=>{

        var handle = InteractionManager.createInteractionHandle();

        //执行动画 (`runAfterInteractions` tasks are queued)

        //动画执行结束

        InteractionManager.clearInteractionHandle(handle);

        //动画清除之后，开始直接runAfterInteractions中的任务

        InteractionManager.runAfterInteractions(() => {
            // ...耗时较长的同步执行的任务...
            alert("001");
          });

          setTimeout(() => {
            alert("002");
 
          }, 5000);
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


