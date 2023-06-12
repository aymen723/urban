import React from "react";
import "./login.css";
function Login() {
  return (
    <div className="login_container">
      <div className="background"></div>
      <div className="inputs">
        <div className="Back_btn_box">
          <div className="btn_text">
            <button></button>
          </div>
        </div>
        <div className="input_container">
          <div className="title">
            <h1>S'inscrire</h1>
          </div>
          <div className="box">
            <div className="input">
              {/* <label>nom</label> */}
              <input className="inp"></input>
            </div>
            <div className="input">
              {/* <label>Address E-Mail</label> */}
              <input className="inp"></input>
            </div>
            <div className="input">
              {/* <label>Mot de Passe</label> */}
              <input className="inp"></input>
            </div>
            <div className="btn_box">
              <button className="btn_create_account">créer un compte</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
