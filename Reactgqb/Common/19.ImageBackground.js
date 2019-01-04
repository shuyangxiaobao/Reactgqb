import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';

export default class ImageBackgroundView extends Component{

    render(){
        return (
            <View style={styles.container}>
            {this.test()}
            </View>

        )
    };

    test(){
        return( <ImageBackground source={{uri:"icon"}} style={[styles.ImageBackgroundStyle,{width: '100%', height: '100%'}]}>
        <Text style={styles.textStyle}>Inside1</Text>
        <Text style={styles.textStyle}>Inside2</Text>
        <Text style={styles.textStyle}>Inside3</Text>

      </ImageBackground>)
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:0,
        backgroundColor:"gray",
    },
    ImageBackgroundStyle:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
    },
    textStyle:{
        fontSize:20,
        color:"red",
    }
})

