import React from 'react';
import { Text, Image, View, FlatList } from 'react-native';
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
      title: "SEARCH"
    }
  }
});

SearchScreen.navigationOptions = {
  title: "SEARCH",
  tabBarColor: "rgb(150, 50, 150)",
  tabBarIcon: <Image source={{uri: "https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-480.png"}} style={{width:25, height: 25}}/>
}

export default SearchScreen;
