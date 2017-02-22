import React, { PropTypes } from "react";
import { connect } from "react-redux";
import InformationPanel from "../components/informationPanel";
import ColumnSettingShell from "../components/colSettingShell";
import DataEntry from './dataEntry';

let viewMap = {
  "1": <InformationPanel />,
  "2": <DataEntry />,
  "4": <ColumnSettingShell />
};

import { MAIN } from "../constants/tabLevels";

const MainViewSelector = props => {
  return (
    viewMap[props.currentTab]
  );
};

MainViewSelector.propTypes = { currentTab: PropTypes.string.isRequired };

function mapStateToProps(state) {
  return { currentTab: state.currentTab[MAIN] };
}

export default connect(mapStateToProps)(MainViewSelector);
