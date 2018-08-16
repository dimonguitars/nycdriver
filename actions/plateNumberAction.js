import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { SAVE_PLATE_NUMBER_SUCCESS,
        SAVE_PLATE_NUMBER_FAILED,
        FETCH_TICKETS,
        LOAD_PLATE_NUMBER_FROM_DB,
        ON_PLATE_NUMBER_ENTER,
        SAVING_PLATE_NUMBER
 } from './types';

export const storePlateNumber = plateNumber => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    dispatch({ type: SAVING_PLATE_NUMBER });
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/platenumber`)
      .push(plateNumber)
      .then(() => {
        dispatch(() => storePlateNumberSuccess(plateNumber, dispatch))
      })
      .catch((error) => storePlateNumberFailed(error, dispatch));
  };
};

const storePlateNumberSuccess = (plateNumber, dispatch) => {
   dispatch({
    type: SAVE_PLATE_NUMBER_SUCCESS,
    payload: plateNumber
  })
  // Actions.tabs()
}
const storePlateNumberFailed = (error, dispatch) => {
  return {
    type: SAVE_PLATE_NUMBER_FAILED,
    payload: error
  };
};

export const loadPlateNumberFromDb = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/platenumber`)
      .on('child_added', snapshot => {
        dispatch({ type: LOAD_PLATE_NUMBER_FROM_DB, payload: snapshot.val() });
      });
  };

}


export const fetchTickets = (plateNumber) => async dispatch => {
    const tickets = await axios.get(`https://data.cityofnewyork.us/resource/uvbq-3m68.json?plate=${plateNumber}`)
    dispatch({ type: FETCH_TICKETS, payload: tickets})
    Actions.fetchtickets();
  }

  export const enterPlateNumber = (plate) => {
    return {
      type: ON_PLATE_NUMBER_ENTER,
      payload: plate
    }
  }
