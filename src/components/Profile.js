import React from "react";
import "./profile.css";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import profilepic from "./profile.png";
import { useNavigate } from "react-router-dom";
function Profile() {
  const location = useLocation();
  // const { id, color } = state; // Read values passed on state

  const navigate = useNavigate();
  const [formulaire, setformulaire] = useState([]);
  const [noment, setnoment] = useState("");
  const [prenoment, setprenoment] = useState("");
  const [entrepriseent, setentrepriseent] = useState("");
  const [emailent, setemailent] = useState("");
  const [telphonent, settelephonent] = useState(0);
  const [Wilayaent, setwilayaent] = useState("");
  const [passwordent, setpasswordent] = useState("");
  // function createnewprojects() {
  //   console.log(location.state.color);
  //   console.log(location.state.id);
  // }

  function getuserdata() {
    axios
      .get("http://localhost:8080/ses", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        console.log("hna", response.data);
        setnoment(response.data.name);
        setemailent(response.data.email);
        setpasswordent(response.data.password);
        setprenoment(response.data.surname);
        settelephonent(response.data.phone);
        setwilayaent(response.data.state);
        setentrepriseent(response.data.entp_name);
      });

    axios
      .get("http://localhost:8080/User/MyForums", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setformulaire(response.data);
      });
  }

  function updateprofile() {
    const user = {
      name: noment,
      surname: prenoment,
      entp_name: entrepriseent,
      email: emailent,
      phone: telphonent,
      password: passwordent,
      state: Wilayaent,
    };
    axios
      .post("http://localhost:8080/User/Profile", user, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
      });
  }

  function deconnecter() {
    axios.get("http://localhost:8080/Deconnecter").then((response) => {
      console.log(response);
      console.log(sessionStorage);
      navigate("/login");
    });
  }

  useEffect(() => {
    getuserdata();
  }, []);
  return (
    <div className="container_profile">
      <div className="profile">
        <div className="user_container_box">
          <div className="profile_pic">
            <img src={profilepic} style={{ width: "200px" }}></img>
          </div>
          <div className="user_info">
            <div className="info_inp">
              <TextField
                color="secondary"
                className="inp_profile"
                id="standard-basic"
                variant="standard"
                label="Nom"
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
                color="secondary"
                className="inp_profile"
                id="standard-basic"
                variant="standard"
                label="Prenom"
                size="small"
                value={prenoment}
                onChange={(e) => {
                  setprenoment(e.target.value);
                }}
              />
            </div>
            <div className="info_inp">
              <TextField
                color="secondary"
                className="inp_profile"
                id="standard-basic"
                variant="standard"
                size="small"
                value={entrepriseent}
                onChange={(e) => {
                  setentrepriseent(e.target.value);
                }}
              />
            </div>
            <div className="info_inp">
              <TextField
                color="secondary"
                className="inp_profile"
                id="standard-basic"
                variant="standard"
                label="Numéro"
                size="small"
                value={telphonent}
                onChange={(e) => {
                  settelephonent(e.target.value);
                }}
              />
            </div>
            <div className="info_inp">
              <TextField
                color="secondary"
                className="inp_profile"
                id="standard-basic"
                variant="standard"
                label="Email"
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
                color="secondary"
                className="inp_profile"
                id="standard-basic"
                variant="standard"
                label="Willaya"
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
                  updateprofile();
                }}
                className="btn_profile"
              >
                Modifier
              </button>
              <button
                onClick={() => {
                  deconnecter();
                }}
                className="btn_dec"
              >
                Deconnecter
              </button>
            </div>

            {/* <div className="info_inp">
            <button></button>
          </div> */}
            <div className="info_inp"></div>
          </div>
        </div>
      </div>

      <div className="project_box">
        {/* <div className="new_project_box">
          <div className="create_project">
            <div>
              <h1>Nouveau etude</h1>
            </div>
            <div>
              <Link to={"/Choice page"}>
                <button>Cree</button>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="all_project_box">
          <div className="all_project">
            <div className="all_project_title">
              <h1>Mes Projets</h1>
              <div className="project_btn">
                <Link to={"/service"}>
                  <button
                    className="btn_profile"
                    onClick={() => {
                      // createnewprojects();
                    }}
                  >
                    créer une etude
                  </button>
                </Link>
              </div>
            </div>
            <div className="list_project">
              {formulaire.map((value) => {
                return (
                  <div className="project">
                    <div className="project_name">
                      <h3>{value.questoins[0].answers[0]}</h3>
                    </div>
                    <div className="project_link">
                      <text>http://localhost:8080/{value.idstring}</text>
                    </div>
                    <div className="project_btn">
                      <button
                        className="btn_profile"
                        onClick={() => {
                          navigate("/Result", {
                            state: { id: value },
                          });
                          console.log(value.forum_id);
                        }}
                      >
                        Détails
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* <table>
                <tr>
                  <th>Nom du projet</th>
                  <th>Details</th>
                </tr>
                {formulaire.map((value) => {
                  return (
                    <tr key={value.forum_id}>
                      <td>{value.questoins[0].answers[0]}</td>
                      <td>
                        <button>Détails</button>
                      </td>
                    </tr>
                  );
                })}
              </table> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
