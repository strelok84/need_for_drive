import React from "react";
import "../Main/main.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Middle from "../../components/Middle/Middle";
import Slider from "../../components/Slider/Slider";

function Main() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Middle />
      <Slider />
    </div>
  );
}

export default Main;
