import React, { Component } from 'react';
import { Actions, Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PlateNumber from './components/PlateNumber';
import testScreen from './components/testScreen';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key='auth' initial>
          <Scene key="login" component={LoginForm} hideNavBar />
        </Scene>
        <Scene key='main'>
          <Scene
          title='NYCdriver'
          key='PlateNumber'
          component={PlateNumber}
          />
          <Scene
          title='TestScreen'
          key='testScreen'
          component={testScreen}
          />
        </Scene>
      </Stack>
    </Router>
  )
}

export default Routes;
