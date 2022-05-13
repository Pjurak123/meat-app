import React from "react";
import "./Cow.css";
import frame from "./images/frame.png";
import odaberite from "./images/odaberite.png";
import arrow from "./images/cow_arrow.png";
import cow from "./images/beef.png";

function Cow() {
  return (
    <div className="cow-container">
      <div className="cow_over-effect">
        <div>
          <img
            className="cow_text-image"
            src={frame}
            alt="Eat meat and repeat in red"
          />
        </div>
        <div>
          <img
            className="cow_odaberite-text"
            src={odaberite}
            alt="Odaberite pravi komad mesa"
          />
          <img className="cow_arrow-down" src={arrow} alt="arrow down" />
        </div>
        <div className="cow_container-img">
          <img className="cow_cow" src={cow} alt="cow" />
        </div>
      </div>
    </div>
  );
}

export default Cow;
