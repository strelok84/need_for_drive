import React from "react";
import "./index.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Map from "../../components/Map/Map";


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
