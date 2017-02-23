import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/changeTabActions';
import { AXIS_OPTIONS } from '../constants/tabLevels';

import { Nav, NavItem } from 'react-bootstrap';

function changeSubLevelState(selectedTab: string) {
    return actions.changeTab(selectedTab, AXIS_OPTIONS);
}

interface ColSettingsTabProps {
    currentTab?: string;
    actions?: any;
}

interface ColSettingsState {
    currentTab: string;
}

class ColSettingTabs extends React.Component<ColSettingsTabProps, ColSettingsState> {
    static propTypes = {
        actions: React.PropTypes.object.isRequired,
        currentTab: React.PropTypes.string.isRequired
    };

    render() {
        const {currentTab, actions} = this.props;
        return (
            <Nav bsStyle="tabs" activeKey={currentTab} onSelect={actions.changeSubLevelState}>
                <NavItem eventKey={'1'} >Filter</NavItem>
                <NavItem eventKey={'2'} >Serier</NavItem>
                <NavItem eventKey={'3'} >x-axis</NavItem>
                <NavItem eventKey={'4'} >y-axis</NavItem>
            </Nav>
        );
    }


}

interface GlobalState {
    currentTab: {
        [key: string]: string
    }
}

function mapStateToProps(state: GlobalState) {
    return {
        currentTab: state.currentTab[AXIS_OPTIONS]
    };
}

function mapDispatchToProps(dispatch: Dispatch<{ actions }>) {
    return {
        actions: bindActionCreators({ changeSubLevelState }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ColSettingTabs);
