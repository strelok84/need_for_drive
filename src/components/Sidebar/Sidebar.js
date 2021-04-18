import React from "react";
import "../Sidebar/_sidebar.scss";
import Telegram from "../../img/Telegram_white.svg";
import Facebook from "../../img/Facebook_white.svg";
import Instagram from "../../img/Instagram_white.svg";

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
              Парковка
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Страховка
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Бензин
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Обслуживание
            </a>
          </li>
          <li className="menu__item__img_wrapper">
            <a className="menu__item" href="#">
              <img src={Telegram}></img>
            </a>
            <a className="menu__item" href="#">
              <img src={Facebook}></img>
            </a>
            <a className="menu__item" href="#">
              <img src={Instagram}></img>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar__lang">Eng</div>
    </nav>
  );
}

export default Sidebar;
