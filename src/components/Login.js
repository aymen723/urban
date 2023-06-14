import React from "react";
// import "./login.css";
import logo from "./logo.png";

function Login() {
  return (
    <div className="login_container">
      <div className="background">
        <img className="logo_create_account" src={logo}></img>
      </div>
      <div className="inputs">
        <div className="Back_btn_box">
          <div className="btn_text">
            <button className="btn_back">login</button>
            <div className="btn_back_label_box">
              <label className="btn_back_label">retour</label>
            </div>
          </div>
        </div>
        <div className="input_container">
          <div>
            <div className="title">
              <h1 className="connecter_title_h1">se connecter</h1>
            </div>
            <div className="box">
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
              </div>
              <div className="btn_box">
                <button className="btn_create_account">créer un compte</button>
                <div className="btn_label">
                  <label className="footer_inp">
                    Vous avez un compte?<a href="google.com">Cliquez ici</a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
