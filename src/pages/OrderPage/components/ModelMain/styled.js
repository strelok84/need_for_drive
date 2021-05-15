import styled from "styled-components";
import constants from "../../../../styles/constants";

export const FormMain = styled.div`
  grid-column: 1/87;
  grid-row: 17/101;
  display: grid;
  grid-template-columns: repeat(43, 1fr);
  @media (max-width: ${constants.screen_tablet - 1}px) {
    grid-column: 15/87;
    color: ${constants.main_accent};
  }
`;
export const FormMainWrapper = styled.div`
  grid-column: 1/44;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${constants.screen_tablet}) and (max-width: ${constants.screen_dx_min +
    1}px) {
    align-items: flex-start;
    justify-content: space-between;
  }
`;
export const FormMainLent = styled.div`
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
  }
`;
export const FormMainAside = styled.div`
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
    border: 0;
    height: auto;
  }
`;
export const FormMainLane = styled.div`
  height: 100%;
  display: flex;
  margin-left: 32px;
  flex-direction: column;
  align-items: flex-end;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    margin-left: 0;
    align-items: flex-start;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-left: 0;
    align-items: flex-start;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-right: 5%;
    margin-left: 0;
    align-items: center;
  }
`;
export const FormMainOrder = styled.div`
  width: 100%;
  padding-left: 32px;
  font: 500 normal 18px/21px "Roboto", sans-serif;
  padding-top: 32px;
  text-align: right;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    text-align: center;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    text-align: center;
    padding-top: 8px;
    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    padding-top: 0;
    text-align: center;
    display: none;
  }
`;

export const FormMainPoint = styled.div`
  width: 100%;
  padding-left: 32px;
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    padding-top: 8px;
    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
  }
`;
export const FormMainPickup = styled.div`
  font: 300 normal 14px/16px "Roboto", sans-serif;
  color: ${constants.main_black};
`;
export const FormMainDots = styled.div`
  flex-grow: 1;
  border-bottom: 2px dotted ${constants.dark_gray};
`;
export const FormMainAddress = styled.div`
  font: 300 normal 14px/16px "Roboto", sans-serif;
  color: ${constants.dark_gray};
  text-align: right;
`;
export const FormMainCost = styled.div`
  width: 100%;
  padding-left: 32px;
  font: 500 normal 16px/16px "Roboto", sans-serif;
  color: ${constants.main_black};
  margin-top: 32px;
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-top: 8px;
    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    min-width: 280px;
  }
`;

export const FormMainBtn = styled.div`
  width: 100%;
  padding-left: 32px;
  font: 500 normal 18px "Roboto", sans-serif;
  color: #fff;
  line-height: 21px;
  background-color: ${constants.light_gray};
  padding: 0;
  margin-top: 32px;
  min-width: 280px;
  height: 48px;
  border: 0;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-bottom: 22px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    min-width: 160px;
    width: 100%;
    margin-bottom: 22px;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
    min-width: auto;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FormMainModel = styled.div`
  grid-column: 3/31;
  width: 928px;
  height: 100%;
  display: flex;
  flex-direction: column;
  font: 300 normal 14px/16px "Roboto", sans-serif;
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
    justify-content: center;
    align-items: center;
    grid-column: 1/44;
  }
`;
export const ModelRadioWrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    align-self: flex-start;
    margin-left: 15%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    align-self: flex-start;
    margin-left: 10%;
  }
`;
export const AllModel = styled.input`
  box-sizing: border-box;

  position: absolute;
  z-index: -1;
  opacity: 0;
  + label {
    margin-right: 1em;
    margin-top: 2em;
    display: inline-flex;
    align-items: center;
    user-select: none;
    font: 300 normal 14px/16px "Roboto", sans-serif;
    color:${constants.dark_gray};
  }
  + label::before {
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: top top;
    background-size: 50% 50%;
  }

  :checked + label::before {
    box-sizing: border-box;
    border: 2px solid ${constants.main_accent};
    width: 0.7em;
    height: 0.7em;
  }
  :checked + label{
      color:${constants.main_black};
  }
`;
export const Econom = styled.input`
  box-sizing: border-box;
  position: absolute;
  z-index: -1;
  opacity: 0;
  + label {
    margin-right: 1em;
    margin-top: 2em;
    display: inline-flex;
    align-items: center;
    user-select: none;
    font: 300 normal 14px/16px "Roboto", sans-serif;
    color:${constants.dark_gray};
  }
  + label::before {
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: top top;
    background-size: 50% 50%;
  }

  :checked + label::before {
    box-sizing: border-box;
    border: 2px solid ${constants.main_accent};
    width: 0.7em;
    height: 0.7em;
  }
  :checked + label{
    color:${constants.main_black};
}
`;
export const Premium = styled.input`
  box-sizing: border-box;
  position: absolute;
  z-index: -1;
  opacity: 0;
  + label {
    margin-top: 2em;
    display: inline-flex;
    align-items: center;
    user-select: none;
    font: 300 normal 14px/16px "Roboto", sans-serif;
    color:${constants.dark_gray};
  }
  + label::before {
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: top top;
    background-size: 50% 50%;
  }

  :checked + label::before {
    box-sizing: border-box;
    border: 2px solid ${constants.main_accent};
    width: 0.7em;
    height: 0.7em;
  }
  :checked + label{
    color:${constants.main_black};
}
`;
