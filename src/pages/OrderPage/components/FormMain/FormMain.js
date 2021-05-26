import React from "react";
import OrderHeader from "../OrderHeader/OrderHeader";
import MapMain from "../MapMain/MapMain";
import ModelMain from "../ModelMain/ModelMain";
import AddMain from "../AddMain/AddMain";
import FinalMain from "../FinalMain/FinalMain";
import styled from "styled-components/macro";
import constants from "../../../../styles/constants";

export const FormMap = styled.div`
grid-column: 5/91;
  display: grid;
  grid-template-columns: repeat(86, 1fr);
  grid-template-rows: repeat(100, 1vh);
  z-index: 9;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    grid-column: 1/91;
    }
`;


function Map(props) {
  const components = {
    MapMain: MapMain,
    ModelMain:ModelMain,
    AddMain:AddMain,
    FinalMain:FinalMain
  };
  const Tagname = components[props.orderPage]
  return (
    <FormMap>
      <OrderHeader name={props.name} />
      <Tagname />
    </FormMap>
  );
}

export default Map;
