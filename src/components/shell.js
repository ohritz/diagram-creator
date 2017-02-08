import React from "react";
import MainTabs from "../containers/mainTabs";
import MainViewSelector from "../containers/mainViewSelector";
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
          <MainViewSelector />
        </div>
      </div>
    </div>
  );
};

export default Shell;
