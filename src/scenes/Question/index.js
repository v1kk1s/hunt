import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';

import { setCurrentBlockQuestion, setCurrentBlock } from '../Main/mainActions';
import { globalStyles } from '../../constants';
import { questions } from '../../configs/questions';

class Question extends Component {
  static propTypes = {
    setCurrentBlockQuestion: PropTypes.func.isRequired,
    setCurrentBlock: PropTypes.func.isRequired,
    currentBlockQuestion: PropTypes.number.isRequired,
    currentBlock: PropTypes.number.isRequired,
  };

  state = {
    answer: '',
  };

  handleAnswerChange = (answer) => this.setState({ answer });

  onAnswerVerify = () => {
    const { answer } = this.state;
    const { currentBlock, currentBlockQuestion } = this.props;

    const questionBlock = questions[currentBlock];
    const nextQuestionNum = currentBlockQuestion + 1;
    const questionsNum = questionBlock.questions.length;
    const doesNextBlockExist = questions.length > currentBlock + 1;
    const doesNextQuestionExist = questionsNum - 2 >= currentBlockQuestion ;

    if (!doesNextBlockExist && !doesNextQuestionExist) {
      Actions.gallery();
      return;
    }

    const { answers } = questionBlock.questions[currentBlockQuestion];

    if (answers.includes(answer.toLocaleLowerCase())) {

      if (questionsNum === nextQuestionNum) {
        this.props.setCurrentBlock(currentBlock + 1);
        this.props.setCurrentBlockQuestion(0);
        Actions.map();
      } else {
        if (doesNextBlockExist || doesNextQuestionExist) {
          if (nextQuestionNum > currentBlockQuestion) {
            this.props.setCurrentBlockQuestion(nextQuestionNum);
          }
          this.setState({ answer: '' });
          Keyboard.dismiss();
        }
      }

    } else {
      this.shakeButton();
    }
  };

  shakeButton = () => {
    this.btn.shake(2000);
  };

  popQuestion = () => {
    const { currentBlockQuestion, currentBlock } = this.props;
    this.props.setCurrentBlockQuestion(currentBlockQuestion - 1);

    this.setState({ answer: '' }, () => {
      Actions.question();
    });
  };

  render() {
    const { currentBlockQuestion, currentBlock } = this.props;
    const questionBlock = questions[currentBlock];
    const { text, img } = questionBlock.questions[currentBlockQuestion];
    const { answer } = this.state;

    const showBackBtn = currentBlockQuestion > 0;

    return (
      <KeyboardAvoidingView style={globalStyles.container} behavior='position' keyboardDissmisMode='on-drag'>
        {showBackBtn &&
          <TouchableOpacity onPress={this.popQuestion}>
            <Text> До попереднього питання </Text>
          </TouchableOpacity>
        }
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
          onPress={this.onAnswerVerify}
        >
          <Animatable.View
            ref={(c) => { this.btn = c; }}
            style={globalStyles.btn}
          >
            <Text>Verify answer!</Text>
          </Animatable.View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({
  currentBlockQuestion: state.main.currentBlockQuestion,
  currentBlock: state.main.currentBlock,
});

export default connect(
  mapStateToProps,
  {
    setCurrentBlock,
    setCurrentBlockQuestion,
  },
)(Question);

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 400,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  btnWrong: {
    backgroundColor: 'red',
  },
});
