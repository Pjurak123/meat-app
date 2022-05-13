import React from "react";
import "./Meat.css";
import tajne from "./images/male-tajne.png";
import axe from "./images/axe.png";
import groupArrow from "./images/group-arrow.png";
import garlic from "./images/cesnjak.png";
import chili from "./images/chilli.png";
import plant1 from "./images/plant1.png";
import plant2 from "./images/plant2.png";
import salt from "./images/sol.png";

function Meat() {
  return (
    <div className="meat-container">
      <div className="meat_max-width">
        <div>
          <img className="meat_male-tajne" src={tajne} alt="male tajne" />
        </div>
        <div className="image-container">
          <img className="meat_axe" src={axe} alt="meat on the axe" />
          <img className="meat_arrow" src={groupArrow} alt="group of arrows" />
          <img className="meat_garlic" src={garlic} alt="garlic" />
          <img className="meat_chili" src={chili} alt="chili" />
          <img className="meat_plant1" src={plant1} alt="p1" />
          <img className="meat_plant2" src={plant2} alt="p2" />
          <img className="meat_salt" src={salt} alt="salt" />
        </div>
      </div>
    </div>
  );
}

export default Meat;
