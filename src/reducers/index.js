// Set up your root reducer here...
 import { combineReducers } from 'redux';

 import currentTab from './currentTab';
 
 const rootReducer = combineReducers({
     currentTab
 });
 
 export default rootReducer;