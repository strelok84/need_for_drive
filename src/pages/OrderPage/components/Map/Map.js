import React from "react";
import "./_map.scss";
import Sidebar from "../../../mutual_components/Sidebar/Sidebar";
import Map from "./Map";


class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Map />
      </div>
    );
  }
}

export default Main;
