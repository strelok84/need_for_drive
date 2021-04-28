import React from "react";
import "../Middle/_middle.scss";
import Sity_marker from "../../assets/img/Sity_marker.svg";

function Middle() {
  return (
    <main className="main">
      <header className="main__header">
        <div className="main__slogan">Need for drive</div>
        <div className="main__sity">
          <div className="main__sity_name">
            <img className="main__sity_marker" src={Sity_marker} alt="Sity_marker"></img>Ульяновск
          </div>
        </div>
      </header>
      <section className="main__section">
        <h1 className="main__section_karshering">Каршеринг</h1>
        <h2 className="main__section_slogan">Need for drive</h2>
        <h3 className="main__section_minute">
          Поминутная аренда авто твоего города
        </h3>
        <a href="#" className="main__section_btn">Забронировать</a>
      </section>
      <footer className="main__footer">
        <div className="main__years">
          {"\u00A9"}2016-2019 {"\u00AB"}Heed for drive{"\u00BB"}
        </div>
        <div className="main__phone">8 (495) 234-22-44</div>
      </footer>
    </main>
  );
}

export default Middle;
