import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN,
  LOGIN_SUCCES,
  LOGIN_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case USER_LOGIN:
      return { ...state, user: action.payload };
    case LOGIN_SUCCES:
      return { ...state, user: action.payload };
    case LOGIN_FAILED:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
