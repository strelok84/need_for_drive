import React, { useEffect } from "react";

import Telegram from "../../assets/img/Telegram_white.svg";
import Facebook from "../../assets/img/Facebook_white.svg";
import Instagram from "../../assets/img/Instagram_white.svg";
import {Nav,Menu,MenuToggle,MenuBtn,MenuBox,MenuItem,ItemWrapper,LangWrapper,Lang} from "./styled";

function Sidebar(props) {
  useEffect(() => {
    const menu = document.querySelector(".menu__box");   
    if (props.gradient==="black") {
      menu.classList.add("menu__box_black");
    }
  });
  
  return (
    <Nav>
      <Menu>
        <MenuToggle type="checkbox" />
        <MenuBtn className="menu__btn" for="menu__toggle">
          <span></span>
        </MenuBtn>
        <MenuBox className="menu__box">
          <li>
            <MenuItem href="#">
              ПАРКОВКА
            </MenuItem>
          </li>
          <li>
            <MenuItem href="#">
              СТРАХОВКА
            </MenuItem>
          </li>
          <li>
            <MenuItem href="#">
              БЕНЗИН
            </MenuItem>
          </li>
          <li>
            <MenuItem href="#">
              ОБСЛУЖИВАНИЕ
            </MenuItem>
          </li>
          <ItemWrapper>
            <MenuItem href="#">
              <img src={Telegram} alt="Telegram"></img>
            </MenuItem>
            <MenuItem href="#">
              <img src={Facebook} alt="Facebook"></img>
            </MenuItem>
            <MenuItem href="#">
              <img src={Instagram} alt="Instagram"></img>
            </MenuItem>
          </ItemWrapper>
          <LangWrapper>
            <Lang
              className="sidebar__lang"
              id="mobile_lang"
              href="#"
              onClick={() => {
                let lang = document.getElementsByClassName("sidebar__lang")[0];
                lang.innerHTML === "Eng"
                  ? (lang.innerHTML = "Rus")
                  : (lang.innerHTML = "Eng");
              }}
            >
              Eng
            </Lang>
          </LangWrapper>
        </MenuBox>
      </Menu>
      <Lang
        className="sidebar__lang"
        href="#"
        onClick={() => {
          let lang = document.getElementsByClassName("sidebar__lang")[1];
          lang.innerHTML === "Eng"
            ? (lang.innerHTML = "Rus")
            : (lang.innerHTML = "Eng");
        }}
      >
        Eng
      </Lang>
    </Nav>
  );
}

export default Sidebar;
