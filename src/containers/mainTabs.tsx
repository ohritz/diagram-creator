import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/changeTabActions";
import {MAIN} from '../constants/tabLevels';

import { Nav, NavItem } from "react-bootstrap";



function changeTopLevelState(selectedTab) {
  return actions.changeTab(selectedTab, MAIN);
}

const MainTabs = props => {
  return (
    <Nav
      bsStyle="tabs"
      activeKey={props.currentTab}
      onSelect={props.actions.changeTopLevelState}
    >
      <NavItem eventKey={"1"}>Infomation</NavItem>
      <NavItem eventKey={"2"}>Datainmatning</NavItem>
      <NavItem eventKey={"3"}>Inställningar</NavItem>
      <NavItem eventKey={"4"}>Kolumninställningar</NavItem>
    </Nav>
  );
};

MainTabs.propTypes = {
  actions: PropTypes.object.isRequired,
  currentTab: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return { currentTab: state.currentTab[MAIN]};
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({changeTopLevelState}, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTabs);
