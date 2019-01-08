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
    TabBarIOS,
} from 'react-native';

export default class HKTabBar extends Component {

    constructor(pros){
        super(pros);
        this.state={
            //默认被选中的Item
            selectedTabBarItem:'home'
        }
    }

    render() {
        return (
        <View style={styles.container}>
            {/*头部*/}
            <View style={{alignItems:"center",marginTop:20}}>
                <Text>TabBar练习</Text>
            </View>
            {/*选项卡*/}
            <TabBarIOS
            // default black
                barStyle={"black"}
                barTintColor='white'  //tabbar 背景颜色
                tintColor='red'   //选中时item的颜色
                itemPositioning={"fill"}  //auto center fill  
                translucent={false}  //
                style={styles.tabBarIOSStyle}

                unselectedItemTintColor={"yellow"} //未选中时item的颜色
            >
                {/*第一个*/}
                <TabBarIOS.Item
                    // systemIcon="contacts"
                    title="首页1"
                    badge="3"
                    selected={this.state.selectedTabBarItem == 'home'}  //是否选中
                    icon={require('./Source/img/icon3.png')}

                    badgeColor={"orange"}   //小红点颜色

                    selectedIcon={require('./Source/img/icon.png')}  //选中时的图标
                    onPress = {()=>{this.setState({selectedTabBarItem:'home'})}}
                >
                <View style={[styles.commonViewStyle,{backgroundColor:'red'}]}>
                    <Text>首页2</Text>
                </View>
                </TabBarIOS.Item>
                {/*第二个*/}
                <TabBarIOS.Item
                    systemIcon="bookmarks"
                    selected={this.state.selectedTabBarItem == 'second'}
                    onPress = {()=>{this.setState({selectedTabBarItem:'second'})}}
                >
                <View style={[styles.commonViewStyle,{backgroundColor:'green'}]}>
                    <Text>第二页</Text>
                </View>
                </TabBarIOS.Item>
                {/*第三个*/}
                <TabBarIOS.Item
                    systemIcon="downloads"
                    selected={this.state.selectedTabBarItem == 'three'}
                    onPress = {()=>{this.setState({selectedTabBarItem:'three'})}}
                >
                <View style={[styles.commonViewStyle,{backgroundColor:'blue'}]}>
                    <Text>第三个</Text>
                </View>
                </TabBarIOS.Item>
                {/*第四个*/}
                <TabBarIOS.Item
                    systemIcon="search"
                    selected={this.state.selectedTabBarItem == 'four'}
                    onPress = {()=>{this.setState({selectedTabBarItem:'four'})}}
                >
                <View style={[styles.commonViewStyle,{backgroundColor:'white'}]}>
                    <Text>第四个</Text>
                </View>
                </TabBarIOS.Item>

            </TabBarIOS>


        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    commonViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    tabBarIOSStyle:{
        height:300,
    }
});
