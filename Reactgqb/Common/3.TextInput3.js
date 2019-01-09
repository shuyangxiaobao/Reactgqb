import React, {Component} from 'react';
import {
    APPRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    AlertIOS,
} from "react-native";
Props = {};

export default class TextInput3 extends Component<Props> {
    render(){
        return (
            <View style={styles.container}>
            <TextInput
            style={styles.inputStyle}
        // 控制字体是否要根据系统的“字体大小”辅助选项来进行缩放。默认值为true。
            allowFontScaling={true}
    // 控制TextInput是否要自动将特定字符切换为大写
            // characters: 所有的字符。
            // words: 每个单词的第一个字符。
            // sentences: 每句话的第一个字符（默认）。
            // none: 不切换。
            autoCapitalize={"characters"}

            autoComplete={"off"}

    // 是否隐藏光标
            caretHidden={true}


            // value={'http://www.baidu.com'}
            password={true}
    // iOS 是否要在文本框右侧显示“清除”按钮。仅在单行模式下可用
            clearButtonMode={'always'}
    // 如果为true，每次开始输入的时候都会清除文本框的内容。
            clearTextOnFocus={true}
    // true时上下文菜单是隐藏的（不理解）
            contextMenuHidden={true}

    // 如果为true，文本框中可以输入多行文字。默认值为false。
            multiline={false}
    // Android 设置输入框的行数。当multiline设置为true时使用它，可以占据对应的行数。
            numberOfLines={3}
    // 如果为false，文本框是不可编辑的
            editable={true}
            dataDetectorTypes={"address"}
    // 文本框中的初始值。当用户开始输入的时候，值就可以改变
            defaultValue={"我是默认值"}
    // 如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。默认值为false。
            enablesReturnKeyAutomatically={true}
    // iOS 指定键盘的颜色。default', 'light', 'dark'
            keyboardAppearance={"light"}

    // 决定弹出的何种软键盘
            keyboardType={"numeric"}
    // 限制文本框中最多的字符数
            maxLength={500}
    // 当文本框失去焦点的时候调用此回调函数。
            onBlur={()=>this.loseFocus("000")}
    // 当文本框内容变化时调用此回调函数
            onChange={(value)=>this.change(value)}
    // 当文本框内容变化时调用此回调函数
            onChangeText={(value)=>this.changeText(value)}
    // 当文本框内容大小变化时调用此回调函数
            onContentSizeChange={(event)=>{this.contentSizeChange(event)}}
    // 当文本输入结束后调用此回调函数
            onEndEditing={(value)=>{this.endEditing(value)}}
    // 当文本框获得焦点的时候调用此回调函数
            onFocus={(value=>{this.onFocus()})}
    // 当一个键被按下的时候调用此回调
            onKeyPress={(event)=>{this.onKeyPress(event)}}
    // 当组件加载或者布局变化的时候调用
            onLayout={(event)=>{this.onlayout()}}
    // 在内容滚动时持续调用
            onScroll={(event)=>{this.onScroll()}}
    // 长按选择文本时，选择范围变化时调用此函数
            onSelectionChange={(event)=>{this.onSelectionChange()}}
    // 此回调函数当软键盘的确定/提交按钮被按下的时候调用此函数。如果multiline={true}，此属性不可用。
            onSubmitEditing={()=>{this.onSubmitEditing}}

    // 占位符
            placeholder={'我是占位的'}
    // 占位字符串显示的文字颜色
            placeholderTextColor={"red"}

    // Android
            returnKeyLabel={"go"}
    // iOS 决定“确定”按钮显示的内容。在Android上你还可以使用returnKeyLabel。
    // 跨平台 done  go next  search  send   
    // Android： none   previous
    // iOS: default  emergency-call  google join  route  yahoo
            returnKeyType={"go"}
    // 如果为false，则将禁用文本视图的滚动。默认值是true。仅适用于multiline = {true}。
    // 党multiline={false} 时，使用 scrollEnabled 会奔溃
            // scrollEnabled={false}

    // 如果为true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全。默认//值为false。multiline={true}时不可用
            secureTextEntry={true}
            
            />

            <TextInput
            style={styles.inputStyle}
            // value={'我是默认文字'}
            placeholder={'我是占位的'}
            clearButtonMode={"always"}
            onBlur={()=>this.loseFocus("111")}


            />
            <Text>   </Text>
            <Text>   </Text>
            <Text>   </Text>
            <Text>   </Text>
            <Text>   </Text>
            <Text>   </Text>
            <Text>   </Text>

            </View>
        )
    }

    loseFocus(value){
        // AlertIOS.alert(value);
    }

    change(value){
        console.log(value.nativeEvent.text);
        console.log(value.nativeEven + value);

        // AlertIOS.alert(value.nativeEvent.text);
    }
    changeText(value){
        console.log("changeText:"+value);
        // AlertIOS.alert(value.nativeEvent.text);
    }

    contentSizeChange(event){
        console.log("width:" + event.nativeEvent.contentSize.width.toString()+"\n" +"height:" + event.nativeEvent.contentSize.height.toString());
    }

    endEditing(value){
        // AlertIOS.alert("编辑结束");
        console.log("编辑结束");
        console.log(value);
    }

    onFocus(){
        console.log("获得焦点／开始编辑");
        // AlertIOS.alert("获得焦点／开始编辑");
    }

    onKeyPress(event){
       console.log("onKeyPress:" + event.nativeEvent.key); 
    }


    onlayout(event){
        //  AlertIOS.alert("onlayout");
    }

    onScroll(event){
        console.log("onScroll");
         AlertIOS.alert("onScroll");
    }

    onSelectionChange(event){
        console.log("onSelectionChange");

    }

    onSubmitEditing(){
        AlertIOS.alert("submit");
    }


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        
    },
    inputStyle:{
        width:300,
        height:50,
        borderWidth:1,   //外边距的宽度
        borderColor:"#dddddd",  //外边距的颜色
        margin:10,
        borderRadius:10,  //设置圆角的效果
        shadowColor:'#0000ff',//设置一个阴影的颜色
        shadowOpacity: 0.5 ,//阴影的透明度  0~1
        shadowRadius:3 ,//阴影的扩散程度
        shadowOffset:{
            height:1,
            width:1
        }//阴影的偏移量
        
    }
})

