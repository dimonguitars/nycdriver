import { STORE_PLATE_NUMBER } from '../actions/types';

const INITIAL_STATE = {
  plateNumber: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case STORE_PLATE_NUMBER:
      return { ...state, plateNumber: action.payload };
    default:
      return state;
  }
};
