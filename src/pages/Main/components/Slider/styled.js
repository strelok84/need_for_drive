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

export const SliderControlPrev = styled.a`
  position: relative;
  display: flex;
  width: 64px;
  height: 100%;
  left: 0;
  scroll-behavior: smooth;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: rgba(14, 194, 97, 0.2);
  }
`;

export const SliderControlNext = styled.a`
  position: relative;
  display: flex;
  width: 64px;
  height: 100%;
  right: 0;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: rgba(14, 194, 97, 0.2);
  }
`;

export const ArrowImg = styled.img`
  width: 8px;
  height: 18px;
`;

export const SliderText = styled.div`
  position: relative;
  top: -11px;
  width: 495px;
  height: 317px;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    margin: 424px 32px 341px 32px;
  }
`;
export const SliderTextHead = styled.h2`
  color: #fff;
  font: 600 normal 40px "Roboto", sans-serif;
  line-height: 47px;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    font: 500 normal 32px/37px "Roboto", sans-serif;
  }
`;
export const SliderTextMain = styled.h3`
  color: ${constants.light_gray};
  font: 300 normal 24px/90% "Roboto", sans-serif;
  margin-top: 12px;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    font: 300 normal 22px/22px "Roboto", sans-serif;
  }
`;

export const SliderBtn = styled.a`
  text-decoration: none;
  font: 500 normal 18px "Roboto", sans-serif;
  line-height: 21px;
  color: ${constants.light_gray};
  width: 164px;
  height: 48px;
  border-radius: 4px;
  background: ${(props) => props.theme.main};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    font: 500 normal 18px/21px "Roboto", sans-serif;
  }
  :hover {
    filter: brightness(0.9);
  }
  :active {
    filter: brightness(0.8);
  }
`;
SliderBtn.defaultProps = {
  theme: {
    main: "linear-gradient(90deg, #13493f 0%, #0c7b1b 100%)",
  },
};
export const theme = {
  theme_1: {
    main: "linear-gradient(90deg, #13493f 0%, #0c7b1b 100%)",
  },
  theme_2: {
    main: "linear-gradient(90deg, #132949 0%, #0c7b67 100%)",
  },
  theme_3: {
    main: "linear-gradient(90deg, #493013 0%, #7b0c3b 100%)",
  },
  theme_4: {
    main: "linear-gradient(90deg, #281349 0%, #720c7b 100%)",
  },
};

export const Dots = styled.div`
  position: fixed;
  display: inline-block;
  width: 65px;
  height: 8px;
  left: 74%;
  top: 94%;  
  svg {
    width: 12px;
    height: 8px;
    fill: ${constants.light_gray};
  }
  a {
    margin: 2px;
  }
  
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    left: 77%;
    top: 93%;
  }
`;

export const Dot = styled.a`
margin: 2px;
&.active svg{
      fill:${constants.main_accent}
    }
`;
