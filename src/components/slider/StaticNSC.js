import React from "react";
import "../../styles/styles.css"; 

function Static() {
  return (
    <div>
      <div className="static-image-container">
      <img src={require("../../assets/images/univ/nlb.webp")} 
        alt="Image 1"
          className="static-image nlb"
        />
        <img
          src={require("../../assets/images/univ/spir.webp")}
          alt="Image 2"
          className="static-image spir"
        />
        <img
          src={require("../../assets/images/univ/conjet.webp")}
          alt="Image 3"
          className="static-image conjet"
        />
      </div>
    </div>
  );
}

export default Static;
