import React from "react";
import "./_order_main.scss";
import GoogleMapReact from "google-map-react";

function Order_main() {
  return (
    <div className="form-main">
      <div className="form-main__wrapper">
        <div className="form-main__lent">
      <div className="form-main__map">
        <div className="form-main__map--order">
          <form className="input__wrapper_sity">
            <label for="city">Город</label>
            <input className="form-main__map--sity" name="city" placeholder="Начните вводить город..."></input>
          </form>
          <form className="input__wrapper_point">
            <label for="point">Пункт выдачи</label>
            <input className="form-main__map--point" name="point" placeholder="Начните вводить пункт..."></input>
          </form>
        </div>
        <div>Выбрать на карте</div>
        <div className="google__map">
        <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDEUoFQqwctWUViRtQq47lU8YuYXvAiXkI",
              }}
              center={{ lat: 54, lng: 54 }}
              zoom={16}
            ></GoogleMapReact>
        </div>
      </div>
      <div className="form-main__aside">
        <div className="form-main__lane">
          <div className="form-main__order">Ваш заказ</div>
          <div className="form-main__point">
            <div className="form-main__piсkup">
              <br />
              Пункт выдачи
            </div>
            {<div className="form-main__dots"> </div>}
            <div className="form-main__address">
              Ульяновск,
              <br />
              Нариманова 42
            </div>
          </div>
          <div className="form-main__cost">
            Цена: от 8000 до 12000 {"\u20BD"}
          </div>
          <div href="#" className="form-main__btn">
            Выбрать модель
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Order_main;
