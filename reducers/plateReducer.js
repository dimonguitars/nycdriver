import { SAVE_PLATE_NUMBER, SAVE_PLATE_NUMBER_FAILED } from '../actions/types';

const INITIAL_STATE = {
  plateNumber: '',
  error:''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case SAVE_PLATE_NUMBER:
      return { ...state, plateNumber: action.payload };
    case SAVE_PLATE_NUMBER_FAILED:
      return { ...state, error: action.payload, plateNumber:''}
    default:
      return state;
  }
};
