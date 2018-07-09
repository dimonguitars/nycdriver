import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import Login from './components/LoginForm';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';
import Routes from './Routes';

const store = createStore(reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk)));

export default class App extends React.Component {
  componentDidMount() {
    var config = {
      apiKey: 'AIzaSyAkFBul0RUc_xp_0fXfItEhEZPxhqfogQo',
      authDomain: 'nycdriver-242b0.firebaseapp.com',
      databaseURL: 'https://nycdriver-242b0.firebaseio.com',
      projectId: 'nycdriver-242b0',
      storageBucket: 'nycdriver-242b0.appspot.com',
      messagingSenderId: '375370086590'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};
