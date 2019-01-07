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
    SegmentedControlIOS,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class SegmentedControlIOStest extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
            selectedIndex:2
        };
    }

    render() {
        return (
        <View style={styles.container}>
            <SegmentedControlIOS
                values={['One', 'Two',"three","four"]}
                selectedIndex={this.state.selectedIndex}
                onChange={(event) => {
                    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                    setTimeout(() => {
                        AlertIOS.alert(this.state.selectedIndex.toString()); 
                    }, 1);
                }}
                tintColor={"yellow"}
                enabled={true}
                momentary={""}
                style={styles.SegmentedControlIOSStyle}
            />

        </View>
    );
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
    SegmentedControlIOSStyle:{
        width:200,
        height:50,
        marginTop:100,
    }

})


