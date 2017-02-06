import * as types from '../constants/actionTypes';

export function changeTopLevelState(selectedKey) {
    return {
        type: types.CHANGE_TOPLEVEL_TAB,
        tab: selectedKey        
    };    
}

export function changeSubLevelState(selectedKey) {
    return {
        type: types.CHANGE_SUBLEVEL_TAB,
        tab: selectedKey        
    };    
}
