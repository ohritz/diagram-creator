import * as React from 'react';
import { connect } from 'react-redux';
import InformationPanel from '../components/informationPanel';
import ColumnSettingShell from '../components/colSettingShell';
import DataEntry from './dataEntry';

let viewMap = {
  '1': <InformationPanel />,
  '2': <DataEntry />,
  '4': <ColumnSettingShell />
};

import { MAIN } from '../constants/tabLevels';

interface MainViewSelectorProps {
  currentTab?: string;
}

class MainViewSelector extends React.Component<MainViewSelectorProps, {}> {
  static propTypes = {
    currentTab: React.PropTypes.string.isRequired
  }

  render() {
    return (
      viewMap[this.props.currentTab]
    );
  };
};


function mapStateToProps(state) {
  return { currentTab: state.currentTab[MAIN] };
}

export default connect(mapStateToProps)(MainViewSelector);
