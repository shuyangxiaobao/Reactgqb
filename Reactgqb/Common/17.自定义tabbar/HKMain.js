/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    // Navigator,
} from 'react-native';

import {
    Navigator,
} from "react-native-deprecated-custom-components";

//引入三方框架
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

//引入其他的模块
import HKHome from './HKHome';
import HKMine from './HKMine';
import HKFind from './HKFind';
import HKMessage from './HKMessage';

//自定义TabBar
import HKTabBar from './HKTabBar'

export default class HKMain extends React.Component {

    constructor(props){
        super(props);
        this.state={
            tabNames:['首页1','我的','发现','消息'],
            tabIconNames:['tabbar_home','tabbar_profile','tabbar_discover','tabbar_message_center'],
            tabSelectImags:['tabbar_home_highlighted','tabbar_profile_highlighted','tabbar_discover_highlighted','tabbar_message_center_highlighted'],
        }
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames=this.state.tabIconNames;
        let tabSelectedImages = this.state.tabSelectImags;
        return (
           <ScrollableTabView
            renderTabBar={()=> <HKTabBar 
            // ScrollableTabBar   DefaultTabBar  HKTabBar

            // DefaultTabBar表示Tab.item会平分水平方向上的空间，而ScrollableTabBar表示所有的tabBar.item的长度将会超过屏幕宽度，但是当滚动屏幕之时可以显示出来。
                tabNames={tabNames}
                tabIconNames={tabIconNames}
                tabIconSelectedNames={tabSelectedImages}
            />}
            // tabbar 位置  bottom  top
            // top(放在界面上方)、bottom(放在界面底部)、overlayTop(有悬浮效果在上方)、overlayBottom(有悬浮效果在下方)
            tabBarPosition="bottom"
            //切换动画效果
            scrollWithoutAnimation={false}
            //常用属性

            // :切换界面的时候会调用该方法，
            onChangeTab={
                (obj)=>{
                  console.log('切换到了'+obj.i+'个');
                }
            }
            // 初始化时被选中的下标，默认为0
            initialPage={2}

            // 视图滑动时调用
            onScroll={
                //Float
                (posit)=>{
                    console.log('监听到滚动' + posit);
                }
            }
            //锁住滚动
            locked={false}

            // tabBarBackgroundColor:整个tabBar的背景颜色。
            tabBarBackgroundColor={"red"}

            // tabBarActiveTextColor/tabBarInactiveTextColor: 选中/未选中的tabBar的文字颜色
            tabBarActiveTextColor={"yellow"}  //选中tabBar的文字颜色
            tabBarInactiveTextColor = {"white"}  //未选中tabBar的文字颜色

            // 提供一个object对象的参数，用于设置文字的样式，如字体字号
            tabBarTextStyle={
                {fontSize: 25}
            }
           >
               <Navigator
                   tabLabel="首页1"
                   initialRoute={{
                       component:HKHome,
                       params:{
                           title:'首页'
                       }
                   }}
                   renderScene={(route,navigator)=>
                        <route.component navitator={navigator} {...route.params} />
                   }
               />
               <Navigator
                   tabLabel="我的2"
                   initialRoute={{
                       component:HKMine,
                       params:{
                           title:'我的'
                       }
                   }}
                   renderScene={(route,navigator)=>
                       <route.component navitator={navigator} {...route.params} />
                   }
               />
               <Navigator
                   tabLabel="发现"
                   initialRoute={{
                       component:HKFind,
                       params:{
                           title:'发现'
                       }
                   }}
                   renderScene={(route,navigator)=>
                       <route.component navitator={navigator} {...route.params} />
                   }
               />
               <Navigator
                   tabLabel="消息"
                   initialRoute={{
                       component:HKMessage,
                       params:{
                           title:'消息'
                       }
                   }}
                   renderScene={(route,navigator)=>
                       <route.component navitator={navigator} {...route.params} />
                   }
               />
           </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('NewsDemo', () => NewsDemo);
