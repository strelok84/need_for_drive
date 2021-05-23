import styled from "styled-components/macro";
import constants from "../../styles/constants";

export const Nav = styled.nav`
  grid-column: 1/5;
  height: 100%;
  background-color: #151b1f;
  display: grid;
  grid-template-columns: repeat(4, 16px);
  position: fixed;
  z-index: 300000;
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    grid-template-columns: repeat(4, 21.5px);
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    height: 0;
  }
`;
export const Menu = styled.div`
  grid-column: 2/4;
  z-index: 300000;
`;
export const MenuToggle = styled.input`
  opacity: 0;
  position: fixed;
  top: 32px;
  left: 16px;
  width: 32px;
  height: 32px;
  z-index: 300000;
  margin: 0;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    top: 29px;
    left: 17px;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    top: 29px;
    left: 27px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    top: 16px;
    left: 16px;
  }
  :checked ~ .menu__btn > span {
    transform: rotate(45deg);
    @media (max-width: ${constants.screen_tablet - 1}px) {
      background-color: #fff;
    }
  }
  :checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
    @media (max-width: ${constants.screen_tablet - 1}px) {
      background-color: #fff;
    }
  }
  :checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
    @media (max-width: ${constants.screen_tablet - 1}px) {
      background-color: #fff;
    }
  }
  :checked ~ .menu__box {
    visibility: visible;
    left: 0;
    /* $menu_toggle: true !global; */
  }
`;

export const MenuBtn = styled.label`
  display: flex;
  align-items: center;
  position: fixed;
  top: 32px;
  left: 16px;
  width: 32px;
  height: 32px;
  z-index: 20;
  justify-content: center;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    top: 29px;
    left: 17px;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    top: 29px;
    left: 27px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    top: 16px;
    left: 16px;
  }
  > span,
  > span::before,
  > span::after {
    display: block;
    position: absolute;
    width: 24px;
    height: 3px;
    border-radius: 20% 10%;
    background-color: #fff;
    transition-duration: 0.25s;
    @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
      1}px) {
      width: 32px;
    }
    @media (max-width: ${constants.screen_tablet - 1}px) {
      width: 19;
      background-color: #000;
    }
  }
  span::before {
    content: "";
    top: -8px;
  }
  > span::after {
    content: "";
    top: 8px;
  }
`;

export const MenuBox = styled.ul`
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  text-align: left;
  background-color: #111518;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
  transition-duration: 0.25s;
  background: linear-gradient(
    to right,
    rgba(11, 15, 18, 1) calc(50% + 48px),
    rgba(11, 15, 18, 0.9) calc(50% + 48px)
  );
  z-index: 10;
  li:nth-child(1) {
    margin-top: 128px;
    @media (max-width: ${constants.screen_tablet - 1}px) {
      margin-top: 70px;
    }
  }
  &.menu__box_black {
    padding: 0;
    opacity: 1;
    background-image: none;
    background-color: #111518;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    background: linear-gradient(
      to right,
      rgba(11, 15, 18, 1) calc(60%),
      rgba(11, 15, 18, 0.9) calc(60%)
    );
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    opacity: 1;
    background-image: none;
    background-color: #111518;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    padding: 0;
    opacity: 1;
    background-image: none;
    background-color: #111518;
  }
`;

export const MenuItem = styled.a`
  display: flex;
  padding: 12px 24px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 37.5px;
  text-decoration: none;
  margin-left: 128px;
  transition-duration: 0.25s;
  max-width: 30%;
  &:hover {
    color: ${constants.main_accent};
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-left: 28px;
    font: 500 normal 22px/26px "Roboto", sans-serif;
    padding-left: 0;
    padding-top: 5px;
  }
`;
export const ItemWrapper = styled.li`
  display: flex;
  a {
    margin-top: 38px;
    @media (max-width: ${constants.screen_tablet - 1}px) {
      margin-top: 19px;
    }
    img:hover {
      filter: brightness(0.5) sepia(1) saturate(2000%) hue-rotate(120deg);
    }
    &:nth-child(1) {
      margin-left: 128px;
      @media (max-width: ${constants.screen_tablet - 1}px) {
        margin-left: 28px;
      }
    }
    &:nth-child(2),
    &:nth-child(3) {
      margin-left: 0;
      padding-left: 0;
    }
  }
`;

export const LangWrapper = styled.li`
  display: none;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: block;
    position: absolute;
    bottom: 0;
    padding-bottom: 12px;
  }
`;

export const Lang = styled.a`
color: ${constants.main_accent};
  grid-column: 2/4;
  align-self: flex-end;
  justify-self: center;
  font-weight: bold;
  font-style: normal;
  font-size: 13px;
  line-height: 48px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    border: 1px solid ${constants.light_gray};
    border-radius: 50%;
    color: ${constants.light_gray};
    margin-bottom: 15px;
    @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
      margin-bottom: 22px;
    }
  }
  :active {
    border: 1px solid ${constants.light_gray};
    border-radius: 50%;
    color: ${constants.main_accent};
    margin-bottom: 15px;
    @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
      margin-bottom: 22px;
    }
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-bottom: 22px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
  }

  &#mobile_lang {
    display: none;
    @media (max-width: ${constants.screen_tablet - 1}px) {
      display: flex;
      color: ${constants.main_accent};
      margin: auto auto auto 16px;
      position: relative;
    }
    :hover {
      border: 1px solid ${constants.light_gray};
      border-radius: 50%;
      color: ${constants.light_gray};
    }
    :active {
      border: 1px solid ${constants.light_gray};
      border-radius: 50%;
      color: ${constants.main_accent};
    }
  }
`;
