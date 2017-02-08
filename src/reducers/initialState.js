import * as tabLevels from '../constants/tabLevels';

var initialState = {
  currentTab: {}
};

initialState.currentTab[tabLevels.MAIN] = '1';
initialState.currentTab[tabLevels.AXIS_OPTIONS] = '1';

export default initialState;
