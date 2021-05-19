import React from "react";
import "./orderPage.scss";
import Sidebar from "../../commons/Sidebar/Sidebar";
import FormMain from "./components/FormMain/FormMain";


class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar gradient={false} />        
        <FormMain orderPage="AddMain" name='add'/>
      </div>
    );
  }
}

export default Main;