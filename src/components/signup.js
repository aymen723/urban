import React, { useState } from "react";
import "./signup.css";
import logo from "./logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
function Signup() {
  const [etudaint, setetudaint] = useState(false);
  const [entrepreneur, setentrepreneur] = useState(false);

  const [noment, setnoment] = useState("");
  const [prenoment, setprenoment] = useState("");
  const [entrepriseent, setentrepriseent] = useState("");
  const [emailent, setemailent] = useState("");
  const [telphonent, settelephonent] = useState(0);
  const [Wilayaent, setwilayaent] = useState("");
  const [passwordent, setpasswordent] = useState("");

  function nomhundler(e) {
    setnoment(e.target.value);
    console.log(e.target.value);
  }

  function prenomhundler(e) {
    setprenoment(e.target.value);
    console.log(e.target.value);
  }

  function emailhundler(e) {
    setemailent(e.target.value);
  }

  function telephonhundler(e) {
    e.pereventdefault();
    settelephonent(e.target.value);
  }

  function entrepisehundler(e) {
    console.log(e.target.value);
    setentrepriseent(e.target.value);
  }

  function passwordhundler(e) {
    // e.pereventdefault();
    // console.log();
    setpasswordent(e.target.value);
  }

  function wilayahundler(e) {
    setwilayaent(e.target.value);
  }

  function createentrepreneur(e) {
    // e.event.preventDefault();
    const user = {
      name: noment,
      surname: prenoment,
      entp_name: entrepriseent,
      email: emailent,
      phone: telphonent,
      password: passwordent,
      state: Wilayaent,
    };

    axios.post("http://localhost:8080/User/Inscrire", user).then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="login_container">
      <div className="background">
        <img className="logo_create_account" src={logo}></img>
      </div>
      <div className="inputs">
        <div className="Back_btn_box">
          <div className="btn_text">
            <button className="btn_back">{"<"}</button>
            <div className="btn_back_label_box">
              <label className="btn_back_label">retour</label>
            </div>
          </div>
        </div>
        <div className="input_container">
          <div>
            <div className="title">
              <h1>S'inscrire</h1>
            </div>
            <div className="account_role_box">
              <button
                className="btn_role"
                onClick={() => {
                  setetudaint(true);
                }}
              >
                étudiant
              </button>
              <button
                className="btn_role"
                onClick={() => {
                  setetudaint(false);
                }}
              >
                entrepreneur
              </button>
            </div>
            {etudaint ? (
              <div className="box">
                <div className="input">
                  <div className="label_inp">
                    <label className="header_inp">nom</label>
                  </div>
                  <input className="inp"></input>
                </div>
                <div className="input">
                  <div className="label_inp">
                    <label className="header_inp">Address E-Mail</label>
                  </div>
                  <input className="inp"></input>
                </div>
                <div className="input">
                  <div className="label_inp">
                    <label className="header_inp">Mot de Passe</label>
                  </div>
                  <input className="inp" type="password"></input>
                  <div className="label_inp">
                    <input type="checkbox"></input>
                    <label className="footer_inp">
                      J'accepte les Termes et Conditions
                    </label>
                  </div>
                </div>
                <div className="btn_box">
                  <button className="btn_create_account">
                    créer un compte
                  </button>
                  <div className="btn_label">
                    <label className="footer_inp">
                      Vous avez un compte?<a href="google.com">Cliquez ici</a>
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <div className="box">
                <div className="input_nom_prenome">
                  <div className="label_nom_prenom">
                    <label className="label_nom">nom</label>
                    <input
                      className="inp_nomprenome"
                      onChange={(e) => {
                        nomhundler(e);
                      }}
                    ></input>
                  </div>
                  <div className="label_nom_prenom">
                    <label
                      className="label_nom"
                      onChange={(e) => {
                        prenomhundler(e);
                      }}
                    >
                      prenom
                    </label>
                    <input
                      className="inp_nomprenome"
                      onChange={(e) => {
                        prenomhundler(e);
                      }}
                    ></input>
                  </div>
                </div>

                <div className="input">
                  <div className="label_inp">
                    <label className="header_inp">Nom entreprise</label>
                  </div>
                  <input
                    className="inp"
                    onChange={(e) => {
                      entrepisehundler(e);
                    }}
                  ></input>
                </div>
                <div className="input">
                  <div className="label_inp">
                    <label
                      className="header_inp"
                      onChange={(e) => {
                        telephonhundler(e);
                      }}
                    >
                      Numéro Telephon
                    </label>
                  </div>
                  <input className="inp"></input>
                </div>
                <div className="input">
                  <div className="label_inp">
                    <label className="header_inp">Address E-mail</label>
                  </div>
                  <input
                    className="inp"
                    onChange={(e) => {
                      emailhundler(e);
                    }}
                  ></input>
                </div>
                <div className="input">
                  <div className="label_inp">
                    <label className="header_inp">Mot de Passe</label>
                  </div>
                  <input
                    className="inp"
                    onChange={(e) => {
                      passwordhundler(e);
                    }}
                    type="password"
                  ></input>
                </div>
                <div className="input">
                  <div className="label_inp">
                    <label className="header_inp">Wilaya</label>
                  </div>
                  <input
                    onChange={(e) => {
                      wilayahundler(e);
                    }}
                    className="inp"
                  ></input>
                  <div className="label_inp">
                    <input type="checkbox"></input>
                    <label className="footer_inp">
                      J'accepte les Termes et Conditions
                    </label>
                  </div>
                </div>
                <div className="btn_box">
                  <button
                    className="btn_create_account"
                    onClick={(e) => {
                      createentrepreneur(e);
                    }}
                  >
                    créer un compte
                  </button>
                  <div className="btn_label">
                    <label className="footer_inp">
                      Vous avez un compte?<Link to="/login">Cliquez ici</Link>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
