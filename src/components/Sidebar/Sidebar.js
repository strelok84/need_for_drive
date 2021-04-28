import React from "react";
import "../Sidebar/_sidebar.scss";
import Telegram from "../../assets/img/Telegram_white.svg";
import Facebook from "../../assets/img/Facebook_white.svg";
import Instagram from "../../assets/img/Instagram_white.svg";

function Sidebar() {
  return (
    <nav className="sidebar">
      <div class="menu">
        <input className="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box">
          <li>
            <a className="menu__item" href="#">
              ПАРКОВКА
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              СТРАХОВКА
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              БЕНЗИН
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              ОБСЛУЖИВАНИЕ
            </a>
          </li>
          <li className="menu__item__img_wrapper">
            
            <a className="menu__item" href="#">
              <img src={Telegram} alt="Telegram"></img>
            </a>
            <a className="menu__item" href="#">
              <img src={Facebook} alt="Facebook"></img>
            </a>
            <a className="menu__item" href="#">
              <img src={Instagram} alt="Instagram"></img>
            </a>
            
          </li>
          <li className="menu__item_mobile_lang">
          <a
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
          </a>
            </li>
          
        </ul>

      </div>
      <a
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
      </a>
    </nav>
  );
}

export default Sidebar;
