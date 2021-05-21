import React from "react";
import Sidebar from "../../commons/Sidebar/Sidebar";
import FormMain from "./components/FormMain/FormMain";


function Main (props) { 
    console.log(props.OrderPage)  
      return (
      <div className="wrapper">
        <Sidebar gradient={false} />        
        <FormMain orderPage={props.OrderPage} name={props.name}/>
      </div>
    );  
}

export default Main;