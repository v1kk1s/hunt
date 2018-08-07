import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { seriousCat, globalStyles } from '../../constants';

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
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Text style={globalStyles.text}>{text}</Text>

        {img &&
          <Image
            style={styles.img}
            source={img}
          />
        }

        <TextInput
          style={styles.input}
          ref={(c) => { this.input = c; }}
          placeholder={'Type answer here!'}
          blurOnSubmit
          onChangeText={this.handleAnswerChange}
          value={answer}
          returnKeyType={'done'}
          underlineColorAndroid={'transparent'}
        />

        <TouchableOpacity
          style={globalStyles.btn}
          onPress={this.onAnswerVerify}
        >
          <Text>Verify answer!</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Question;

const styles = StyleSheet.create({
  img: {
    width: '100%',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
});
