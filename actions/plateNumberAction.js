import firebase from 'firebase';
import { SAVE_PLATE_NUMBER, SAVE_PLATE_NUMBER_FAILED } from './types';

export const storePlateNumber = plateNumber => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/platenumber`)
      .push(plateNumber)
      .then(() => {
        dispatch({ type: SAVE_PLATE_NUMBER, payload: plateNumber });
      })
      .catch((error) => storePlateNumberFailed(error, dispatch));
  };
};

const storePlateNumberFailed = (error, dispatch) => {
  return {
    type: SAVE_PLATE_NUMBER_FAILED,
    payload: error
  };
};
