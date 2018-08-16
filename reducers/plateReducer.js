import {
  SAVE_PLATE_NUMBER_SUCCESS,
  SAVE_PLATE_NUMBER_FAILED, FETCH_TICKETS,
  LOAD_PLATE_NUMBER_FROM_DB,
  ON_PLATE_NUMBER_ENTER,
  SAVING_PLATE_NUMBER
 } from '../actions/types';

const INITIAL_STATE = {
  plateNumber: null,
  error: false,
  tickets: '',
  isLoading: false,
  enterPlate: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVING_PLATE_NUMBER:
      return { ...state, isLoading: true};
    case SAVE_PLATE_NUMBER_SUCCESS:
      return { ...state, plateNumber: action.payload, isLoading: true };
    case SAVE_PLATE_NUMBER_FAILED:
      return { ...state, error: action.payload, plateNumber:''}
    case FETCH_TICKETS:
      return { ...state, tickets: action.payload }
    case LOAD_PLATE_NUMBER_FROM_DB:
      return {...state, plateNumber: action.payload }
    case ON_PLATE_NUMBER_ENTER:
     return { ...state, error: true, enterPlate: action.payload }
    default:
      return state;
  }
};
