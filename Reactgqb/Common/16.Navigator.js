/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {
    Navigator,
} from "react-native-deprecated-custom-components";

import FirstView from './FirstView'
export default class NavDemo extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{
                    component:FirstView,
                    params:{
                      title:'第一个视图',
                        haha:'哈哈',
                        hehe:'呵呵',
                        heihei:'嘿嘿'
                    }
                }}
                //渲染场景
                renderScene={(route, navigator) =>
                    <route.component {...route.params} nav={navigator} name={route.name} />
                }
        // 配置场景
                configureScene={()=>
                    Navigator.SceneConfigs.VerticalUpSwipeJump
                }
                    // Navigator.SceneConfigs.PushFromRight (默认)
                    // Navigator.SceneConfigs.FloatFromRight
                    // Navigator.SceneConfigs.FloatFromLeft
                    // Navigator.SceneConfigs.FloatFromBottom
                    // Navigator.SceneConfigs.FloatFromBottomAndroid
                    // Navigator.SceneConfigs.FadeAndroid
                    // Navigator.SceneConfigs.HorizontalSwipeJump
                    // Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
                    // Navigator.SceneConfigs.VerticalUpSwipeJump
                    // Navigator.SceneConfigs.VerticalDownSwipeJump
            />
        );
    }
}






