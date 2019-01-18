
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
    Clipboard,
    Button,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class ClipboardTest extends Component<Props> {

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
            onPress={()=>this.clickOne()}
            title={"get"}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />

        <Button
            onPress={()=>this._setClipboardContent()}
            title={"setter"}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />

        </View>
    );
    }

    async clickOne(){
        try {
            var content2 = await Clipboard.getString();
            alert(content2);
        } catch (e){

        }
        
    }

    async clickTwo(){
        Clipboard.setString('hello world');
    }

    async _setClipboardContent(){
        Clipboard.setString('Hello World23423');
        try {
          var content2 = await Clipboard.getString();
          console.log(content2 + "wre");
          this.setState({content2});
          alert(content2);
        } catch (e) {
          this.setState({content:e.message});
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


