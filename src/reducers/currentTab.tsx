import {
  CHANGE_TAB
} from '../constants/actionTypes';
import inititalState from './initialState';
import objectAssign from 'object-assign';

export default function currentTab(state = inititalState.currentTab, action) {
  switch (action.type) {
    case CHANGE_TAB: 
      return objectAssign({}, state, action.tab);    
    default:
      return state;
  }

}
