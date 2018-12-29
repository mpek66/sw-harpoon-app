import React from 'react';
import { Text, Image, View, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import { getTitleOrdered } from '../lib/Fetch';
import ArticleCard from '../components/ArticleCard';
import Article from './Article';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      shown: this.props.screenProps.app.articles
    };
    this.endRefresh  = this.endRefresh.bind(this);
  }

  handleRefresh(){
    this.setState({refreshing: true});
    this.props.screenProps.reload(this.endRefresh);
  }

  endRefresh(){
    this.updateShown();
    this.setState({
      refreshing: false
    });
  }

  openArticle(item) {
    this.props.navigation.navigate('Article', {article: item});
  }

  updateShown(text) {
    result = [];
    if(text) {
      for (ix = 0; ix < this.props.screenProps.app.articles.length; ix++) {
        if(this.props.screenProps.app.articles[ix].title.toLowerCase().includes(text.toLowerCase())) {
          result.push(this.props.screenProps.app.articles[ix]);
        }
      }
    } else {
      result = this.props.screenProps.app.articles;
    }
    this.setState({shown: result});
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <SearchBar
          lightTheme
          onChangeText={(text) => this.updateShown(text)}
        />
        <View style={{flex: 1, flexDirection: "column"}}>
          <View style={{flex: 1}}>
          <FlatList
            data={this.state.shown}
            renderItem={({item}) =>
              <ListItem
                title={item.title}
                onPress={() => this.openArticle(item)}
              />
            }
            keyExtractor={item => item.id.toString()}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh.bind(this)}
          />
          </View>
        </View>
      </View>
    );
  }
}

const SearchScreen = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: "SEARCH"
    }
  },
  Article: {
    screen: Article
  }
});

SearchScreen.navigationOptions = {
  title: "SEARCH",
  tabBarColor: "rgb(150, 50, 150)",
  tabBarIcon: <Image source={{uri: "https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-480.png"}} style={{width:25, height: 25}}/>
}

export default SearchScreen;
