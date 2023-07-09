import React from "react";
import Select from "react-select";
import "./type.css";

import { Link } from "react-router-dom";
import shape from "./shape.png";
import shape_2 from "./shape_2.png";
function Type() {
  const type1 = [
    { value: "Batiment", label: "Batiment" },
    { value: "Ouvrage d'art", label: "Ouvrage d'art" },
  ];
  const type2 = [
    { value: "tourisme", label: "tourisme" },
    { value: "Education", label: "Education" },
    { value: "Santé", label: "Santé" },
    { value: "Sport", label: "Sport" },
    { value: "culutre", label: "culutre" },
    { value: "hébergement", label: "hébergement" },
    { value: "Enseignement et recherche", label: "Enseignement et recherche" },

    { value: "lieu publics", label: "Enseignement et recherche" },
  ];
  const type3 = [
    { value: "Hotel", label: "Hotel" },
    { value: "Aqua parc", label: "Aqua parc" },
    { value: "parc d'attraction", label: "parc d'attraction" },
    { value: "jardin", label: "jardin" },
  ];

  return (
    <div className="container">
      {/* <img src={shape} className="shape_1"></img>
      <img src={shape_2} className="shape_2"></img> */}

      <div className="return_box">
        <Link to={"/Service"}>
          <button className="return_btn">{"<"}</button>
          <label>retour</label>
        </Link>
      </div>
      <div className="box_choice">
        <div className="box_content">
          <h1 className="title_choice_font">les études de faisabilite</h1>
        </div>
        <div className="box_content">
          <Select className="selector_choice" options={type1} />
        </div>
        <div className="box_content">
          <Select className="selector_choice" options={type2} />
        </div>
        <div className="box_content">
          <Select className="selector_choice" options={type3} />
        </div>

        <div className="box_content">
          <Link to={"/Choice page"}>
            <button className="btn_choice">Continuer</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Type;
