import React from "react";
import "../Middle/_middle.scss";
import Sity_marker from "../../img/Sity_marker.svg";

function Middle() {
  return (
    <main className="main">
      <header className="main__header">
        <div className="main__slogan">Need for drive</div>
        <div className="main__sity">
          <div className="main__sity_name">
            <img className="main__sity_marker" src={Sity_marker}></img>Ульяновск
          </div>
        </div>
      </header>
      <section className="main__section">
          <h1 className="main__section_karshering">Каршеринг</h1>
          <h2 className="main__section_slogan">Need for drive</h2>
          <h3 className="main__section_minute">Поминутная аренда авто твоего города</h3>
          <button className="main__section_btn">Забронировать</button>
      </section>
      <footer className="main__footer"></footer>
    </main>
  );
}

export default Middle;
