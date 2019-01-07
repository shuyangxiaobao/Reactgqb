// Modal 组件是一种简单的覆盖在其他视图之上显示内容的方式。

import React, {Component} from 'react';
import {
    APPRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Modal,
    TouchableHighlight,
    AlertIOS,
} from "react-native";
Props = {};

export default class TextInput3 extends Component<Props> {
        //构造函数中初始化数据
        constructor(props){
            super(props);
            this.state={
                modalVisible:false,
            };
        }
    
    render(){
        return (
            <View style={styles.container}>
                <Modal
            // 1.visible属性决定 modal 是否显示。
                visible={this.state.modalVisible}
            // 2.用于指定在设备切换横竖屏方向时，modal 会在哪些屏幕朝向下跟随旋转
                supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
            // 3.onShow回调函数会在 modal 显示时调用。
                onShow = {()=>{this.show("出来了")}}
            // 4.transparent 属性是指背景是否透明，默认为白色，将这个属性设为：true 的时候弹出一个透明背景层的modal。
                transparent={false}
            // 5.指定了 modal 的动画类型。
                // slide 从底部滑入滑出。
                // fade 淡入淡出。
                // none 没有动画，直接蹦出来。
                animationType="fade"
            // 6.onDismiss回调会在 modal 被关闭时调用
                onDismiss={()=>{this.dismiss("dismiss 了")}}
            // 7.当设备方向发生更改时，将调用onOrientationChange回调方法
                onOrientationChange={()=>{this.OrientationChange("方向改变了")}}
            // 8.presentationStyle决定 modal（在较大屏幕的设备比如 iPad 或是 Plus 机型）如何展现
                //fullScreen完全盖满屏幕。
                // pageSheet竖直方向几乎盖满，水平居中，左右留出一定空白（仅用于大屏设备）。
                // formSheet竖直和水平都居中，四周都留出一定空白（仅用于大屏设备）。
                // overFullScreen完全盖满屏幕，同时允许透明。
                presentationStyle={"pageSheet"}



                onRequestClose={() => {
                    alert("Modal has been closed.");
                }}
                >
                <View style={{ marginTop: 22 }}>
                    <View>
                    <Text>Hello World!</Text>

                    <TouchableHighlight
                        onPress={() => {
                            this.setState({
                                modalVisible:!this.state.modalVisible
                            })
                        // this.setModalVisible(!this.state.modalVisible);
                        }}
                    >
                        <Text>Hide Modal</Text>
                    </TouchableHighlight>
                    </View>
                </View>
                </Modal>

                <TouchableHighlight
                    onPress={()=>{this.click(true)}}
                >
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        )
    }

    show(value){
        // AlertIOS.alert(value);
        console.log(value);
    }

    click(value){
        // AlertIOS.alert(value.toString());
        this.setState({
            modalVisible:value
        })
    }

    dismiss(value){
        AlertIOS.alert(value); 
    }

    OrientationChange(value){
        AlertIOS.alert(value);
    }


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        
    },

})

