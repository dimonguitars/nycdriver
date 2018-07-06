import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_EMAIL_REQUIRED,
  USER_PASSWORD_REQUIRED
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
    if(!email){
      dispatch({ type: USER_EMAIL_REQUIRED, payload: 'Please enter email'})
    }
    else if (!password) {
      dispatch({ type: USER_PASSWORD_REQUIRED, payload: "Please enter password"})
    }
    else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSuccess(dispatch, user))
          .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginSuccess(dispatch, user))
              .catch((error) => loginUserFailed(dispatch, error))
        );
    }
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
