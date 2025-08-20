import React from "react";
import hotsportbackground from "../assets/background/hotsportbackground.jpg";
import hotspotpic from "../assets/background/blinking_lights.gif";
import "./Hotsport.css";
import logo from "../assets/background/logo.png"
import Muhammad_Jamil_CV from "../assets/file/Muhammad_Jamil_CV.pdf"

function Hotsports() {
  return (
    <div>
      {/* <img className="backgroundImg" src={hotsportbackground} alt="Background" /> */}

      <div className="hotsport-container">
        <div className="hotsportpic">
          <img src={hotspotpic} alt="Hotspot" />
        </div>
        <div className="hotsporttext">
        <div className="hotspaceLogo"><img className="hotspaceLogoimg" src={logo} alt="logo" /></div>
        <div className="heading">Sustaninability | Product development | Sourcing</div>
        <div className="Btncontainer">
        <button className="hotBtn">Video CV</button>
        <button className="hotBtn" src={Muhammad_Jamil_CV}>Download CV</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hotsports;

