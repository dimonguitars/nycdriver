import firebase from 'firebase';
import axios from 'axios';
import { SAVE_PLATE_NUMBER, SAVE_PLATE_NUMBER_FAILED, FETCH_TICKETS } from './types';

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


export const fetchTickets = (plateNumber) => async dispatch => {
    const tickets = await axios.get(`https://data.cityofnewyork.us/resource/uvbq-3m68.json?plate=${plateNumber}`)
    dispatch({ type: FETCH_TICKETS, payload: tickets})
  }
