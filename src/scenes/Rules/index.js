import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { globalStyles } from '../../constants';
import { rules } from '../../configs/rules';

class Rules extends Component {
  onAgree = () => Actions.question();

  render() {
    return (
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Text style={globalStyles.title}>Правила</Text>

        {rules.map((rule, i) => (
          <Text
            key={i}
            style={styles.rule}
          >
            {`${i + 1}. ${rule}`}
          </Text>
        ))}

        <TouchableOpacity
          style={[globalStyles.btn, styles.btn]}
          onPress={this.onAgree}
        >
          <Text>Ready? Start!</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Rules;

const styles = StyleSheet.create({
  rule: {
    fontSize: 18,
    marginBottom: 10,
  },
  btn: {
    marginBottom: 20,
  },
});
