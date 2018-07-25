import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
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
        title: "NEWS FEED"
      }
    },
    Article: {
      screen: Article
    }
  },
);

FeedScreen.navigationOptions = {
  title: "FEED",
  tabBarColor: "rgb(150, 50, 150)",
  tabBarIcon: <Image source={{uri: "https://cdn4.iconfinder.com/data/icons/social-productivity-line-art-5/128/news-newspaper1-512.png"}} style={{width:25, height: 25}}/>
}

export default FeedScreen;
