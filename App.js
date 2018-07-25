import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FeedScreen from './app/screens/Feed';
import SearchScreen from './app/screens/Search';
import BrowseScreen from './app/screens/Browse';

const Navigation = createMaterialBottomTabNavigator(
  {
    Feed: FeedScreen,
    Search: SearchScreen,
    Browse: BrowseScreen
  },
  {
    shifting: true,
    labeled: true
  },
);

export default Navigation;
