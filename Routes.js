import React, { Component } from 'react';
import { Actions, Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PlateNumber from './components/PlateNumber';
import testScreen from './components/testScreen';
import CreateAccount from './components/CreateAccount';
import DashBoard from './components/DashBoard';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key='auth' >
          <Scene key="login" component={LoginForm} hideNavBar />
          <Scene key="CreateAccount" component={CreateAccount} hideNavBar />
        </Scene>
        <Scene key='main' initial>
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
          <Scene key='dashboard' component={DashBoard} />
        </Scene>
      </Stack>
    </Router>
  )
}

export default Routes;
