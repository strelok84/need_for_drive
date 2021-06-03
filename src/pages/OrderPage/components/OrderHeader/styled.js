import styled from "styled-components/macro";
import constants from "../../../../styles/constants";
import { Link } from "react-router-dom";

export const FormHeader = styled.div`
  grid-column: 1/87;
  grid-row: 1/17;
  border-bottom: 1px solid ${constants.light_gray};
  display: grid;
  grid-template-rows: 3fr 1fr;
 
  @media (max-width: ${constants.screen_tablet - 1}px) {
    grid-column: 1/-1;
    grid-template-rows: 3fr 1fr;
    border: 0;
    grid-row: 1/30;
    grid-template-rows: auto;
    position: fixed;
    background-color:#fff;
    width:100%;
    z-index:11;
  }
`;

export const Wrapper = styled.div`
  grid-row: 1/2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${constants.light_gray};
  @media (max-width: ${constants.screen_tablet - 1}px) {
    align-items: flex-start;
    margin-top: 20px;
    border: 0;
  }
`;

export const Slogan = styled.div`
  width: 1248px;
  display: flex;
  justify-content: space-between;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    justify-content: space-between;
  }
`;
export const FormHeaderSlogan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: 700 normal 30px/35px "Roboto", sans-serif;
  color: ${constants.main_accent};
  @media (max-width: ${constants.screen_tablet - 1}px) {
    font: 700 normal 24px/24px "Roboto", sans-serif;
    margin-left: 15%;
  }
`;

export const FormHeaderSity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: 400 normal 14px "Roboto", sans-serif;
  color: ${constants.dark_gray};
  @media (max-width: ${constants.screen_tablet - 1}px) {
    font: 400 normal 12px "Roboto", sans-serif;
    padding-right: 24px;
  }
`;

export const FormHeaderMarker = styled.img`
  margin-right: 7.5px;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-right: 5px;
  }
`;
export const BdkrWrapper = styled.div`
  grid-row: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    border-bottom: 1px solid ${constants.light_gray};
    border-top: 1px solid ${constants.light_gray};
  }
`;

export const LaneBdkr = styled.div`
  width: 1248px;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 100%;
    padding-left: 10%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 100%;
    padding-left: 10%;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width: 100%;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    a{
      margin-top:8px;
    }
    img {
      display: none;
    }
  }
`;
export const Place = styled(Link)`
  text-decoration: none;
  margin-right: 16px;
  font: 700 normal 14px/16px "Roboto", sans-serif;
  color: ${constants.dark_gray};
  &.now {
    color: ${constants.main_accent};
  }
  &.confirm {
    display: none;
  }
  &.hidden {
    @media (max-width: ${constants.screen_tablet - 1}px) {
      display: none;
    }
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-left: 24px;
  }
  :hover {
    color: ${constants.main_accent};
  }
  :active {
    color: ${constants.main_accent};
  }
`;
export const Model = styled(Link)`
  text-decoration: none;
  margin-right: 16px;
  font: 700 normal 14px/16px "Roboto", sans-serif;
  color: ${constants.dark_gray};
  margin-left: 16px;
  &.now {
    color: ${constants.main_accent};
  }
  &.confirm {
    display: none;
  }
  &.hidden {
    @media (max-width: ${constants.screen_tablet - 1}px) {
      display: none;
    }
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-left: 24px;
  }
  :hover {
    color: ${constants.main_accent};
  }
  :active {
    color: ${constants.main_accent};
  }
`;
export const Add = styled(Link)`
  text-decoration: none;
  margin-right: 16px;
  font: 700 normal 14px/16px "Roboto", sans-serif;
  color: ${constants.dark_gray};
  margin-left: 16px;
  &.now {
    color: ${constants.main_accent};
  }
  &.confirm {
    display: none;
  }
  &.hidden {
    @media (max-width: ${constants.screen_tablet - 1}px) {
      display: none;
    }
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-left: 24px;
  }
  :hover {
    color: ${constants.main_accent};
  }
  :active {
    color: ${constants.main_accent};
  }
`;
export const Total = styled(Link)`
  text-decoration: none;
  margin-right: 16px;
  font: 700 normal 14px/16px "Roboto", sans-serif;
  color: ${constants.dark_gray};
  margin-left: 16px;
  &.now {
    color: ${constants.main_accent};
  }
  &.confirm {
    display: none;
  }
  &.hidden {
    @media (max-width: ${constants.screen_tablet - 1}px) {
      display: none;
    }
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-left: 24px;
    margin-bottom:8px;
  }
  :hover {
    color: ${constants.main_accent};
  }
  :active {
    color: ${constants.main_accent};
  }
`;
export const Number = styled.a`
  display: none;
  &.confirm {
    display: block;
    text-decoration: none;
    margin-right: 16px;
    font: 700 normal 14px/16px "Roboto", sans-serif;
    color: ${constants.dark_gray};
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-left: 24px;
  }
`;
