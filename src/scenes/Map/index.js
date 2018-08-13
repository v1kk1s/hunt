import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { globalStyles } from '../../constants';
import { questions } from '../../configs/questions';

class Map extends Component {
  static propTypes = {
    currentBlockQuestion: PropTypes.number.isRequired,
    currentBlock: PropTypes.number.isRequired,
  };

  onNextPress = () => {
    const { currentBlock, currentBlockQuestion } = this.props;
    Actions.question({ questionBlock: questions[currentBlock], currentQuestion: currentBlockQuestion });
  };

  render() {
    return (
      <View style={globalStyles.container}>

        <View style={styles.map}>

        </View>

        <TouchableOpacity
          onPress={this.onNextPress}
          style={globalStyles.btn}
        >
          <Text>Next location -></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  currentBlockQuestion: state.main.currentBlockQuestion,
  currentBlock: state.main.currentBlock,
});

export default connect(
  mapStateToProps,
)(Map);

const styles = StyleSheet.create({
  map: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
