import { combineReducers } from 'redux';
import tabReducer from './tab/tabReducer';

const reducers = {
  tabReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;