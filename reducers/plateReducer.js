import { PLATE_NUMBER_ENTER } from '../actions/types';

const INITIAL_STATE = {
  plateNumber: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLATE_NUMBER_ENTER:
      return { ...state, plateNumber: action.payload };
    default:
      return state;
  }
};
