import React from 'react';
import { Image, View } from 'react-native';
import FilledImage from '../components/FilledImage';
import { loadApp } from '../lib/Fetch';

class LoadingScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(150,50,150)',
              position: 'absolute', top: 0, bottom: 0, left: 0, right: 0
            }}>
        <Image source={require("../lib/loading.gif")}/>
      </View>
    );
  }
}

export default LoadingScreen;
