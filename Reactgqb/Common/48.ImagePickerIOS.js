
// 在 BuildPhases 里面link Binary With Libraries 里面添加 libRCTCameraRoll.a  库

// https://blog.csdn.net/baiyu753159/article/details/77368941  (ReactNative ImagePickerIOS 使用教程)
import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    AlertIOS,
    ImagePickerIOS,
    Image,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class ImagePickerIOSTest extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
              switchstate:true,
              image:null,
              index:-1,
        };
    }

    render() {
        return (
        <View style={styles.container}
        onStartShouldSetResponder = {this._onStartShouldSetResponder}
        >
        {this.state.image?
        <Image style={{flex:1,width:width}} 
        source={{uri:this.state.image}}>
        </Image> : null
        }

        </View>
    );
    }


    _onStartShouldSetResponder = ()=>{
        var index = this.state.index + 1;
        this.setState({
            index:index,
        })
        switch(index%4){
            case 0: 
                ImagePickerIOS.canRecordVideos((imageUri) => alert('能获取视频'));
            break;
            case 1:{
                ImagePickerIOS.canUseCamera(() => alert('能获取图片'))
            }
            break;

            case 2:{
                this.openCameraDialog();
            }
            break;
            case 3:{
                this.openSelectDialog();
            }
            break;
        }
    }

    //调用相机拍照
    openCameraDialog(){
        ImagePickerIOS.openCameraDialog({}, (imageUri) => {
            console.log("success");
            alert("success");
          this.setState({ image: imageUri });
    
        }, ()=>{
            console.log("cancel");
            alert("cancel");
        });
    }

    //选取相册图片
    openSelectDialog(){
        ImagePickerIOS.openSelectDialog({}, (imageUri) => {
            console.log("success");
            alert("success");
          this.setState({ image: imageUri });
    
        }, ()=>{
            console.log("cancel");
            alert("cancel");
        });
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


