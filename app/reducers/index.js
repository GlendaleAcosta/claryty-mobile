import { combineReducers } from 'redux';
import drugReducer from './drugReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  drugReducer,
  userReducer
});

export default reducers;
