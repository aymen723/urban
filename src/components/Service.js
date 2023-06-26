import React, { Component } from "react";
import shape from "./shape.png";
import shape_2 from "./shape_2.png";
import { Link } from "react-router-dom";
import "./service.css";
function Service() {
  return (
    <div className="container">
      <img src={shape} className="shape_1"></img>
      <img src={shape_2} className="shape_2"></img>

      <div className="return_box">
        <button className="return_btn"></button>
        <label>retour</label>
      </div>
      <div className="box_choice">
        <div className="box_content">
          <h1 className="title_choice_font">les Service</h1>
        </div>
        <div className="box_content">
          <Link to={"/Choice page"}>
            <button className="btn_choice">
              Etude de faisabilite Complète
            </button>{" "}
          </Link>
        </div>

        <div className="box_content">
          <button className="btn_choice">
            Etude de faisabilite avec suivi
          </button>
        </div>
        <div className="box_content">
          <button className="btn_choice">Etude de faisabilite Partielle</button>
        </div>
        <div className="box_content">
          <button className="btn_choice">
            {" "}
            Etude de faisabilite Partielle avec suivi
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Service;
