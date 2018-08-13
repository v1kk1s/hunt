import React, {Component} from 'react';
import {
  Text,
  ScrollView,
} from 'react-native';

import { globalStyles } from '../../constants';

class Gallery extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Text style={globalStyles.title}>Gallery page</Text>
      </ScrollView>
    );
  }
}

export default Gallery;
