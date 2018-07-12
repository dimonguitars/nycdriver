import { SAVE_PLATE_NUMBER, SAVE_PLATE_NUMBER_FAILED, FETCH_TICKETS } from '../actions/types';

const INITIAL_STATE = {
  plateNumber: '',
  error:'',
  tickets: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_PLATE_NUMBER:
      return { ...state, plateNumber: action.payload };
    case SAVE_PLATE_NUMBER_FAILED:
      return { ...state, error: action.payload, plateNumber:''}
    case FETCH_TICKETS:
      return { ...state, tickets: action.payload }
    default:
      return state;
  }
};
