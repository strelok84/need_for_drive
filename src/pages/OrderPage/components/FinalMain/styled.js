import styled from "styled-components/macro";
import constants from "../../../../styles/constants";
import checkMark from "../../../../assets/img/check_mark.svg";

export const FormMain = styled.div`
  grid-column: 1/87;
  grid-row: 17/101;
  display: grid;
  grid-template-columns: repeat(43, 1fr);
  z-index: 10;
  &.basket {
    grid-column: 1/87;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    grid-column: 1/87;
    grid-row: 30/101;
  }
`;

export const FormMainWrapper = styled.div`
  grid-column: 1/44;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
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
  z-index: 1000;
  justify-content: space-between;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 100%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width: calc(100% - 48px);
    margin-left: 24px;
    margin-right: 24px;
    flex-direction: column;
    justify-content: flex-start;
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
    margin-top: 0;
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
    margin-left: 32px;
    align-items: flex-start;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-left: 0;
    align-items: flex-start;
    min-width: 320px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-right: 0;
    margin-left: 0;
    align-items: center;
  }
`;
export const FormMainOrder = styled.div`
  width: 100%;
  font: 500 normal 18px/21px "Roboto", sans-serif;
  margin-top: 32px;
  text-align: right;
  &.basket {
    display: block;
    text-align: left;
    width: 100%;
    @media (max-width: ${constants.screen_tablet - 1}px) {
      text-align: center;
    }
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    text-align: center;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    text-align: left;
    padding-left: 0;
    padding-top: 8px;
    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    padding-top: 0;
    text-align: center;
    display: none;
    padding-left: 0;
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
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    padding-left: 0;
    @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
      1}px) {
      margin-left: 0;
      padding-left: 0;
    }
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    padding-top: 8px;

    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
    &.basket {
      padding-top: 8px;
    }
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
    padding-left: 0;
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
export const FormMainItemAside = styled.div`
  width: 100%;
  padding-left: 32px;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  &.basket {
    display: flex;
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
      1}px) {
      margin-left: 0;
      padding-left: 0;
    }
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    padding-top: 8px;
    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
    padding-left: 0;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
    padding-left: 0;
  }
`;

export const FormMainCost = styled.div`
  width: 100%;

  font: 400 normal 16px/16px "Roboto", sans-serif;
  color: ${constants.main_black};
  margin-top: 32px;
  &.basket {
    display: block;
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    padding-left: 0;
    @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
      1}px) {
      margin-left: 0;
      padding-left: 0;
    }
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-top: 16px;
    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
    padding-left: 10%;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    min-width: 270px;
  }
`;

export const FormMainBtn = styled.div`
  width: 100%;
  padding-left: 32px;
  font: 500 normal 18px "Roboto", sans-serif;
  color: #fff;
  line-height: 21px;
  background-color: ${constants.light_gray};
  background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
  :hover {
    background: linear-gradient(90deg, #0b934a 2.61%, #026e47 112.6%);
  }
  :active {
    background: linear-gradient(90deg, #076432 2.61%, #013c27 112.6%);
  }
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

  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
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
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
    min-width: auto;
  }
`;

export const FormMainModel = styled.div`
  grid-column: 3/31;
  max-width: 928px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  &.disable {
    display: none;
  }
  font: 300 normal 14px/16px "Roboto", sans-serif;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 100%;
    align-items: left;
    margin-left: 10%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 100%;
    align-items: flex-start;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
    grid-column: 1/44;
  }
`;

export const Basket = styled.img`
  @media (min-width: ${constants.screen_dx_min - 1}px) {
    display: none;
  }
  height: 48px;
  position: fixed;
  bottom: 22px;
  right: 5%;
  z-index: 10000;

  &.basket {
    filter: brightness(0.5) sepia(1) saturate(2000%) hue-rotate(120deg);
  }
`;

export const FinalOrder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  height: 116px;
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-left: 10%;
  }
`;
export const OrderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ModelName = styled.div`
  font: 400 normal 18px/21px "Roboto", sans-serif;
  color: ${constants.main_black};
  height: 22px;
`;
export const ModelNumber = styled.div`
  font: 400 normal 14px/16px "Roboto", sans-serif;
  color: ${constants.main_black};
  margin-top: 8px;
  height: 24px;
  width: 94px;
  border: 1px solid ${constants.dark_gray};
  text-align: center;
  line-height: 24px;
  border-radius:4px;
`;
export const Fuel = styled.div`
  font: normal 14px/16px "Roboto", sans-serif;
  margin-top: 8px;
  height: 22px;
`;
export const Available = styled.div`
  font: normal 14px/16px "Roboto", sans-serif;
  margin-top: 8px;
  height: 22px;
`;
export const CarImg = styled.img`
  margin-right: 20%;
  margin-top: 3%;
  height: 116px;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-right: 0;
  }
`;
