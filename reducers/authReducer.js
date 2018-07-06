import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
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
  loading: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, user: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: true };
    case USER_EMAIL_REQUIRED:
      return { ...state, emailRequired: action.payload };
    case USER_PASSWORD_REQUIRED:
      return { ... state, passwordRequired: action.payload, emailRequired: true };
    case LOGIN_FAILED:
      return { ...state, user: null, error: 'Authentication Failed' };
    default:
      return state;
  }
};
