import React, { useState } from "react";
import "./login.css";
import logo from "./logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
function Login() {

  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");



  function login(){

     const info = {  
      email:email,
      password:password
    }

    // console.log(logininfo);
    axios.post("http://localhost:8080/Connecter",info).then((response)=>{
      console.log(response)
    })

  }
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
                  <label className="header_inp"
                >Address E-Mail</label>
                </div>
                <input className="inp"  onChange={(e)=>{
                    setemail(e.target.value)
                  }}></input>
              </div>
              <div className="input">
                <div className="label_inp">
                  <label className="header_inp" >Mot de Passe</label>
                </div>
                <input className="inp" type="password" onChange={(e)=>{
                    console.log(e.target.value)
                    setpassword(e.target.value)
                  }}></input>
              </div>
              <div className="btn_box">
                <button className="btn_create_account" onClick={()=>{
                  login();
                }}>créer un compte</button>
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
