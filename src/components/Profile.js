import React from "react";
import "./profile.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="container_profile">
      <div className="profile">
        <div className="user_container_box">
          <div className="profile_pic">
            a<img></img>
          </div>
          <div className="user_info">
            <div className="info_inp">
              <TextField
                id="filled-basic"
                className="inp_profile"
                label="Nom"
                variant="filled"
                size="small"
              />
            </div>
            <div className="info_inp">
              <TextField
                id="filled-basic"
                className="inp_profile"
                label="Prenom"
                variant="filled"
                size="small"
              />
            </div>
            <div className="info_inp">
              <TextField
                id="filled-basic"
                label="Nom entreprise"
                variant="filled"
                size="small"
              />
            </div>
            <div className="info_inp">
              <TextField
                id="filled-basic"
                className="inp_profile"
                label="Email"
                variant="filled"
                size="small"
              />
            </div>
            <div className="info_inp">
              <TextField
                id="filled-basic"
                className="inp_profile"
                label="Email"
                variant="filled"
                size="small"
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
              />
            </div>
            {/* <div className="info_inp">
            <button></button>
          </div> */}
            <div className="info_inp"></div>
          </div>
        </div>
      </div>

      <div className="project_box">
        <div className="new_project_box">
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
        </div>
        <div className="all_project_box">
          <div className="all_project">
            <div className="all_project_title">
              <h1>votre projet</h1>
            </div>
            <div className="list_project">
              <div className="project">a</div>
              <div className="project">a</div>
              <div className="project">a</div>
              <div className="project">a</div>
              <div className="project">a</div>
              <div className="project">a</div>
              <div className="project">a</div>
              <div className="project">a</div>
              <div className="project">a</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
