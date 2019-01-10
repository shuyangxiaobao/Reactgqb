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
    WebView,
    ActivityIndicator,
    Button,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class WebViewTest extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
              switchstate:true,
              buttonTitle:"点我"
        };
    }

    render() {
        return (
        // <View style={styles.container}>


        <WebView
        source={{uri: 'https://www.baidu.com'}}
        style={styles.webviewStyle}

// 控制插入到导航栏，标签栏或者工具条之后的 web 内容是否自适应。默认为true。
        automaticallyAdjustContentInsets={false}
// 在网页加载完成之后，还可以主动调用此方法（以 ref 形式调用）继续给 WebView 注入 JS 代码。注入后会立即执行。
        injectJavaScript={this._injectJavaScript}

        injectedJavaScript={"AlertIOS.alert(\"haha\")"}

// 控制 HTML5 音频和视频播放前是否需要用户点击。默认为true。
        mediaPlaybackRequiresUserAction={true}
        
// 当 WebView加载失败时调用的函数
        onError={this._onError}

// 当 WebView加载成功后执行的函数
        onLoad={this._onLoad}
// 函数，当加载结束调用，不管是成功还是失败。
        onLoadEnd={this._onLoadEnd}
// 当 WebView刚开始加载时调用的函数
        onLoadStart={this._onLoadStart}

// 当导航状态发生变化的时候调用
        onNavigationStateChange={this._onNavigationStateChange}
        style={{marginTop: 20}}

// 设置一个函数，返回一个视图用于显示错误。
        renderError={this._renderError}

// 布尔值，控制WebView第一次加载时是否显示加载视图（如指示器）。当设置了renderLoading时必须将这个属性设置为true 才能正常显示
        startInLoadingState={true}
// 设置一个函数，返回一个加载指示器。。为了使用这个属性必须将 startInLoadingState 属性设置为 true。
        renderLoading={this._renderLoading}

// 布尔值，控制网页内容是否自动适配视图的大小，同时启用用户缩放功能。默认为true。
        scalesPageToFit={true}

// iOS 指定一个浮点数，用于设置在用户停止触摸之后，此视图应以多快的速度停止滚动。也可以指定预设的字符串值，如"normal"和"fast"，分别对应 UIScrollViewDecelerationRateNormal 和 UIScrollViewDecelerationRateFast。
        decelerationRate={0.99}

// 仅限 Android 平台。指定是否开启 DOM 本地存储。
        domStorageEnabled={false}

// 布尔值，控制是否启用 JavaScript。仅在安卓下使用，因为 IOS 默认为启用 JavaScript。默认值为true。
        javaScriptEnabled={true}

// iOS 控制 HTML5 视频是在内部播放(非全屏)还是使用原生的全屏控制器。默认为 false。
        allowsInlineMediaPlayback={false}

// 布尔值，控制当 webview 内容到达底部时是否进行回弹。默认为 true
        bounces={true}

// webview 插入到滑动视图时距离边缘的距离。默认为{top: 0, left: 0, bottom: 0, right: 0}。
        contentInset={{top: 0, left: 0, bottom: 0, right: 0}}

// iOS 控制是否在 WebView中启用滑动。默认为 true。
        scrollEnabled={true}
// 设置true的时候会使用新的WKWebView来代替老的UIWebView。
    // true 时页面加载不出来
        useWebKit={false}

        

      />


    );
    }


    _injectJavaScript(){
        AlertIOS.alert("haha");
    }

    _onError(){
        AlertIOS.alert("haha");
    }
    // 加载成功以后回调
    _onLoad(){
        console.log("_onLoad--222");
        // AlertIOS.alert("_onLoad"); 
    }

    _onLoadEnd(){
        console.log("_onLoadEnd--333");
        // AlertIOS.alert("_onLoadEnd"); 
    }

    _onLoadStart(){
        console.log("_onLoadStart--111");
        // AlertIOS.alert("_onLoadStart")
    }

    _onNavigationStateChange(){

    }

    _renderError(){
        return(  <Text
            style={[{fontSize:25},style]}
        >&bull; wewrwr </Text>
        )
    }

    _renderLoading(){
        return(  <ActivityIndicator
            animating={true}
            style={styles.centering}
            size="large"
            />
        ) 
    }

    onPressLearnMore(){
        this.refs.webview.reload();
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

    webviewStyle:{
        flex:1,
        width:414,
        height:736,
        padding:0,
        margin:0,
    }


})


