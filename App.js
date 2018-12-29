import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import LoadScreen from './app/screens/Load';
import FeedScreen from './app/screens/Feed';
import SearchScreen from './app/screens/Search';
import BrowseScreen from './app/screens/Browse';
import { loadApp } from './app/lib/Fetch';

const Navigation = createMaterialBottomTabNavigator(
  {
    Feed: FeedScreen,
    Search: SearchScreen,
    Browse: BrowseScreen
  },
  {
    shifting: true,
    labeled: true
  }
);

class Meta extends React.Component {
  constructor(props) {
    super(props);
    this.state = { app: {}, loaded:false };
    this.fetchApp = this.fetchApp.bind(this);
  }
  componentDidMount() {
    this.fetchApp();
  }
  fetchApp(callback = ()=>{}) {
    loadApp()
      .then((data) => {
        d = new Date();
        data["titles"] = d.toLocaleTimeString();
        setTimeout(() =>{
          this.setState({ app: data, loaded: true });
          callback();
        }, 500);
      });
  }

  render() {
    if(!this.state.loaded) {
      return(<LoadScreen />);
    } else {
      return(<Navigation screenProps={{ app: this.state.app, reload: this.fetchApp }} />);
    }
  }
}

export default Meta;
