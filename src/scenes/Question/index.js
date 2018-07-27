import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { seriousCat } from '../../constants';

class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
  };

  static defaultProps = {
    question: {
      text: 'Question here',
      img: seriousCat,
      answers: ['answer', 'an'],
    },
  };

  state = {
    answer: '',
  };

  handleAnswerChange = (answer) => this.setState({ answer });

  onAnswerVerify = () => {
    const { answer } = this.state;
    const { answers } = this.props.question;

    if (answers.includes(answer)) {
      // to next page
    } else {
      // animate btn wrong
    }
  };

  render() {
    const { text, img, answers } = this.props.question;
    const { answer } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.question}>{text}</Text>

        {img &&
          <Image
            source={img}
          />
        }

        <TextInput
          ref={(c) => { this.input = c; }}
          placeholder={'Type answer here!'}
          blurOnSubmit
          onChangeText={this.handleAnswerChange}
          value={answer}
          returnKeyType={'done'}
          underlineColorAndroid={'transparent'}
        />

        <TouchableOpacity
          onPress={this.onAnswerVerify}
        >
          <Text>Verify answer!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Question;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
