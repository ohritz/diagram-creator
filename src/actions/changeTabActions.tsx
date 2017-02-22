import * as types from '../constants/actionTypes';

export function changeTab(selectedTab: string, level: string) {
  var tab = {};
  tab[level] = selectedTab;
  return {
    type: types.CHANGE_TAB,
    tab: tab
  }
}
