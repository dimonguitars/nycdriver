import firebase from 'firebase';
import { STORE_PLATE_NUMBER } from './types';

export const storePlateNumber = plateNumber => {
  const { currentUser } = firebase.auth();
  console.log(currentUser)
  return (dispatch) => {
      firebase
        .database()
        .ref(`/users/${currentUser.uid}/platenumber`)
        .push(plateNumber)
        .then(() => {
          dispatch({ type: STORE_PLATE_NUMBER, payload: plateNumber });
        });

  };
};
