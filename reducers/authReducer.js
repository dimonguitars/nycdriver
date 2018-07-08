import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  USER_EMAIL_REQUIRED,
  USER_PASSWORD_REQUIRED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  emailRequired: false,
  passwordRequired: false,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, emailRequired: false };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, passwordRequired: false };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false}
    case USER_EMAIL_REQUIRED:
      return { ...state, emailRequired: action.payload };
    case USER_PASSWORD_REQUIRED:
      return { ... state, passwordRequired: action.payload };
    case LOGIN_USER_FAILED:
      return { ...state, user: null, error: 'Authentication Failed' };
    default:
      return state;
  }
};
