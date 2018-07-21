import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FeedScreen from './app/screens/Feed';
import BrowseScreen from './app/screens/Browse';

const Navigation = createMaterialBottomTabNavigator(
  {
    Feed: FeedScreen,
    Browse: BrowseScreen
  },
  {
    shifting: true,
    labeled: true
  },
);

export default Navigation;
