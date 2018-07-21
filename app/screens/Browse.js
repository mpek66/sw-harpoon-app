import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import { getOptions } from '../lib/Fetch';

class Browse extends React.Component {

  openOptions(type){
    this.props.navigation.navigate('Options', {type: type});
  }

  render() {
    const searchOptions = [
      {"name": "Time"},
      {"name": "Category"},
      {"name": "Author"},
      {"name": "Scope"}
    ];

    return (
      <View>
        <FlatList
          data={searchOptions}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
            <ListItem
              title={item.name}
              onPress={() => this.openOptions(item.name)}
            />
          }
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
};

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.fetchOptions = this.fetchOptions.bind(this);
    this.state = { options: "" };
  }

  componentDidMount() {
    this.fetchOptions();
  }

  fetchOptions() {
    getOptions(this.props.type)
      .then((options) => this.setState({ options }));
  }

  render(){
    const type = this.props.navigation.state.params.type
    return (
      <Text>{type}</Text>
    );
  }
}

class Results extends React.Component {
  render(){
    const {
      type
    } = this.props;
    return (
      <Text>Options</Text>
    );
  }
}

const BrowseScreen = createStackNavigator({
  Browse: {
    screen: Browse,
    navigationOptions: {
      title: "Browse"
    }
  },
  Options: {
    screen: Options
  },
  Results: {
    screen: Results
  }
});

BrowseScreen.navigationOptions = {
  title: "Browse",
  tabBarColor: "blue"
}

export default BrowseScreen;
