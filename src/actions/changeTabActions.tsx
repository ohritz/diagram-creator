import * as types from '../constants/actionTypes';

interface TabHolder  {
  [key: string]: string;
}

export function changeTab(selectedTab: string, level: string) {
  var tab: TabHolder = {};
  tab[level] = selectedTab;
  return {
    type: types.CHANGE_TAB,
    tab: tab
  };
}
