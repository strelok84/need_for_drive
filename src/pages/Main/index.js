import React from 'react';
import "../Main/index.scss";
import Sidebar from "../../components/Sidebar/Sidebar"

class Main extends React.Component{
  render(){
    return(
      <div className="wrapper">
        <Sidebar />
        <div className="main"></div>
        <div className="slider"></div>
      </div>
    )
  }
}

export default Main