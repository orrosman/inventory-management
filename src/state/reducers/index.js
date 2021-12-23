import { combineReducers } from 'redux';
import inventoryReducer from './inventoryReducer';
import userReducer from './userReducer';

export default combineReducers({ inventoryReducer, userReducer });
