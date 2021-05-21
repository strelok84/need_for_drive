import styled from "styled-components/macro";
import constants from "../../../../styles/constants";

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 5/48;
  height: 100%;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    grid-column: 5/54;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    grid-column: 5/91;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    grid-column: 1/91;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: flex-end;
  }
`;

export const MainHeader = styled.header`
  grid-column: 1/4;
  grid-row: 1/4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    grid-template-columns: 1fr;
  }
`;

export const MainSlogan = styled.div`
  font: 700 normal 30px "Roboto", sans-serif;
  padding-top: 32px;
  padding-left: 64px;
  color: ${constants.main_accent};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    padding-left: 32px;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    padding-left: 32px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    grid-row: 1/2;
    grid-column: 1/3;
    font: 700 normal 30px/35px "Roboto", sans-serif;
    padding-top: 16px;
    padding-right: 16px;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

export const MainSity = styled.div`
  font: 400 normal 14px "Roboto", sans-serif;
  color: ${constants.dark_gray};
  padding-top: 39px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 18px;
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    padding-top: 38px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    grid-row: 2/3;
    grid-column: 1/3;
    font: 700 normal 30px/35px "Roboto", sans-serif;
    padding-top: 10px;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

export const MainSityName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 64px;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    margin-right: 29px;
    margin-top: 2px;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-right: 32px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    font: 400 normal 14px/16px "Roboto", sans-serif;
    margin-right: 16px;
  }
`;

export const MainSityMarker = styled.img`
  margin-right: 5.5px;
`;

export const MainSection = styled.section`
  grid-row: 4/24;
  grid-column: 1/4;
  padding: 146px 64px 64px 64px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    padding: 146px 32px 64px 32px;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    padding-left: 32px;
    padding-top: 147px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    padding: 0px 0px 64px 16px;
    margin-top: -83px;
  }
`;

export const MainKarshering = styled.h1`
  font: 700 normal 70px "Roboto", sans-serif;
  color: ${constants.main_black};
  line-height: 65.63px;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    font: 700 normal 32px/100% "Roboto", sans-serif;
  }
`;

export const MainSectionSlogan = styled.h1`
  font: bold normal 70px "Roboto", sans-serif;
  color: ${constants.main_accent};
  line-height: 66px;
  margin-top: 4px;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    font: 700 normal 32px/100% "Roboto", sans-serif;
    margin-top: 6px;
  }
`;

export const MainMinute = styled.h1`
  font: 300 normal 26px "Roboto", sans-serif;
  color: ${constants.dark_gray};
  line-height: 30px;
  margin-top: 25px;
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-top: 27px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    font: 300 normal 18px/21px "Roboto", sans-serif;
    margin-top: 16px;
  }
`;

export const MainBtn = styled.a`
  font: 500 normal 18px "Roboto", sans-serif;
  color: #fff;
  line-height: 21px;
  margin-top: 63px;
  background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
  width: 250px;
  height: 48px;
  border-radius: 8px;
  border: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width: 100vw;
    height: 50px;
    margin-left: -16px;
    border-radius: 0;
    margin-top: 32px;
  }
`;

export const MainFooter = styled.footer`
  grid-row: 24/26;
  grid-column: 1/4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    background-color: #151b1f;
    height: 72px;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
`;
export const MainYears = styled.div`
  font: 400 normal 13px "Roboto", sans-serif;
  line-height: 15px;
  color: ${constants.dark_gray};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 32px;
  margin-left: 64px;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    margin-left: 32px;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-left: 32px;
    margin-bottom: 40px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    grid-column: 1/3;
    color: ${constants.light_gray};
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 16px;
    grid-row: 2/3;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
  }
`;

export const MainPhone = styled.div`
  font: 400 normal 13px "Roboto", sans-serif;
  line-height: 15px;
  color: ${constants.main_black};
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 64px;
  margin-bottom: 32px;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    margin-right: 32px;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-right: 36px;
    margin-bottom: 40px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    grid-column: 2/3;
    color: ${constants.main_accent};
    grid-row: 1/2;
    margin-right: 16px;
    margin-bottom: 0px;
    align-items: center;
  }
`;
