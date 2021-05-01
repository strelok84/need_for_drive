import React from "react";
import "./_order_main.scss";

function Order_main() {
  return (
    <div className="form-main">
      <div className="form-main__map"></div>
      <div className="form-main__aside">
        <div className="form-main__lane">
          <div className="form-main__order">Ваш заказ</div>
          <div className="form-main__point">
            <div className="form-main__piсkup">Пункт выдачи</div>
            {<div className="form-main__dots"> </div>}
            <div className="form-main__address">Ульяновск, Нариманова 42</div>
          </div>
          <div className="form-main__cost">Цена: от 8000 до 12000 {"\u20BD"}</div>
          <a href="#" className="form-main__btn">Выбрать модель</a>
        </div>
      </div>
    </div>
  );
}

export default Order_main;
