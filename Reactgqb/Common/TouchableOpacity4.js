import React, {Component} from 'react';
import {
    APPRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
Props = {};

export default class TouchanbleOpacity4 extends Component<Props> {
    state={
        title:"默认值"
    }   
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>this.click('点击')}
                onPressIn={()=>this.click("按下")}
                onPressOut={()=>this.click('抬起')}
                onLongPress={()=>this.click('长按')}>
                    <Text style={styles.textStyle}>{this.state.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }

click(event){
    this.setState({
        title:event
    })
}

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        
    },
    textStyle:{
        fontSize:40,
        fontWeight:"100",
    }
})

