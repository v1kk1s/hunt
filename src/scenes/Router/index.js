import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Main from '../Main';
import Rules from '../Rules';
import Question from '../Question';
import Meme from '../Meme';
import Greeting from '../Greeting';
import Map from '../Map';
import Gallery from '../Gallery';

const RouterWithRedux = connect()(Router);

const Routes = () => (
  <RouterWithRedux>
    <Scene key={'root'}>
      <Scene key={'main'} component={Main} initial hideNavBar={true} />
      <Scene key={'rules'} component={Rules} hideNavBar={true} />
      <Scene key={'question'} component={Question} hideNavBar={true} />
      <Scene key={'meme'} component={Meme} hideNavBar={true}/>
      <Scene key={'greeting'} component={Greeting} hideNavBar={true}/>
      <Scene key={'map'} component={Map} hideNavBar={true} />
      <Scene key={'gallery'} component={Gallery} hideNavBar={true} />
    </Scene>
  </RouterWithRedux>
);

export default Routes;