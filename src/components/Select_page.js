import React from "react";
import "./select_page.css";
import marker from "./marker.png";
import shopping_cart from "./shopping-cart.png";

function Select_page() {
  return (
    <div className="container_2">
      <div className="box_return"></div>
      <div className="box_select">
        <div>
          <h1 className="title_selection">
            faisabilité Socio-Environnementale
          </h1>
        </div>
        <div className="selectors">
          <div className="box_selection">
            <img src={marker}></img>
            <button className="btn_selection">études du marche</button>
          </div>
          <div className="box_selection">
            <img src={shopping_cart}></img>
            <button className="btn_selection">études du marche</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select_page;
