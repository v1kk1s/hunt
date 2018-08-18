import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

import { globalStyles, mellon } from '../../constants';

class Gallery extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Image
          style={styles.img}
          source={mellon}
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 500,
    marginBottom: 10,
  },
});

export default Gallery;
