import React from 'react';
import { Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

class Browse extends React.Component {
  render() {
    return (
      <SearchBar
        showLoading
        cancelButtonTitle="Cancel"
        placeholder='Search' />
    );
  }
};

const BrowseScreen = createStackNavigator({
  Browse: {
    screen: Browse,
    navigationOptions: {
      title: "Browse"
    }
  }
});

BrowseScreen.navigationOptions = {
  title: "Browse",
  tabBarColor: "white"
}

export default BrowseScreen;
