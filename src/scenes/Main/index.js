import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { globalStyles } from '../../constants';

class Main extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Hello, Kityk!</Text>
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
});
