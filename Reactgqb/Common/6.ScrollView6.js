import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

export default class ScrollView6 extends Component{

    render(){
        return (
            <View style={styles.container}>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                pagingEnabled={true}
                style={styles.scrollViewStle}> 
                  {this.renderChildView()}  
                </ScrollView>
            </View>

        )
    };

    //返回子组件
    renderChildView(){
        //数组
        var allChild = [];
        var colors = ['red','green','blue','yellow','orange','purple'];
        //遍历
        for(var i=0;i<6;i++){
            allChild.push(
                <View key={i}
                      style={{backgroundColor:colors[i],width:375,height:667,
                        justifyContent:'center',alignItems:"center" }}
                        //  style={styles.cellStyles}
                >
                    <Text>{i}</Text>
                </View>
            )
        }
        //返回
        return allChild;
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:0,
        backgroundColor:"gray",
    },
    scrollViewStle:{
        marginTop:0,
        flex:1,
    },
    cellStyles:{
        // backgroundColor:"blue",
        // backgroundColor:colors[i],
        // width:375,
        // height:667,
        // justifyContent:'center',
        // alignItems:"center"
    }
})