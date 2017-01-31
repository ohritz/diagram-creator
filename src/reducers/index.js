// Set up your root reducer here...
 import { combineReducers } from 'redux';

 import tabStateReducer from './tabStateReducer';
 
 const rootReducer = combineReducers({
     currentTab: tabStateReducer
 });
 
 export default rootReducer;