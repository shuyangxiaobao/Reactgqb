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
    Button,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class BUtton10 extends Component<Props> {
    constructor(props) 
    {
        super(props);
        this.state = 
        {
              animating:true,
              switchstate:true,
              buttonTitle:1,
        };
    }

    render() {
        return (
        <View style={styles.container}>          
            <Button
            onPress={()=>this.onPressLearnMore()}
            title={this.state.buttonTitle.toString()}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>
        );
    }

    onPressLearnMore(){
        // AlertIOS.alert("12345");
        this.setState({
          animating:!this.state.animating,
          switchstate:!this.state.switchstate,
          buttonTitle:this.state.buttonTitle + 1
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


