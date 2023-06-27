import React, { useState } from "react";
import "./login.css";
import logo from "./logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userlogin, setuserlogin] = useState(null);
  const navigate = useNavigate();

  function login() {
    const info = {
      email: email,
      password: password,
    };
    let user = null;

    // console.log(logininfo);
    axios
      .post("http://localhost:8080/Connecter", info, { withCredentials: true })
      .then((response) => {
        setuserlogin(response.data);
        user = response.data;
        console.log(user);

        if (user != null) {
          if (user.admin === false) {
            navigate("/Profile", {
              state: { id: 1, color: "green" },
            });
          } else {
            navigate("/Admin", {
              state: { id: 1, color: "green" },
            });
          }
        }
        // if (user != null) {
        //   navigate("/Profile");
        // }
      });
  }

  // if (user != null) {
  //   return <Navigate to="/Profile" />;
  // }
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
                <input
                  className="inp"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                ></input>
              </div>
              <div className="input">
                <div className="label_inp">
                  <label className="header_inp">Mot de Passe</label>
                </div>
                <input
                  className="inp"
                  type="password"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setpassword(e.target.value);
                  }}
                ></input>
              </div>
              <div className="btn_box">
                <button
                  className="btn_create_account"
                  onClick={() => {
                    login();
                  }}
                >
                  créer un compte
                </button>
                <div className="btn_label">
                  <label className="footer_inp">
                    Vous avez un compte?<Link to="/Singup">Cliquez ici</Link>
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
