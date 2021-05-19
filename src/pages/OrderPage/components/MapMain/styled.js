import styled from "styled-components/macro";
import constants from "../../../../styles/constants";

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
