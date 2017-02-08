import * as types from '../constants/actionTypes';

export function changeTab(selectedTab, level) {
  var tab = {};
  tab[level] = selectedTab;
  return {
    type: types.CHANGE_TAB,
    tab: tab
  }
}
