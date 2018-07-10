import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  USER_EMAIL_REQUIRED,
  USER_PASSWORD_REQUIRED,
  CREATING_USER_ACCOUNT,
  USER_ACCOUNT_CREATED,
  PASSWORD_VALIDATE
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  passValidate: false,
  user: null,
  emailRequired: false,
  passwordRequired: false,
  error: '',
  loading: false,
  createAccount:''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, emailRequired: false };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, passwordRequired: false };
    case LOGIN_USER:
      return { ...state, user: null, passwordRequired: false,
         emailRequired: false, loading: true  };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false}
    case USER_EMAIL_REQUIRED:
      return { ...state, emailRequired: action.payload };
    case USER_PASSWORD_REQUIRED:
      return { ... state, passwordRequired: action.payload };
    case PASSWORD_VALIDATE:
      return {...state, passValidate: action.payload }
    case LOGIN_USER_FAILED:
      return { ...state, user: null, error: action.payload, loading: false };
    case CREATING_USER_ACCOUNT:
      return {...state, user: '', loading: true, error:'' };
    case USER_ACCOUNT_CREATED:
      return {... state, user: '', email: '', password: '', loading: false };
    default:
      return state;
  }
};
