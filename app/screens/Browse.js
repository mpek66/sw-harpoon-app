import React from 'react';
import { Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import { getOptions, getArticles } from '../lib/Fetch';
import ArticleCard from '../components/ArticleCard';
import Article from './Article';

class Browse extends React.Component {

  openOption(type){
    this.props.navigation.navigate('Options', {type: type});
  }

  render() {
    const searchOptions = [
      "Time",
      "Category",
      "Author",
      "Scope"
    ];

    return (
      <FlatList
        data={searchOptions}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>
          <ListItem
            title={item}
            onPress={() => this.openOption(item)}
          />
        }
        keyExtractor={item => item.toString()}
      />
    );
  }
};

class Options extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.type}`.toUpperCase(),
  });

  constructor(props) {
    super(props);
  }

  openResult(choice) {
    this.props.navigation.navigate('Results', {type: this.getType(), filter: choice});
  }

  getType() {
    return this.props.navigation.state.params.type.toLowerCase();
  }

  render(){
    return (
      <FlatList
        data={this.props.screenProps.app.options[this.getType()]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>
          <ListItem
            title={item}
            onPress={() => this.openResult(item)}
          />
        }
        keyExtractor={item => item.toString()}
      />
    );
  }
}

class Results extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.filter}`.toUpperCase(),
  });

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      refreshing: false
    };
    this.fetchArticles = this.fetchArticles.bind(this);
    this.endRefresh = this.endRefresh.bind(this);
  }

  componentDidMount() {
    this.fetchArticles();
  }

  getFilter() {
    return this.props.navigation.state.params.filter.toLowerCase();
  }

  openArticle(item) {
    this.props.navigation.navigate('Article', {article: item});
  }

  handleRefresh(){
    this.setState({refreshing: true});
    this.props.screenProps.reload(this.endRefresh);
  }

  endRefresh(){
    this.fetchArticles();
    this.setState({
      refreshing: false
    });
  }

  fetchArticles() {
    getArticles(this.props.navigation.state.params.type, this.getFilter())
      .then((articles) => this.setState({ articles: articles }));
  }

  render(){
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <TouchableOpacity onPress={() => this.openArticle(item)}>
                                    <ArticleCard article={item} />
                                  </TouchableOpacity>}
        keyExtractor={item => item.id.toString()}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}

const BrowseScreen = createStackNavigator({
  Browse: {
    screen: Browse,
    navigationOptions: {
      title: "BROWSE"
    }
  },
  Options: {
    screen: Options
  },
  Results: {
    screen: Results
  },
  Article: {
    screen: Article
  }
});

BrowseScreen.navigationOptions = {
  title: "BROWSE",
  tabBarColor: "rgb(150, 50, 150)",
  tabBarIcon: <Image source={{uri: "http://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Opened-Folder-icon.png"}} style={{width:25, height: 25}}/>
}

export default BrowseScreen;
