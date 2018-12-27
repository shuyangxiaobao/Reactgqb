import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    AlertIOS,
} from 'react-native';

//引入json数据
var ImageData = require('./Json/data2.json');
//引入定时器
var TimerMixin = require('react-timer-mixin');

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');


export default class Test extends Component {
    //注册定时器
    mixins:[TimerMixin];

    state={
        //当前页面
        currentPage:0,
    }
    //初始化固定值
    static defaultProps={
        //间隔时间  单位是毫秒!!
        duration:1000
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled = {true}
                    //一帧动画结束之后!!
                    onMomentumScrollEnd={(e)=>this.onScrollAnimationEnd(e)}
                    // 开始拖拽时
                    onScrollBeginDrag={()=>this.ScrollBeginDrag()}
                    // 结束拖拽时
                    onScrollEndDrag={()=>this.startTimer()}
                >
                    {this.renderAllImage()}
                </ScrollView>
                {/*指示器*/}
                <View style={styles.pageViewStyle}>
                        {/*5个小点*/}
                    {this.renderPage()}
                </View>
            </View>
        );
    }

    // 开始拖拽时
    ScrollBeginDrag(){
        clearInterval(this.timer);
    }

    //UI加载完毕
    componentDidMount(){
        //开启定时器
        this.startTimer();
    }

    //开启定时器
    startTimer(){
        //写逻辑代码
        //1.拿到ScrollView
        var scrollView = this.refs.scrollView;
        var imgCount = ImageData.data.length;
        var obj = this;

        //2.设置定时器
        this.timer = setInterval(function () {
            //2.1 设置当前页
            var currentPage = 0;
            //2.2 判断

            currentPage = obj.state.currentPage;
            if(currentPage == 0){
                scrollView.scrollTo({x:(currentPage +1)*width,y:0,animated:true});
            } else if(currentPage == 1){
                scrollView.scrollTo({x:(currentPage +1)*width,y:0,animated:true});

            }else if(currentPage == 2){
                scrollView.scrollTo({x:(currentPage +1)*width,y:0,animated:true});

            }else if(currentPage == 3){
                scrollView.scrollTo({x:(currentPage +1)*width,y:0,animated:true});

            }else if(currentPage == 4){
                scrollView.scrollTo({x:(currentPage +1)*width,y:0,animated:true});
                // scrollView.scrollTo({x:0*width,y:0,animated:false});

            }else if(currentPage == 5){
                scrollView.scrollTo({x:0*width,y:0,animated:false});
                scrollView.scrollTo({x:1*width,y:0,animated:true});

            //   AlertIOS.alert("wo");  
            }
            console.log(currentPage + "=====");
            // if((obj.state.currentPage + 1)>= imgCount){
            //     //清零
            //     currentPage = 0;
            // }else{
            //     currentPage = obj.state.currentPage + 1;
            // }
            // console.log(currentPage);

            // //2.3 更新状态机
            // obj.setState({
            //     currentPage:currentPage
            // })
            // //2.4 滚起来
            // var offsetX = currentPage * width;
            // scrollView.scrollTo({x:offsetX,y:0,animated:true});

        },this.props.duration);
    }


    //滚动完毕
    onScrollAnimationEnd(e){
        //1.拿到偏移量
        var offsetX = e.nativeEvent.contentOffset.x;

        //2.求出当前第几页
        var currentPage = Math.floor(offsetX/width);

        //3.更新状态机
        this.setState({
            currentPage:currentPage
        });

    }

    //返回小点点
    renderPage(){
        var style;
        //点一个装点点的数组
        var pageArr = [];
        //拿到图片数组
        var imgsArr = ImageData.data;
        //遍历
        for(var i=0;i<imgsArr.length - 1;i++){
            //判断
            style = (i==this.state.currentPage-1)?{color:'orange'}:{color:'#ffffff'};
            //给page加小先对象
            pageArr.push(
                <Text
                    key={i}
                    style={[{fontSize:25},style]}
                >&bull;  </Text>
            )
        }
        //返回
        return pageArr;
    }

    //加载所有的图片
    renderAllImage(){
        //数组
        var allImage = [];
        //拿到图片数据
        var imgsArr = ImageData.data;
        //遍历
        for(var i=0;i<imgsArr.length;i++){
            //取出单个图片的数据!
            var imgItem = imgsArr[i];
            //创建图片组件到数组里面
            allImage.push(
                <Image
                    key={i}
                    source={{uri:imgItem.img}}
                    style={{width:width,height:150}}
                />
            )
        }
        //返回所有的图片
        return allImage;
    }
}

const styles = StyleSheet.create({
    container: {

    },
    pageViewStyle:{
        width:width,
        height:25,
        backgroundColor:'rgba(0,0,0,0.2)',
        //定位
        position:'absolute',
        bottom:0,

        //主轴方向
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    }

});
//输出一个类
module.exports = Test;