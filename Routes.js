import React, { Component } from 'react';
import { Actions, Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PlateNumber from './components/PlateNumber';
import testScreen from './components/testScreen';
import CreateAccount from './components/CreateAccount';
import DashBoard from './components/DashBoard';
import TicketDetails from './components/TicketDetails'

const Routes = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key='auth'  >
          <Scene key="login" component={LoginForm} hideNavBar />
          <Scene key="CreateAccount" component={CreateAccount} hideNavBar />
        </Scene>
        <Scene key='main' >
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
          <Scene key='ticket' initial>
          <Scene key='dashboard' component={DashBoard}  backTitle="back"/>
          <Scene key='ticketdetails' component={TicketDetails} />
        </Scene>
        </Scene>
      </Stack>
    </Router>
  )
}

export default Routes;
