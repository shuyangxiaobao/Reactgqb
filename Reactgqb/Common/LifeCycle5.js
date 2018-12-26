import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
    TouchableOpacity,
    Button,
} from 'react-native';


// Props = {};
// export default class LifeCycle5 extends Component < Props > {
//     render() {
//         return (
//             // <Text1/>
//             // <Image2/>
//             // <TextInput3/>
//             // <TouchableOpacity4/>
//            <View>
//                <Text>33434</Text>
//            </View>

//     )
//         ;
//     }
// }

class LifeCycle5 extends React.Component{
    state={
        title:"HHHH"
    }
    render() {
        AlertIOS.alert("render")
        return (            
           <View style={styles.container}> 
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>this.click('点击')}>
                    <Text style={styles.textStyle}>{this.state.title}</Text>
                </TouchableOpacity>
           </View>
        );    
   } // 注意这里既没有分号也没有逗号 }

    getDefaultProps(){
        AlertIOS.alert("getDefaultProps 来了1")
    }

    // 在组件创建，并初始化了状态之后，在第一次绘制 render() 之前。
    // 在整个生命周期中只被调用一次
    componentWillMount(){
        AlertIOS.alert("componentWillMount 来了1")
    }
// 在组件第一次绘制之后调用 通知组件已经加载完成
    componentDidMount(){
        AlertIOS.alert("componentDidMount 来了2")
    }

    componentWillReceiveProps(){
        AlertIOS.alert("componentWillReceiveProps 来了3")
    }

    //这个方法!!刷新UI之后调用!!!第一次加载UI不会来!!
    componentDidUpdate(){
        AlertIOS.alert('DidUpdate');
    }

    // 当组件接收到新的属性和状态改变的话
    // shouldComponentUpdate(){
    //     AlertIOS.alert("shouldComponentUpdate");
    // }

    click(event){
        this.setState({
            title:event,
            haha:event
        })

    }


    

}


// var LifeCycle5 = React.createClass({
//     // static defaultProps = {        
//     //      autoPlay: false,        
//     //      maxLoops: 10,

//     // };  // 注意这里有分号

//     // static propTypes = {        
//     //     //  autoPlay: React.PropTypes.bool.isRequired,        
//     //     //  maxLoops: React.PropTypes.number.isRequired,
//     //     //  posterFrameSrc: React.PropTypes.string.isRequired,        
//     //     //  videoSrc: React.PropTypes.string.isRequired,    
//     // };  // 注意这里有分号

//     // getDefaultProps(){
//     //     AlertIOS.alert("getDefaultProps 来了1")
//     // },

//     render() {             
//          return (            
//             <View style={styles.container}> 
//                 <Text>09090</Text>
//                 <Text>6789</Text>
//             </View>
//          );    
//     } // 注意这里既没有分号也没有逗号 }

// })

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    }
});

//输出一个类
module.exports = LifeCycle5;