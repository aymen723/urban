import React, { Component } from "react";
import "./thanks.css";
import Home from "./home.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { ObjectId } from "bson-objectid";

function Thanks() {
  const location = useLocation();
  useEffect(() => {
    console.log("hna fl useeffect", location.state.id);
    let test = location.state.id;
  }, []);
  return (
    <div className="container_thanks">
      <div className="box_thanks">
        <h3>Merci</h3>
        <img style={{ width: "300px" }} src={Home}></img>
        <br></br>
        <text>
          votre lien du Questioner : http://localhost:3000/Formulaire/
          {location.state.id}
        </text>
      </div>
    </div>
  );
}

export default Thanks;
