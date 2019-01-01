/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';

export default class SecondView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.viewClick.bind(this)}
                >
                    <Text>{this.props.title}</Text>
        <Text>{this.props.name}</Text>


        </TouchableOpacity>
            </View>
        );
    }
    viewClick(){
        //为了严谨起见!!先判断
        if(this.props.getUserName){
            this.props.getUserName('全世界最帅的男人!!')
        }

        //props 属性!!! 这个属性是你这个对象创建的时候定义的!!!
        this.props.nav.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
});
