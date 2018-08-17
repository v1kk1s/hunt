import {
  StyleSheet,
} from 'react-native';

import seriousCatImg from './assets/img/seriousCat.png';
import birthdayCatImg from './assets/img/birthdayCat.png';
import underWonderImg from './assets/img/underWonder.png';
import kaffaImg from './assets/img/kaffa.png';
import ibisImg from './assets/img/ibis.png';
import noksImg from './assets/img/noks.png';
import homeImg from './assets/img/home.png';

export const seriousCat = seriousCatImg;
export const birthdayCat = birthdayCatImg;
export const underWonder = underWonderImg;
export const kaffa = kaffaImg;
export const ibis = ibisImg;
export const noks = noksImg;
export const home = homeImg;

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