import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Main from '../Main';
import Rules from '../Rules';

const RouterWithRedux = connect()(Router);

const Routes = () => (
  <RouterWithRedux>
    <Scene key={'root'}>
      <Scene key={'main'} component={Main} initial />
      <Scene key={'rules'} component={Rules} />
    </Scene>
  </RouterWithRedux>
);

export default Routes;