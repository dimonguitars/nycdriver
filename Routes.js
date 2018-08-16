import React, { Component } from 'react';
import {
  Actions,
  Scene,
  Router,
  Stack,
  Drawer,
  Tabs
} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PlateNumber from './components/PlateNumber';
import Settings from './components/Settings';
import CreateAccount from './components/CreateAccount';
import DashBoard from './components/DashBoard';
import TicketDetails from './components/TicketDetails';
import FetchTickets from './components/FetchTickets';
//
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const Routes = () => {
  const TabIcon = ({ title, name }) => (
    <View>
      <Text style={{ color: 'black' }}>{title}</Text>
      <Icon name={name} />
    </View>
  );
  return (
    <Router>
      <Scene key="root" hideNavBar >
        <Scene key="auth"  initial>
          <Scene key="login" title="Sign Up" component={LoginForm} hideNavbar />
          <Scene key="CreateAccount" title="Create Account" BackTitle component={CreateAccount} />
        </Scene>
        <Scene key="main"  hideNavbar hideBackTitle>
          <Scene title="NYCdriver" key="platenumber" component={PlateNumber} />
          <Scene title="Settings" key="settings" component={Settings} />
          <Scene key="dashboard" component={DashBoard} hideBackTitle />
          <Scene key="ticketdetails" initial component={TicketDetails} />
          <Scene key="fetchtickets" component={FetchTickets} />
          <Tabs
            initial
            key="tabs"
            tabs
            tabBarStyle={{ backgroundColor: '#ffff' }}
          >
            <Scene
              icon={TabIcon}
              name="home"
              tabBarLabel="Home"
              component={DashBoard}
            />
            <Scene
              icon={TabIcon}
              name="menu"
              tabBarLabel="Account"
              component={Settings}
            />
          </Tabs>
        </Scene>
      </Scene>
    </Router>
  );
};

export default Routes;
