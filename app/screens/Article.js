import React from 'react';
import { Image, Text, ScrollView, StyleSheet, View } from 'react-native';
import FilledImage from '../components/FilledImage';

export default class Article extends React.Component {
  static navigationOptions = ({ navigation }) => ({
   title: `${navigation.state.params.article.category}`.toUpperCase(),
   });

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
    } = this.props.navigation.state.params.article;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText}>
            {title + "\n"}
          </Text>
          <Text style={styles.authorText}>
            Written by {author + "\n"}
          </Text>
          <Text style={styles.dateText}>
            {date}
          </Text>
        </Text>
        <FilledImage image={image}></FilledImage>
        <Text style={styles.baseText}>
          <Text style={styles.captionText}>
            {caption + "\n"}
          </Text>
          <Text style={styles.articleText}>
            {article + "\n"}
          </Text>
        </Text>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'white'
  },
  baseText: {

  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateText: {
    textAlign: "center"
  },
  authorText: {
    textAlign: "center"
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  captionText: {

  },
  articleText: {

  },
});
