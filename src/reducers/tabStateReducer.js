import {
  CHANGE_ACTIVE_TAB
} from '../constants/actionTypes';
import inititalState from './initialState';
// import objectAssign from 'object-assign';

export default function tabStateReducer(state = inititalState.currentTab, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_TAB:
      return action.tab;    
    default:
      return state;
  }

}
