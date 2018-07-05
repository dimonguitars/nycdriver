import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged = email => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = pass => {
  return {
    type: PASSWORD_CHANGED,
    payload: pass
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginSuccess(dispatch, user))
        .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginSuccess(dispatch, user))
            .catch((error) => loginUserFailed(dispatch, error))
      );
  }

};

const loginUserFailed = (dispatch, error) => {
  dispatch({
    type: LOGIN_FAILED,
    payload: error
  });
};

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER,
    payload: user.user
  });
Actions.main();
};
