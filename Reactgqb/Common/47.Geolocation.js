// 获取定位 
import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    AlertIOS,
    Geolocation,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class GeolocationTest extends Component<Props> {

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

        </View>
    );
    }

    _onMoveShouldSetResponder = ()=>{
        navigator.geolocation.getCurrentPosition((postion)=>{
            console.log(postion);
            alert(postion.coords.longitude.toString() + ":" + postion.coords.latitude.toString())
        },(error)=>{
            console.log(error);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        )
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


