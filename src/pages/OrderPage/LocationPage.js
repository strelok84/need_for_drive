import React from "react";
import "./orderPage.scss";
import Sidebar from "../../commons/Sidebar/Sidebar";
import FormMain from "./components/FormMain/FormMain";

function Main() {
  return (
    <div className="wrapper">
      <Sidebar gradient={false} />
      <FormMain orderPage="MapMain" name='place' />
    </div>
  );
}

export default Main;
