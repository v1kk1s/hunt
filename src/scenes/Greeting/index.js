import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { globalStyles } from '../../constants';

class Greeting extends Component {
  onAgree = () => Actions.rules();

  render() {
    return (
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Text style={styles.rule}>
          Мій любий Кітик!
        </Text>

        <Text style={styles.rule}>
          Так як я не вмію танцювати еротичних танців, а дарувати стараються щось таке, що вміють непогано,
          то я написала додаток, який буде твоїм вірним помічником і супровідником по сьогоднішньому дню.
          Не використовувати без інструкції!!! (див. далі)
        </Text>

        <Text style={styles.rule}>
          Хоч зараз вже і не день твого народження, а просто звичайна субота, то вітаю тебе з ще однією чудовою суботою,
          яку ти проводиш в чудовій компанії.
        </Text>

        <Text style={styles.rule}>
          Ти навчив мене, що для радості не обов'язково мати привід а для свята - дату.
        </Text>

        <Text style={styles.rule}>
          Дякую, що ти є в моєму житті.
        </Text>

        <TouchableOpacity
          style={globalStyles.btn}
          onPress={this.onAgree}
        >
          <Text>Готовий! Поїхали!</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Greeting;

const styles = StyleSheet.create({
  rule: {
    fontSize: 18,
    marginBottom: 10,
  },
});
