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
    AsyncStorage,
    Button,
} from 'react-native';



type Props = {};
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class AsyncStorageTest extends Component<Props> {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
              switchstate:true,
              setterTitle:"存",
              gettterTitle:"取",
              deleteTitle:"删除",
              mergeTitle:"合并",


        };
    }

    render() {
        return (
        <View style={styles.container}>

            <Button
            onPress={this._storeData}
            title={this.state.setterTitle.toString()}
            color="#841584"
            />

            <Button
            onPress={this._retrieveData}
            title={this.state.gettterTitle.toString()}
            color="#841584"
            />

            <Button
            onPress={this._removeData}
            title={this.state.deleteTitle.toString()}
            color="#841584"
            />


            <Button
            onPress={this._mergeData}
            title={this.state.mergeTitle.toString()}
            color="#841584"
            />

            <Button
            onPress={this._getAllKeysData}
            title={"getAllKeys"}
            color="#841584"
            />

            <Button
            onPress={this._multiGetData}
            title={"multiGet"}
            color="#841584"
            />

            <Button
            onPress={this._multiSetData}
            title={"multiSet"}
            color="#841584"
            />

            <Button
            onPress={this._multiMergeData}
            title={"multiMerge"}
            color="#841584"
            />




        </View>
    );
    }

//存
    _storeData = async () => {
        try {
          await AsyncStorage.setItem('TASKS', 'I like to save it.',()=>{
              console.log("存储success");
          });
        } catch (error) {
          // Error saving data
        }
      }

//取
      _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('TASKS');
          if (value !== null) {
            // We have data!!
            console.log(value.toString() + "999");
          }
         } catch (error) {
           // Error retrieving data
         }
      }

      _removeData = async () => {
          try{
              await AsyncStorage.removeItem('TASKS')
          } catch(error){

          }
      }

//合并
      _mergeData = async () => {
       
        let UID123_object = {
            name: "Tom",
            age: 30,
            traits: { hair: "brown", eyes: "brown" }
          };
          // 只需定义新增或是修改的数据
          let UID123_delta = {
            age: 31,
            height:178,
            traits: { eyes: "blue", shoe_size: 10 }
          };
          AsyncStorage.setItem("UID123", JSON.stringify(UID123_object), () => {
            AsyncStorage.mergeItem("UID123", JSON.stringify(UID123_delta), () => {
              AsyncStorage.getItem("UID123", (err, result) => {
                console.log(result);
              });
            });
          });
      }


// 获取所有keys
      _getAllKeysData = async () => {
            AsyncStorage.getAllKeys((error,keys)=>{
                console.log(keys);
            })
      }

//  multiGet
// 获取 keys 所包含的所有字段的值，其回调函数会传入一个 key-value 数组形式的数组：
      _multiGetData = async () => {
            AsyncStorage.getAllKeys((error,keys)=>{
                AsyncStorage.multiGet(keys, (error,result) => {
                    console.log(result);
                    console.log(result[1][1]);
            })
        })      
      }



      _multiSetData = async () => {
          AsyncStorage.multiSet([["test0","0",],["test1","1"]],(error)=>{

          });
      }

      _multiMergeData = async ()=>{
         // 第一个用户的初始数据
        let UID234_object = {
            name: "Chris",
            age: 30,
            traits: { hair: "brown", eyes: "brown" }
        };
        
        // 第一个用户的增量数据
        let UID234_delta = {
            age: 31,
            traits: { eyes: "blue", shoe_size: 10 }
        };
        
        // 第二个用户的初始数据
        let UID345_object = {
            name: "Marge",
            age: 25,
            traits: { hair: "blonde", eyes: "blue" }
        };
        
        // 第二个用户的增量数据
        let UID345_delta = {
            age: 26,
            traits: { eyes: "green", shoe_size: 6 }
        };
        
        let multi_set_pairs = [
            ["UID234", JSON.stringify(UID234_object)],
            ["UID345", JSON.stringify(UID345_object)]
        ];
        let multi_merge_pairs = [
            ["UID234", JSON.stringify(UID234_delta)],
            ["UID345", JSON.stringify(UID345_delta)]
        ];
        
        AsyncStorage.multiSet(multi_set_pairs, err => {
            AsyncStorage.multiMerge(multi_merge_pairs, err => {
            AsyncStorage.multiGet(["UID234", "UID345"], (err, stores) => {
                stores.map((result, i, store) => {
                let key = store[i][0];
                let val = store[i][1];
                console.log(key, val);
                });
            });
            });
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


