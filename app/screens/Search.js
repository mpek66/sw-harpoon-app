import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

class Search extends React.Component {
  render() {
    const searchOptions = [
      {"name": "All Time"},
      {"name": "Category"},
      {"name": "Author"},
      {"name": "Scope"}
    ];

    return (
      <View>
        <SearchBar
          lightTheme
        />
        <FlatList
          data={searchOptions}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
            <ListItem
              title={item.name}
            />
          }
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
};

const SearchScreen = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: "Search"
    }
  }
});

SearchScreen.navigationOptions = {
  title: "Search",
  tabBarColor: "yellow"
}

export default SearchScreen;
