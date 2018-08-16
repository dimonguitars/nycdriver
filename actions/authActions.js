import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  USER_EMAIL_REQUIRED,
  USER_PASSWORD_REQUIRED,
  CREATING_USER_ACCOUNT,
  USER_ACCOUNT_CREATED,
  PASSWORD_VALIDATE,
  CREATE_ACCOUNT_SCREEN
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

export const PasswordValidate = passValidate => {
  return {
    type: PASSWORD_VALIDATE,
    payload: passValidate
  }
}

export const loginUser = ({ email, password }) => {
  return dispatch => {
    if(!email){
      dispatch({ type: USER_EMAIL_REQUIRED, payload: 'Please enter email'})
    }
    else if (!password) {
      dispatch({ type: USER_PASSWORD_REQUIRED, payload: "Please enter password"})
    }
    else {
      dispatch({ type: LOGIN_USER})
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSuccess(dispatch, user))
          .catch((error) => loginUserFailed(dispatch, error))
    }
  }

};

const loginUserFailed = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAILED,
    payload: error.message
  });
};

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user.user
  });
Actions.tabs();
};


export const createUserAccount = ({ email, password }) => {
  return dispatch => {
      ({type: CREATING_USER_ACCOUNT})
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => accountCreated(dispatch, user))
       .catch((error) => loginUserFailed(dispatch, error))
  }
}

 export const accountCreated = (dispatch, user) => {
  dispatch({
    type: USER_ACCOUNT_CREATED,
    payload: "Account created!"
  })
  Actions.pop()
}

export const openCreateAccountScreen = () => {
  return dispatch => {
     dispatch({type: CREATE_ACCOUNT_SCREEN, payload: ""})
     Actions.CreateAccount();
  };
}
