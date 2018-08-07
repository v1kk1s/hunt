import {
  StyleSheet,
} from 'react-native';

import seriousCatImg from './assets/img/seriousCat.png';
import birthdayCatImg from './assets/img/birthdayCat.png';

export const seriousCat = seriousCatImg;
export const birthdayCat = birthdayCatImg;

export const globalStyles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: '#3a84a5',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    color: '#0f1c29',
  },
});;