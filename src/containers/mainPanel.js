import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import  {mapTabStateToTopLevel} from '../utils/tabStateHelpers';
import InformationPanel from '../components/informationPanel';
import AdvancedShell from '../components/advancedShell';

let viewMap = {
        '1.0': <InformationPanel/>,
        '4.0': <AdvancedShell/>
    }

    function getCurrentView(key) {
        return (
            viewMap[key]
        );
    }

const MainPanel = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">{getCurrentView(props.activeTab)}</div>
      </div>
    </div>
  );
};

MainPanel.propTypes = {
    activeTab: PropTypes.string.isRequired
}

function mapStateToProps (state) {
    return {
        activeTab: mapTabStateToTopLevel(state.currentTab)
    };
}


export default connect(mapStateToProps)(MainPanel);
