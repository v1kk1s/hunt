import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { globalStyles, seriousCat } from '../../constants';

class Meme extends Component {
  static propTypes = {
    img: PropTypes.number.isRequired,
  };

  static defaultProps = {
    img: seriousCat,
  };

  onNextPress = () => Actions.question();

  render() {
    const { img } = this.props;

    return (
      <ScrollView contentContainerStyle={globalStyles.container}>

        <Image
          style={styles.meme}
          source={img}
        />

        <TouchableOpacity
          style={globalStyles.btn}
          onPress={this.onNextPress}
        >
          <Text>Вжууух!</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Meme;

const styles = StyleSheet.create({
  meme: {
    width: '100%',
    marginBottom: 10,
  },
});
