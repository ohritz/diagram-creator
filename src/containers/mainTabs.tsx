import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/changeTabActions";
import { MAIN } from '../constants/tabLevels';

import { Nav, NavItem } from "react-bootstrap";



function changeTopLevelState(selectedTab: string) {
  return actions.changeTab(selectedTab, MAIN);
}


export interface MainTabsProps {
  currentTab?: string;
  actions?: any;
}

export interface MainTabsState {
  currentTab: string;
}

class MainTabs extends React.Component<MainTabsProps, MainTabsState> {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    currentTab: React.PropTypes.string.isRequired
  };
  render() {
    const {currentTab, actions} = this.props;
    return (
      <Nav
        bsStyle="tabs"
        activeKey={currentTab}
        onSelect={actions.changeTopLevelState}
      >
        <NavItem eventKey={"1"}>Infomation</NavItem>
        <NavItem eventKey={"2"}>Datainmatning</NavItem>
        <NavItem eventKey={"3"}>Inställningar</NavItem>
        <NavItem eventKey={"4"}>Kolumninställningar</NavItem>
      </Nav>
    );
  }
};

function mapStateToProps(state) {
  return { currentTab: state.currentTab[MAIN] };
}

function mapDispatchToProps(dispatch: Dispatch<{ actions }>) {
  return { actions: bindActionCreators({ changeTopLevelState }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTabs);
