import React from "react";
import "./Landing.css";
import text from "./images/text.png";
import line from "./images/line.png";
import arrow from "./images/arrow-down.png";
import knife from "./images/Knife.png";
import fork from "./images/fork.png";
import papar from "./images/papar.png";
import onion from "./images/onion.png";
import plant3 from "./images/p3.png";
import dText from "./images/desktop-text.png";
import useWindowDimensions from "../Windows";

function Landing() {
  const { height, width } = useWindowDimensions();

  function renderText() {
    if (width > 1439) {
      return dText;
    } else {
      return text;
    }
  }
  return (
    <div className="landing-container">
      <div className="landing_max-width">
        <img className="landing_plant3" src={plant3} alt="plant" />
        <div className="landing_text-container">
          <img className="landing_line" src={line} alt="Line" />
          <img
            className="landing_text-image"
            src={renderText()}
            alt="Eat Meat &Repeat"
          />
          <img className="landing_arrow" src={arrow} alt="Arrow down" />
        </div>
        <img className="landing_knife" src={knife} alt="Knife" />
        <img className="landing_fork" src={fork} alt="fork" />
        <img className="landing_papar" src={papar} alt="papar" />
        <img className="landing_onion" src={onion} alt="onion" />
      </div>
    </div>
  );
}
export default Landing;
