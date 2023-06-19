import React from "react";
import "./choice_page.css";
import shape from "./shape.png";
import shape_2 from "./shape_2.png";
import { Link } from "react-router-dom";
function Choice_page() {
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
          <h1 className="title_choice_font">les études de faisabilite</h1>
        </div>
        <div className="box_content">
          <Link to={"/Selection"}>
            <button className="btn_choice">
              faisabilité Socio-Environnementale
            </button>
          </Link>
        </div>
        <div className="box_content">
          <button className="btn_choice">faisabilité dans le temps</button>{" "}
        </div>
        <div className="box_content">
          <button className="btn_choice">faisabilité eco-finance</button>{" "}
        </div>
        <div className="box_content">
          <button className="btn_choice">
            faisabilité Légale Et Politique
          </button>
        </div>
        <div className="box_content">
          <button className="btn_choice">faisabilité technique</button>{" "}
        </div>
        <div className="box_content">
          <button className="btn_choice">
            faisabilité strategique et commercial
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Choice_page;
