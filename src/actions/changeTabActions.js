import * as types from '../constants/actionTypes';

export function changeTab(selectedKey) {
    return {
        type: types.CHANGE_ACTIVE_TAB,
        tab: selectedKey        
    }
}