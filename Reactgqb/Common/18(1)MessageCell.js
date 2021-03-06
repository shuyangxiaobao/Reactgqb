/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class Text1 extends Component<Props> {


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
            <TouchableOpacity activeOpacity={0.5}
            onPress={()=>{AlertIOS.alert('购买成功!','成功解锁'+this.props.item.name+'英雄!')}}
            >
                <View style={styles.cellViewStyle}>
                {/*左边的图片*/}
                    <Image source={{uri:this.props.item.image}} style={styles.leftImageStyle}/>
                    {/*右边的View*/}
                    <View style={styles.rightViewStyle}>
                        {/*上面是英雄名称*/}
                        <Text style={styles.topTitleStyle}>{this.props.item.name + "0000"}</Text>
                        {/*下面是英雄描述*/}
                        <Text style={styles.bottomTitleStyle}
                            numberOfLines={3}
                        >{this.props.item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
    );
    }

    click(value){
        console.log(value.toString());
        if (value){
            AlertIOS.alert(value.toString());
        }
        this.setState({
            switchstate:value
        })
    }





}


const styles = StyleSheet.create({
    cellViewStyle:{
        //分割线
        // borderBottomWidth:0.5,
        // borderBottomColor:'#e8e8e8',
        //cell内部缩一下
        padding:10,
        //主轴横过来
        flexDirection:'row'

    },
    leftImageStyle:{
        width:60,
        height:60,
        marginRight:15
    },
    rightViewStyle:{

    },
    topTitleStyle:{
      fontSize:20,

    },
    bottomTitleStyle:{
        width:width * 0.7,
        marginTop:8
    }
});
