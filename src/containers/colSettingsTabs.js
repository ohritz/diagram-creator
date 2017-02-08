import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/changeTabActions';
import {AXIS_OPTIONS} from '../constants/tabLevels';

import { Nav, NavItem } from 'react-bootstrap';

function changeSubLevelState(selectedTab) {
    return actions.changeTab(selectedTab, AXIS_OPTIONS);
}

const ColSettingTabs = (props) => {
return (
  <Nav bsStyle="tabs" activeKey={props.currentTab} onSelect={props.actions.changeSubLevelState}>
    <NavItem eventKey={'1'} >Filter</NavItem>
    <NavItem eventKey={'2'} >Serier</NavItem>
    <NavItem eventKey={'3'} >x-axis</NavItem>    
    <NavItem eventKey={'4'} >y-axis</NavItem>    
  </Nav>
);
};

ColSettingTabs.propTypes = {
    actions: PropTypes.object.isRequired,
    currentTab: PropTypes.string.isRequired
}

function mapStateToProps (state) {
    return {
        currentTab: state.currentTab[AXIS_OPTIONS]
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators({changeSubLevelState}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ColSettingTabs);