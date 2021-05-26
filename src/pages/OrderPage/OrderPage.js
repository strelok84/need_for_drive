import React from "react";
import Sidebar from "../../commons/Sidebar/Sidebar";
import FormMain from "./components/FormMain/FormMain";
/* import Wrapper from "../Main/Main"; */
import styled from "styled-components/macro";
import constants from "../../styles/constants";

export const Wrapper = styled.div`
  height: 100vh;
  z-index: 8;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 16px) repeat(86, 1fr);
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    grid-template-columns: repeat(3, 16px) 17px repeat(86, 1fr);
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    grid-template-columns: repeat(4, 21.5px) repeat(86, 1fr);
  } 
`;


function Main (props) { 
    console.log(props.OrderPage)  
      return (
      <Wrapper>
        <Sidebar gradient='black' />        
        <FormMain orderPage={props.OrderPage} name={props.name}/>
      </Wrapper>
    );  
}

export default Main;