import React, { useState } from "react";
import "./Cow.css";
import frame from "./images/frame.png";
import odaberite from "./images/odaberite.png";
import arrow from "./images/cow_arrow.png";
import dArrow from "./images/desktop-frame.png";
import cow from "./images/beef.png";
import dCow from "./images/desktop-beef.png";
import useWindowDimensions from "../Windows";
import popupLine from "./images/popup-line.png";
import plate from "./images/plate.png";
import beefLorem from "./images/beef-lorem.png";
import ribeye from "./images/ribeye.png";
import x from "./images/x.png";
import arrow2 from "./images/arrow2.png";
import ribeyeText from "./images/ribeyesteak.png";

function Cow() {
  const { height, width } = useWindowDimensions();

  function landingCow() {
    if (width > 870) {
      return dCow;
    } else {
      return cow;
    }
  }

  function landingArrow() {
    if (width > 1439) {
      return dArrow;
    } else {
      return arrow;
    }
  }

  const [state, setState] = useState(false);
  const changeStyle = () => {
    setState(!state);
  };

  function change() {
    setState(true);
  }

  return (
    <div className="cow-container">
      <div className="cow_over-effect">
        <div className={state ? "cow-popup" : "display"}>
          <img className="ribeye" src={ribeye} alt="ribeye" />
          <div className="x-container">
            <button className="x-button" onClick={changeStyle}>
              <img className="x" src={x} alt="x" />
            </button>
          </div>
          <div className="row">
            <div className="popup-text">
              <img
                className="ribeye-steak"
                src={ribeyeText}
                alt="Ribeye steak"
              />
              <img className="red-line" src={popupLine} alt="red line" />
              <p className="ribeye-text">
                Rib-eye na kosti je za mnoge mesojede ultimativni odrezak.
                Zahtijevajmo 3,75 centimetara debeli - to je najidealnija
                debljina za lijepo zapečen karamelizirani odrezak s roza
                sredinom. Budući da je rib-eye prilično mastan, preporučljivo ga
                je ispeći na stupnju zapečenosti medium rare ili jače,
                nedovoljno pečen je premasni.
              </p>
            </div>
            <div className="popup-prijedlog">
              <div className="popup-span">
                <img className="plate" src={plate} alt="plate" />
                <p className="prijedlog">Prijedlog recepta:</p>
              </div>
              <div className="popup-lorem">
                <img className="img-lorem" src={beefLorem} alt="ribeye steak" />
                <div>
                  <p className="lorem">Lorem ipsum dolor sit amet</p>
                  <img className="arrow2" src={arrow2} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            className="cow_text-image"
            src={frame}
            alt="Eat meat and repeat in red color"
          />
        </div>
        <div className="cow_text-container">
          <img
            className="cow_odaberite-text"
            src={odaberite}
            alt="Odaberite pravi komad mesa"
          />
          <img
            className="cow_arrow-down"
            src={landingArrow()}
            alt="arrow down"
          />
        </div>
        <div className="cow_container-img">
          <img
            onClick={change}
            onMouseEnter={change}
            className="cow_cow"
            src={landingCow()}
            alt="cow"
          />
        </div>
      </div>
    </div>
  );
}

export default Cow;
