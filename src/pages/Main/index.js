import React from 'react';
import "../Main/index.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Middle from "../../components/Middle/Middle";
import Slider from "../../components/Slider/Slider"

class Main extends React.Component{
  render(){
    return(
      <div className="wrapper">
        <Sidebar />
        <Middle />
        <Slider />
      </div>
    )
  }
}

export default Main