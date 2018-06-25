import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './types';

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
      // .catch(
      //   firebase
      //     .auth()
      //     .createUserWithEmailAndPassword(email, password)
      //     .then(user => loginSucces(dispatch, user))
      //     .catch(() => loginUserFailed(dispatch, error))
      // );
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
    type: LOGIN_SUCCESS,
    payload: user.user
  });
};
