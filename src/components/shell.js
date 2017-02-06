import React from "react";
import MainTabs from "../containers/mainTabs";
import MainPanel from "../containers/mainPanel";
const Shell = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <MainTabs />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <MainPanel />
        </div>
      </div>
    </div>
  );
};

export default Shell;
