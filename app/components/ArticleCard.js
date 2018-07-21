import React from 'react';
import { View, Linking, TouchableHighlight } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default class ArticleCard extends React.Component {
  render() {
    const {
      article,
      author,
      caption,
      category,
      date,
      id,
      image,
      scope,
      title
    } = this.props.article;
    const { noteStyle, featuredTitleStyle } = styles;
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    return (
      <View>
        <Card
          featuredTitle={title}
          featuredTitleStyle={featuredTitleStyle}
          image={{
            uri: image || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {caption || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>{author}</Text>
            <Text style={noteStyle}>{date}</Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
};
