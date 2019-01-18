
// 注意在 JS 和原生代码间传递大量二进制数据是非常低效的，所以若非必要，请尽量少用此方法。如果只是为了显示图片，可以直接把 URI 传递给<Image/>组件，并不需要额外取 base64 数据。
// 不实用
import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    AlertIOS,
    ImageStore,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class ImageStoreTest extends Component<Props> {

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
        onStartShouldSetResponder = {this._onStartShouldSetResponder}
        >

        </View>
    );
    }


    _onStartShouldSetResponder(){
        // ImageStore.hasImageForTag("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2097124721,3074829049&fm=26&gp=0.jpg",(value)=>{
        //     alert(value);
        // })


        ImageStore.getBase64ForTag("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2097124721,3074829049&fm=26&gp=0.jpg",(value)=>{
            alert(value);
        },(success)=>{
            alert("success");

        },
        (error)=>{
            alert("error");
        })
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


