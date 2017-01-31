import React from 'react';
import Tabs from '../containers/mainTabs';
import MainPanel from '../containers/mainPanel';
const Shell = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12"><Tabs/></div>
      </div>
      <div className="row"><div className="col-md-12">
        <MainPanel/>
      </div></div>
    </div>
  );
};

export default Shell;
