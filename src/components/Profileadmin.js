import React from "react";
import "./profileadmin.css";
import { useState } from "react";
import { TextField } from "@mui/material";
import profilepic from "./profile.png";
function Profileadmin() {
  const [formulaire, setformulaire] = useState([]);
  const [noment, setnoment] = useState("");
  const [prenoment, setprenoment] = useState("");
  const [entrepriseent, setentrepriseent] = useState("");
  const [emailent, setemailent] = useState("");
  const [telphonent, settelephonent] = useState(0);
  const [Wilayaent, setwilayaent] = useState("");
  const [passwordent, setpasswordent] = useState("");
  return (
    <div className="admin_container">
      <div className="profile">
        <div className="user_container_box">
          <div className="profile_pic">
            <img src={profilepic} style={{ width: "200px" }}></img>
          </div>
          <div className="user_info">
            <div className="info_inp">
              <TextField
                id="filled-basic"
                className="inp_profile"
                label="Nom"
                variant="filled"
                size="small"
                value={noment}
                onChange={(e) => {
                  setnoment(e.target.value);
                  console.log(e.target.value);
                }}
                // focused={true}
              />
            </div>
            <div className="info_inp">
              <TextField
                id="filled-basic"
                className="inp_profile"
                label="Prenom"
                variant="filled"
                size="small"
                value={prenoment}
                onChange={(e) => {
                  setprenoment(e.target.value);
                }}
              />
            </div>
            <div className="info_inp">
              <TextField
                id="filled-basic"
                label="Nom entreprise"
                variant="filled"
                size="small"
                value={entrepriseent}
                onChange={(e) => {
                  setentrepriseent(e.target.value);
                }}
              />
            </div>
            <div className="info_inp">
              <TextField
                id="filled-basic"
                className="inp_profile"
                label="Numéro"
                variant="filled"
                size="small"
                value={telphonent}
                onChange={(e) => {
                  settelephonent(e.target.value);
                }}
              />
            </div>
            <div className="info_inp">
              <TextField
                id="filled-basic"
                className="inp_profile"
                label="Email"
                variant="filled"
                size="small"
                value={emailent}
                onChange={(e) => {
                  setemailent(e.target.value);
                }}
              />
            </div>
            <div className="info_inp">
              <TextField
                label="Password"
                // color="warning"
                color="secondary"
                className="inp_profile"
                id="standard-basic"
                variant="standard"
                type="password"
                value={passwordent}
                onChange={(e) => {
                  setpasswordent(e.target.value);
                }}
              />
            </div>
            <div className="info_inp">
              <TextField
                id="filled-basic"
                className="inp_profile"
                label="Willaya"
                variant="filled"
                size="small"
                value={Wilayaent}
                onChange={(e) => {
                  setwilayaent(e.target.value);
                }}
              />
            </div>
            {/* <div className="info_inp"></div> */}

            <div className="info_inp">
              <button
                onClick={() => {
                  //   updateprofile();
                }}
                className="btn_profile"
              >
                Modifier
              </button>
            </div>

            {/* <div className="info_inp">
            <button></button>
          </div> */}
            <div className="info_inp"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profileadmin;
