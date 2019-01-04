import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    MaskedViewIOS,
} from 'react-native';

export default class MaskedViewIOSgqb extends Component{

    render(){
        return (
          <View style={styles.container}>
            <MaskedViewIOS
            style={{ flex: 1, flexDirection: 'row', height: '100%' }}
            maskElement={
              <View style={{
                // 蒙版的效果与其本身透明度相反。先设置整个背景透明，表示完全盖住蒙版底下的元素，不显示出来。
                backgroundColor: 'transparent',  //transparent
                flex: 1,  
                height:100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{
                  fontSize: 60,
                  // 文字不透明，表示文字部分盖住的元素会显示出来。
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                  Basic Mask
                </Text>
              </View>
            }
          >
            { /* 被盖在蒙版之下的元素。可以放置任意元素，例如图片等。 */ }
            <View style={{ flex: 2, height: '100%', backgroundColor: 'red' }} />
            <View style={{ flex: 1.5, height: '100%', backgroundColor: 'yellow' }} />
            <View style={{ flex: 1, height: '100%', backgroundColor: 'blue' }} />
          </MaskedViewIOS>
          <Text style={styles.viewBottomStyle}>3453 </Text>

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

    viewBottomStyle:{
      width:375,
      height:200,
      backgroundColor:"#dddddd",
    }
})

