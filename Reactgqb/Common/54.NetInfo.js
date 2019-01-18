
// 通过NetInfo模块可以获取设备当前的联网状态。
import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    AlertIOS,
    NetInfo,
    Button,
} from 'react-native';
import BUtton10 from './10.Button';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class NetInfoTest extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
              switchstate:true,
              addStatus:false,
        };
    }

    render() {
        return (
        <View style={styles.container}
        onStartShouldSetResponder = {this._onStartShouldSetResponder}
        >
            <Button
            onPress={this._addEventListener}
            title={"addEventListener"}
            color="#841584"
            />
            <Button
            onPress={this._removeEventListener}
            title ={"removeEventListener"}
            color = "#841584"
            />

            <Button
            onPress={this._getConnectionInfo}
            title={"getConnectionInfo"}
            color = "#841584"
            />

            <Button
            onPress = {this._isConnected}
            title = {"isConnected"}
            color = "#841548"
            />




        </View>
    );
    }



    _addEventListener = ()=>{

        if(!this.state.addStatus){
            NetInfo.addEventListener("connectionChange",(connectionInfo)=>{
                alert(connectionInfo.type + ":addEventListener:" + connectionInfo.effectiveType);
            })
            this.setState({
                addStatus:true
            })
        }
    }

    _removeEventListener = ()=>{
    alert(this.state.addStatus);
        if(this.state.addStatus){
            NetInfo.removeEventListener("connectionChange",(connectionInfo)=>{
                alert(connectionInfo.type + ":removeEventListener:" + connectionInfo.effectiveType);
            })
            this.setState({
                addStatus:false
            })
        }
       
    }

    _getConnectionInfo = (connectionInfo)=>{
        NetInfo.getConnectionInfo().then((connectionInfo)=>{
            alert(connectionInfo.type + ":" + connectionInfo.effectiveType);
        })
    }


    _isConnected = ()=>{
       NetInfo.isConnected.fetch().then((status)=>{
            alert(status);
       })
    }


    // EffectiveConnectionType "2g" | "3g" | "4g" | "unknown";
    // type: ConnectionType; 
    
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


