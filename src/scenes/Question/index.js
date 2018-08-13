import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { setCurrentBlockQuestion, setCurrentBlock } from '../Main/mainActions';
import { globalStyles } from '../../constants';
import { questions } from '../../configs/questions';

class Question extends Component {
  static propTypes = {
    questionBlock: PropTypes.object.isRequired,
    setCurrentBlockQuestion: PropTypes.func.isRequired,
    setCurrentBlock: PropTypes.func.isRequired,
    currentBlockQuestion: PropTypes.number.isRequired,
    currentBlock: PropTypes.number.isRequired,
  };

  static defaultProps = {
    questionBlock: questions[0],
    currentQuestion: 0,
  };

  state = {
    answer: '',
  };

  handleAnswerChange = (answer) => this.setState({ answer });

  onAnswerVerify = () => {
    const { answer } = this.state;
    const { questionBlock, currentQuestion, currentBlock, currentBlockQuestion } = this.props;
    const { answers } = questionBlock.questions[currentQuestion];
    const nextQuestionNum = currentQuestion + 1;

    if (answers.includes(answer.toLocaleLowerCase())) {
      const questionsNum = questionBlock.questions.length;

      if (questionsNum === nextQuestionNum) {
        this.props.setCurrentBlock(currentBlock + 1);
        this.props.setCurrentBlockQuestion(0);
        Actions.map();
      } else {
        if (nextQuestionNum > currentBlockQuestion) {
          this.props.setCurrentBlockQuestion(nextQuestionNum);
        }
        Actions.question({ questionBlock: questions[0], currentQuestion: nextQuestionNum });
      }

    } else {
      this.shakeButton();
    }
  };

  shakeButton = () => {
    this.btn.shake(2000);
  };

  render() {
    const { questionBlock, currentQuestion } = this.props;
    const { text, img } = questionBlock.questions[currentQuestion];
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
          onPress={this.onAnswerVerify}
        >
          <Animatable.View
            ref={(c) => { this.btn = c; }}
            style={globalStyles.btn}
          >
            <Text>Verify answer!</Text>
          </Animatable.View>
        </TouchableOpacity>
      </ScrollView>
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
