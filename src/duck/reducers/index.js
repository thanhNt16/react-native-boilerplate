import {combineReducers} from 'redux';
import homeReducers from '_scenes/home/duck/reducers';

const createReducer = (asyncReducers) =>
  combineReducers({
    homeReducers,
    ...asyncReducers,
  });

export default createReducer;
