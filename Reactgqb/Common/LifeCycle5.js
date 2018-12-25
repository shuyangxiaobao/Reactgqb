import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
    TouchableOpacity,
    Button,
} from 'react-native';



var LifeCycle5 = React.createClass({
    // static defaultProps = {        
    //      autoPlay: false,        
    //      maxLoops: 10,

    // };  // 注意这里有分号

    // static propTypes = {        
    //     //  autoPlay: React.PropTypes.bool.isRequired,        
    //     //  maxLoops: React.PropTypes.number.isRequired,
    //     //  posterFrameSrc: React.PropTypes.string.isRequired,        
    //     //  videoSrc: React.PropTypes.string.isRequired,    
    // };  // 注意这里有分号

    getDefaultProps(){
        AlertIOS.alert("getDefaultProps 来了1")
    },

    render() {             
         return (            
            <View style={styles.container}> 
                <Text>3435</Text>
                <Text>6789</Text>
            </View>
         );    
    } // 注意这里既没有分号也没有逗号 }

})

// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:"center",
//         alignItems:"center",

//     }
// });

//输出一个类
module.exports = LifeCycle5;