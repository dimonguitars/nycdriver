import { combineReducers } from 'redux';
import authReducer from './authReducer';
import plateReducer from './plateReducer';

export default combineReducers({
  auth: authReducer,
  plate: plateReducer
});
