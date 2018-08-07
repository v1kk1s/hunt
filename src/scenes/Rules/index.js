import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { globalStyles } from '../../constants';

class Rules extends Component {
  onAgree = () => Actions.question();

  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Rules page</Text>

        <TouchableOpacity
          style={globalStyles.btn}
          onPress={this.onAgree}
        >
          <Text>Ready? Start!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Rules;

const styles = StyleSheet.create({
});
