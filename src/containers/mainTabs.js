import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/changeTabActions";

// import { mapTabStateToTopLevel } from "../utils/tabStateHelpers";
import { Nav, NavItem } from "react-bootstrap";

const MainTabs = props => {
  return (
    <Nav
      bsStyle="tabs"
      activeKey={props.activeTab}
      onSelect={props.actions.changeTopLevelState}
    >
      <NavItem eventKey={"1"}>Infomation</NavItem>
      <NavItem eventKey={"2"}>Data Entry</NavItem>
      <NavItem eventKey={"3"}>General Settings</NavItem>
      <NavItem eventKey={"4"}>Advanced Settings</NavItem>
    </Nav>
  );
};

MainTabs.propTypes = {
  actions: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return { activeTab: state.currentTab.level1 };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTabs);
