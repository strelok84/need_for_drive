import React from "react";
import "./order_page.scss";
import Sidebar from "../../commons/Sidebar/Sidebar";
import Map from "./components/Map/Map";

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
