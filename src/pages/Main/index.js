import React from 'react';
import "../Main/index.scss"

class Main extends React.Component{
  render(){
    return(
      <div className="wrapper">
        <nav className="sidebar"></nav>
        <div className="main"></div>
        <div className="slider"></div>
      </div>
    )
  }
}

export default Main