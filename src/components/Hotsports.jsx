import React from "react";
import hotsportbackground from "../assets/background/hotsportbackground.jpg";
import hotspotpic from "../assets/background/blinking_lights.gif";
import "./Hotsport.css";
import logo from "../assets/background/logo.png";
import MediaButton from "../components/MediaButton";

function Hotsports() {
  return (
    <>
      <div className="hotsport-container">
        <div className="hotsportpic">
          <img src={hotspotpic} alt="Hotspot" />
        </div>
        ´
        <div className="hotsporttext">
          <div className="heading">
            I am here to meet your digital || vision ||
          </div>
          <div className="Btncontainer">
            <a
              href="/cv/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <button>
                {/* hero button 1 */}
                <div class="bubble-layer bubble-1"></div>
                <div class="bubble-layer bubble-2"></div>
                <div class="bubble-layer bubble-3"></div>
                <div class="bubble-layer bubble-4"></div>
                <div class="bubble-layer bubble-5"></div>
                <div class="bubble-layer bubble-6"></div>
                <div class="bubble-layer bubble-7"></div>
              </button>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotsports;
