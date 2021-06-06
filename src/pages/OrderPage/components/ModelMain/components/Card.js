import React from "react";
import styled from "styled-components";
import constants from "../../../../../styles/constants";
import { useDispatch } from "react-redux";
import {
  SetCar
} from "../../../../../redux/model/actions";

const CardStyle = styled.div`
  min-width: 368px;
  height: 224px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 0 0 0 ${constants.dark_gray}, 0 1px 0 0 ${constants.dark_gray},
    1px 1px 0 0 ${constants.dark_gray}, 1px 0 0 0 ${constants.dark_gray} inset,
    0 1px 0 0 ${constants.dark_gray} inset;
  :hover {
    z-index: 2;
    box-shadow: 1px 0 0 0 ${constants.main_accent},
      0 1px 0 0 ${constants.main_accent}, 1px 1px 0 0 ${constants.main_accent},
      1px 0 0 0 ${constants.main_accent} inset,
      0 1px 0 0 ${constants.main_accent} inset;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {    
   min-width:368px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    min-width: 50%;
    max-width: 73%;
    height: 160px;
  }
`;

const ModelImg = styled.img`
  width: 70%;
  max-height:70%;
  align-self: flex-end;

  margin-right: 1em;
  margin-bottom: 1em;
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
      height:70%;
      width:auto;
    }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width:auto;      
  }
`;

const Name = styled.div`
  font: 400 normal 18px/21px "Roboto", sans-serif;
  color: ${constants.main_black};
  padding-left: 16px;
  padding-top: 16px;
`;
const Cost = styled.div`
  font: 400 normal 14px/16px "Roboto", sans-serif;
  color: ${constants.dark_gray};
  padding-left: 16px;
  align-self: flex-start;
`;

function Card(props) {
  const dispatch = useDispatch();
  const getImgLink = (link) => {
    if (link.match('base64')) {
      return link
    }
    return `https://api-factory.simbirsoft1.com${link}`
  };
  const src = getImgLink(props.link)
  const handleCard=(name)=>{
   dispatch(SetCar(name))
  }
  return (
    <CardStyle onClick={()=>{handleCard(props.name)}}>
      <div>
        <Name>{props.name}</Name>
        <Cost>
          {props.costMin}-{props.costMax} {"\u20BD"}
        </Cost>
      </div>
      <ModelImg src={src} alt="model"></ModelImg>
    </CardStyle>
  );
}

export default Card;
