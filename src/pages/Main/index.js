import React from 'react';
import "../Main/index.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Middle from "../../components/Middle/Middle";

class Main extends React.Component{
  render(){
    return(
      <div className="wrapper">
        <Sidebar />
        <Middle />
        <div className="slider"></div>
      </div>
    )
  }
}

export default Main