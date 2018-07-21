import React from 'react';
import FitImage from 'react-native-fit-image';
import { Dimensions, Image, Text, StyleSheet, View } from 'react-native';

export default class FilledImage extends React.Component {

  render() {
    const {
      image
    } = this.props;

    return (
      <FitImage
        source={{uri: image}}>
      </FitImage>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch"
  },
  cover: {
      flex: 1,
      width: null,
      height: null
  }
});
