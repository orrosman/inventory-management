import { createStore } from 'redux';
import { fullEquipmentList } from '../data/db';
import inventoryReducer from './reducers/inventoryReducer';

const store = createStore(inventoryReducer, { inventory: fullEquipmentList });

export default store;
