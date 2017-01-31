import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/changeTabActions';

import {mapTabStateToTopLevel} from '../utils/tabStateHelpers';
import { Nav, NavItem } from 'react-bootstrap';

const Tabs = (props) => {
return (
  <Nav bsStyle="tabs" activeKey={props.activeTab} onSelect={props.actions.changeTab}>
    <NavItem eventKey={'1.0'} >Infomation</NavItem>
    <NavItem eventKey={'2.0'} >Data Entry</NavItem>
    <NavItem eventKey={'3.0'} >General Settings</NavItem>
    <NavItem eventKey={'4.0'} >Advanced Settings</NavItem>
  </Nav>
);
};

Tabs.propTypes = {
    actions: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired
}

function mapStateToProps (state) {
    return {
        activeTab: mapTabStateToTopLevel(state.currentTab)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);