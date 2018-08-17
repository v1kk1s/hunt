import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { globalStyles } from '../../constants';
import { questions } from '../../configs/questions';

class Map extends Component {
  static propTypes = {
    currentBlockQuestion: PropTypes.number.isRequired,
    currentBlock: PropTypes.number.isRequired,
  };

  static defaultProps = {
    currentBlock: 0,
  };

  onNextPress = () => {
    const { currentBlock, currentBlockQuestion } = this.props;
    Actions.question({ questionBlock: questions[currentBlock], currentQuestion: currentBlockQuestion });
  };

  render() {
    const { currentBlock } = this.props;
    const questionBlock = questions[currentBlock - 1];
    const { img, address } = questionBlock;
    return (
      <View style={globalStyles.container}>

        <View style={styles.map}>
          <Image
            style={styles.img}
            source={img}
          />
        </View>

        <TouchableOpacity
          onPress={this.onNextPress}
          style={globalStyles.btn}
        >
          <Text>До наступних питань -></Text>
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
  img: {
    width: '100%',
    height: '100%',
  },
});
