import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import { globalStyles, birthdayCat } from '../../constants';

class Main extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Hello, Kityk!</Text>
        <Image
            style={styles.img}
            source={birthdayCat}
          />
        <TouchableOpacity style={globalStyles.btn}
          onPress={() => { Actions.rules() }}
        >
          <Text>Start an adventure!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 400,
    marginBottom: 10,
  },
});
