import React from "react";
import firebase from 'firebase';
import { View } from "react-native";
import Login from "./components/LoginForm";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  componentDidMount() {
    console.log(store.getState())
    var config = {
      apiKey: "AIzaSyAkFBul0RUc_xp_0fXfItEhEZPxhqfogQo",
      authDomain: "nycdriver-242b0.firebaseapp.com",
      databaseURL: "https://nycdriver-242b0.firebaseio.com",
      projectId: "nycdriver-242b0",
      storageBucket: "nycdriver-242b0.appspot.com",
      messagingSenderId: "375370086590"
    };
    firebase.initializeApp(config);

  }

  render() {

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Login />
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};
