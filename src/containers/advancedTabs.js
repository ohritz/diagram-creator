import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/changeTabActions';

import {mapTabStateToSubLevel} from '../utils/tabStateHelpers';
import { Nav, NavItem } from 'react-bootstrap';

const SubTabs = (props) => {
return (
  <Nav bsStyle="tabs" activeKey={props.activeTab} onSelect={props.actions.changeTab}>
    <NavItem eventKey={'4.1'} >Sub 1</NavItem>
    <NavItem eventKey={'4.2'} >Sub 2</NavItem>
    <NavItem eventKey={'4.3'} >Sub 3</NavItem>    
  </Nav>
);
};

SubTabs.propTypes = {
    actions: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired
}

function mapStateToProps (state) {
    return {
        activeTab: mapTabStateToSubLevel(state.currentTab, '4.')
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubTabs);