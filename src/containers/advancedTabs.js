import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/changeTabActions';


import { Nav, NavItem } from 'react-bootstrap';

const SubTabs = (props) => {
return (
  <Nav bsStyle="tabs" activeKey={props.activeTab} onSelect={props.actions.changeSubLevelState}>
    <NavItem eventKey={'1'} >Sub 1</NavItem>
    <NavItem eventKey={'2'} >Sub 2</NavItem>
    <NavItem eventKey={'3'} >Sub 3</NavItem>    
  </Nav>
);
};

SubTabs.propTypes = {
    actions: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired
}

function mapStateToProps (state) {
    return {
        activeTab: state.currentTab.level2
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubTabs);