import styled from "styled-components/macro";
import constants from "../../../../styles/constants";
import slide_1 from "../../../../assets/img/slide_1.png";
import slide_2 from "../../../../assets/img/slide_2.png";
import slide_3 from "../../../../assets/img/slide_3.png";
import slide_4 from "../../../../assets/img/slide_4.png";

export const Box = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  grid-column: 48/91;
  height: 100%;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    grid-column: 54/91;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
`;

export const Items = styled.div`
  display: flex;
  transition: transform 0.6s ease;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const Item = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const Slide = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.slide_1 {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
      url(${slide_1});
  }
  &.slide_2 {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
      url(${slide_2});
  }
  &.slide_3 {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
      url(${slide_3});
  }
  &.slide_4 {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
      url(${slide_4});
  }
`;
