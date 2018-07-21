import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { getNews } from '../lib/Fetch';
import ArticleCard from '../components/ArticleCard';
import Article from './Article';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  // Called after a component is mounted
  componentDidMount() {
    this.fetchNews();
   }

  fetchNews() {
    getNews()
      .then((articles) => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }

  openArticle(item){
    this.props.navigation.navigate('Article', {article: item});
  }

  render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <TouchableOpacity onPress={() => this.openArticle(item)}>
                                    <ArticleCard article={item} />
                                  </TouchableOpacity>}
        keyExtractor={item => item.id}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
  );
  }
}

const FeedScreen = createStackNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: {
        title: "Feed"
      }
    },
    Article: {
      screen: Article
    }
  },
);

FeedScreen.navigationOptions = {
  tabBarColor: "black",
}

export default FeedScreen;
