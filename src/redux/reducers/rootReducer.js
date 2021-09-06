import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import ScoreReducer from './scoreReducer';

const rootReducer = combineReducers({ fetchReducer, ScoreReducer });

export default rootReducer;
