import React, { useState } from "react";
import "./Meat.css";
import tajne from "./images/male-tajne.png";
import axe from "./images/axe.png";
import dAxe from "./images/desktop-axe.png";
import groupArrow from "./images/group-arrow.png";
import dArrow from "./images/desktop-arrow.png";
import garlic from "./images/cesnjak.png";
import chili from "./images/chilli.png";
import plant1 from "./images/plant1.png";
import plant2 from "./images/plant2.png";
import salt from "./images/sol.png";
import useWindowsDimensions from "../Windows";
import x from "./images/x.png";
import sirov from "./images/sirov.png";
import vector from "./images/vector.png";
import clock from "./images/clock.png";
import fire from "./images/fire.png";
import dp1 from "./images/desktop-p1.png";
import dChili from "./images/desktop-chili.png";
import dCesnjak from "./images/desktop-cesnjak.png";
import jquery from "jquery";

function Meat() {
  const { height, width } = useWindowsDimensions();

  function renderAxe() {
    if (width > 1439) {
      return dAxe;
    } else {
      return axe;
    }
  }

  function renderArrow() {
    if (width > 1439) {
      return dArrow;
    } else {
      return groupArrow;
    }
  }

  function renderPlant() {
    if (width > 1439) {
      return dp1;
    } else {
      return plant1;
    }
  }
  function renderChili() {
    if (width > 1439) {
      return dChili;
    } else {
      return chili;
    }
  }
  function renderCesnjak() {
    if (width > 1439) {
      return dCesnjak;
    } else {
      return garlic;
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
    <div className="meat-container">
      <div className="meat_max-width">
        <div className={state ? "popup-meat-container" : "display"}>
          <div className="popup-x-container">
            <button onClick={changeStyle} className="x-button">
              <img className="x" src={x} alt="x" />
            </button>
          </div>
          <div className="popup-meat-text-container">
            <img className="rare-sirov" src={sirov} alt="Rare-sirov" />
            <img className="vector" src={vector} alt="vector" />
            <p className="roboto">Meso u unutrašnjosti crvenkasto.</p>
            <div className="time-container">
              <div>
                <img className="clock" src={clock} alt="clock" />
              </div>
              <div>
                <h3 className="pečenje">Vrijeme pečenja:</h3>
                <p className="upute">4 minute s jedne strane</p>
                <p className="upute">2 minute nakon okretanja</p>
              </div>
            </div>
            <div className="fire-container">
              <div>
                <img className="fire" src={fire} alt="fire" />
              </div>
              <div>
                <h3 className="pečenje">Temperatura:</h3>
                <p className="upute">50 °C</p>
              </div>
            </div>
          </div>
        </div>
        <div className="width">
          <img className="meat_male-tajne" src={tajne} alt="male tajne" />
        </div>
        <div className="image-container">
          <img
            onClick={change}
            className="meat_axe"
            src={renderAxe()}
            alt="meat on the axe"
          />
          <img
            className="meat_arrow"
            src={renderArrow()}
            alt="group of arrows"
          />
          <img className="meat_garlic" src={renderCesnjak()} alt="garlic" />
          <img className="meat_chili" src={renderChili()} alt="chili" />
          <img className="meat_plant1" src={renderPlant()} alt="p1" />
          <img className="meat_plant2" src={plant2} alt="p2" />
          <img className="meat_salt" src={salt} alt="salt" />
        </div>
      </div>
    </div>
  );
}

export default Meat;
