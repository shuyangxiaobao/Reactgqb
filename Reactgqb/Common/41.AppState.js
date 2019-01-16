

// active - 应用正在前台运行
// background - 应用正在后台运行。用户可能面对以下几种情况：
//    1.在别的应用中
//    2.停留在桌面
//    3.对 Android 来说还可能处在另一个Activity中（即便是由你的应用拉起的）
// inactive - 此状态表示应用正在前后台的切换过程中，或是处在系统的多任务视图，又或是处在来电状态中。

import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    AlertIOS,
    AppState,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class AppStateTest extends Component<Props> {

    state = {
        appState: AppState.currentState,
      }
    
      componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
      }
    
  // 当组件要被从界面上移除的时候，就会调用componentWillUnmount(),在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等
      componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
      }
    
      _handleAppStateChange = (nextAppState) => {

        console.log(nextAppState.toString());
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
          // console.log('App has come to the foreground!')
        }
        this.setState({appState: nextAppState});
      }
    
      render() {
        return (
            <View style={styles.container}>
                 <Text>Current state is: {this.state.appState}</Text>
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

})


