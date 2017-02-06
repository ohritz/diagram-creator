import {
  CHANGE_TOPLEVEL_TAB,
  CHANGE_SUBLEVEL_TAB
} from '../constants/actionTypes';
import inititalState from './initialState';
// import objectAssign from 'object-assign';

export default function tabStateReducer(state = inititalState.currentTab, action) {
  switch (action.type) {
    case CHANGE_TOPLEVEL_TAB:
      return Object.assign({}, state, {
        level1: action.tab
      });
    case CHANGE_SUBLEVEL_TAB:
      return Object.assign({}, state, {
        level2: action.tab
      });
    default:
      return state;
  }

}
