import styled from "styled-components/macro";
import constants from "../../../../styles/constants";
import  { Redirect,Link } from 'react-router-dom'

export const Basket = styled.img`
  @media (min-width: ${constants.screen_dx_min - 1}px) {
    display: none;
  }
  height: 48px;
  position: fixed;
  bottom: 22px;
  right: 24px;
  z-index: 10000;
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
      right:5%;
    }
  &.basket {
    filter: brightness(0.5) sepia(1) saturate(2000%) hue-rotate(120deg);
  }
`;

export const FormMain = styled.div`
  grid-column: 1/87;
  grid-row: 17/101;
  display: grid;
  grid-template-columns: repeat(43, 1fr);
  @media (max-width: ${constants.screen_tablet - 1}px) {
    grid-column: 1/87;
  }
`;
export const Wrapper = styled.div`
  grid-column: 1/44;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Lent = styled.div`
  width: 1248px;
  height: 100%;
  display: flex;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 100%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 100%;
    flex-direction: column;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Map = styled.div`
  grid-column: 3/31;
  width: 928px;
  height: 100%;
  display: flex;
  flex-direction: column;
  font: 300 normal 14px/16px "Roboto", sans-serif;
  &.disable {
    display: none;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 100%;
    align-items: center;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 100%;
    align-items: center;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    grid-column: 1/44;
  }
`;

export const MapOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
  margin-bottom: 32px;
  max-width: 320px;
  form {
    label {
      margin-bottom: 14px;
    }
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    max-width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    align-self: flex-start;
    margin-left: 10%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    align-self: flex-start;
    margin-left: 10%;
  }
`;

export const InputWrapperSity = styled.form`
  width: 320px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${constants.main_black};
  label {
    margin-right: 1px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width: 100%;
    justify-content: space-between;
    margin: auto;
  }
`;

export const InputWrapperPoint = styled.form`
  width: 320px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${constants.main_black};
  label {
    &:after {
      content: "Пункт выдачи";
    }
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width: 100%;
    justify-content: space-between;
    margin: auto;
    label {
      &:after {
        content: "Пункт";
      }
    }
  }
`;

export const Chooze = styled.div`
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    align-self: flex-start;
    margin-left: 10%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    align-self: flex-start;
    margin-left: 10%;
  }
`;

export const GoogleMapBox = styled.div`
  width: 736px;
  height: 352px;
  margin-top: 16px;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 80%;
    height: 60%;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width: calc(100% - 48px);
    height: 50%;
    margin-top: 5%;
    margin-right:24px;
    margin-left:24px;
  }
`;
export const Aside = styled.div`
  
  grid-column: 32/44;
  height: 100%;
  border-left: 1px solid ${constants.light_gray};
  display: flex;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    justify-content: space-between;
    flex-direction: column;
    height: auto;
    border: 0;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    grid-column: 3/31;
    margin-left: 10%;
    margin-top: 0;
    border: 0;
    height: auto;
  }
`;
export const Lane = styled.div`
  height: 100%;
  display: flex;
  margin-left: 32px;
  flex-direction: column;
  align-items: flex-end;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    margin-left: 0;
    align-items: flex-start;
    min-width:280px;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-left: 0;
    align-items: flex-start;
    min-width: 320px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-right: 5%;
    margin-left: 24px;
    align-items: center;
  }
`;

export const FormMainOrder = styled.div`
  width: 100%;
  padding-left: 32px;
  font: 500 normal 18px/21px "Roboto", sans-serif;
  padding-top: 32px;
  text-align: right;
  &.basket {
    text-align: left;
    padding-left: 0;
    padding-top: 8px;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
    text-align: center;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 80%;
    text-align: center;
    padding-top: 8px;
    display: none;
    &.basket {
      display: block;
    }
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    padding-top: 0;
    text-align: center;
    display: none;
    &.basket {
      display: block;
      text-align: center;
    }
  }
`;

export const FormMainPoint = styled.div`
  width: 100%;
  padding-left: 32px;
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  &.basket {
    display: flex;
    width: 90%;
    margin-right: 5%;
    @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
      1}px) {
      margin-left: 0;
      padding-left: 0;
    }
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 80%;
    padding-top: 8px;
    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
    padding-top: 8px;
    margin-left: -1em;
    padding-left: 0;
    &.basket {
      margin-right: 0;
    }
  }
`;

export const FormMainPickUp = styled.div`
  font: 300 normal 14px/16px "Roboto", sans-serif;
  color: ${constants.main_black};
`;

export const FormMainDots = styled.div`
  flex-grow: 1;
  border-bottom: 2px dotted ${constants.dark_gray};
`;

export const Address = styled.div`
  font: 300 normal 14px/16px "Roboto", sans-serif;
  color: ${constants.dark_gray};
  text-align: right;
`;
export const Cost = styled.div`
  width: 100%;
  padding-left: 32px;
  font: 500 normal 16px/16px "Roboto", sans-serif;
  color: ${constants.main_black};
  margin-top: 32px;
  &.basket {
    display: block;
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
      1}px) {
      margin-left: 0;
      padding-left: 0;
    }
    @media (max-width: ${constants.screen_tablet - 1}px) {
      margin-left: -1em;
      margin-top: 1em;
      padding-left: 0;
      text-align: left;
    }
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
    min-width: 280px;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 80%;
    margin-top: 8px;
    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
    &.basket {
      margin-left:0;
    }
  }
`;
export const Button = styled(Link)`
text-decoration:none;
  width: 100%;
  padding-left: 32px;
  font: 500 normal 18px "Roboto", sans-serif;
  color: #fff;
  line-height: 21px;
  background-color: ${constants.light_gray};
  background: linear-gradient(90deg, #13493f 0%, #0c7b1b 100%);
  padding: 0;
  margin-top: 32px;
  min-width: 280px;
  max-width: 320px;
  height: 48px;
  border: 0;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &.gray{
    background:none ${constants.light_gray};
    cursor: default;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
    min-width: auto;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 80%;
    position: fixed;
    bottom: 22px;
    left: 20%;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    min-width: 160px;
    z-index: 0;
    width: 60vw;
    position: fixed;
    bottom: 1em;
    left: 24px;
  }
  
`;
export const Marker = styled.div`
border: 5px solid #0EC261;
background: #FFFFFF;
box-sizing: border-box;
width:18px;
height:18px;
border-radius:50%;
`