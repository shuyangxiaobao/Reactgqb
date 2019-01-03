
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  AlertIOS,
  SearchBar,
  ActivityIndicator
} from 'react-native';

import MessageCell from './MessageCell';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;

export default class MessageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      page: 1,
      refreshing: true,
      loading: true,
      data: {},
    };
  }

  componentDidMount() {

    this.requestData();

    var Heros = require('./Json/heros.json');//数组

    this.setState({
      data:Heros
    })
  }

  requestData = () => {
    const url = 'Some rest api url address';
    fetch(url).then(res => {    
      return res.json()
    }).then(res => {
      this.setState({
        data: [...this.state.data, ...res],
      });
    }).catch(err => {
      this.setState({ error: err, loading: false, refreshing: false});
    });
  };



 // 分割线
  renderSeparator = () => {
    return (
        <View
        style={{
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
        marginLeft: "0%"
        }}
        />
    );
  }
//刷新
  handleRefresh = () => {
    // AlertIOS.alert("刷新");
    this.setState({
      refreshing: false,
    })
    console.log("刷新" + this.state.refreshing.toString());
  }
 //加载更多
  handleLoadMore = () => {
    // AlertIOS.alert("加载更多");
    // this.setState({
    //   refreshing: false,
    // })
    this.setState({
      loading: true,
    })
    console.log("加载更多" + this.state.refreshing.toString());

  }


  // Header
  renderHeader = () => {
    // return <SearchBar placeholder="Type Here..." lightTheme round />;
    return <Text>34353453345</Text>
  };

  // Footer
  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',marginTop:20 }}>
        <Text>Message</Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <MessageCell item={item} />
          )} 
          // 分割线
          ItemSeparatorComponent={this.renderSeparator}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh} //刷新
          onEndReached={this.handleLoadMore}  //加载更多
          onEndReachedThreshold={0} 
          loading={this.state.loading}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          />
      </View>
    );
  }
}