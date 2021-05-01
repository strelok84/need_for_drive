import React from "react";
import "./_order_page.scss";
import Sidebar from "../mutual_components/Sidebar/Sidebar";
import Order_header from "./components/Order_header/Order_header";


class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Order_header />
      </div>
    );
  }
}

export default Main;
