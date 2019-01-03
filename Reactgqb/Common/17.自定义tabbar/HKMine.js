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
    TouchableOpacity,
    AlertIOS,
} from 'react-native';



export default class HKMine extends Component {
    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.pushTo}
                >
                <Text style={styles.instructions}>
                    我的
                </Text>
                </TouchableOpacity>
            </View>

        );
    }

    pushTo(){
        AlertIOS.alert('来了')
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('NewsDemo', () => NewsDemo);
