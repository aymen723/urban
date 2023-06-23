import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import pic1 from "./homepic.png";
// import logo from "./src/images/logo.png";
// import logo from "./components/images/logo.png";
import pic2 from "./Investing-rafiki.png";
import pic3 from "./Leader-rafiki.png";

import pic4 from "./Library-rafiki.png";
import pic5 from "./Office management-rafiki.png";

function Home() {
  return (
    <div className="container_home">
      <div className="header">
        <div className="headbar">
          <div className="buttons">
            <img src={"./src/images/logo.png"}></img>
            <a>Home</a>
            <a>About Us</a>
            <a>Service</a>
            <a>Blog</a>
            <a>Portfolio</a>
            <a>Contact Us</a>
          </div>
          <div className="Sign">
            <Link to="/login">
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="content">
          <div className="titles">
            <div className="titles_content">
              <h2>Nous vous aidons</h2>
              <h1>À Construire Votre </h1>
              <h2>Étude De Faisabilité</h2>
              <button className="btn_home">Obtenez votre Étude</button>
            </div>
          </div>
          <div className="images">
            <img src=""></img>
          </div>
        </div>
      </div>

      <div className="block_2">
        <div className="box_block2">
          <div className="split">
            <img src={pic1} style={{}}></img>
          </div>
          <div className="split">
            <div className="title_spilt">
              <div className="line_hr">
                <hr style={{ width: "90px" }} />
              </div>
              <h1>Sur Nous</h1>
            </div>
            <div className="para">
              <h3>
                Simple! Notre objectif est de vous aider à obtenir la meilleure
                étude de faisabilité
              </h3>
            </div>

            <div className="para">
              <h4>
                Nous offrons d'un ensemble de outils qui facilitera l’étude de
                faisabilité des projets à travers ( l'estimation des besoins du
                projet , l'étude de son environnement, la définition des
                objectifs à atteindre, l'élaboration des différentes scénarios,
                l'analyse du retour sur investissement et l'évaluation les
                risques ) éléments souvent ignorés vue leurs complexité.
                <br /> cette idée vise à cerner tous les aspects pouvant
                affecter de tels projets( la faisabilité dans le temps , la
                faisabilité environnementale ,sociale,réglementaire
                ,opérationnelle , technique financière et commerciale).
              </h4>
              <button className="btn_home">contactez-nous</button>
            </div>
          </div>
        </div>
      </div>
      <div className="block_2">
        <div className="service_box">
          <div className="service_title">
            <h1>LES SERVICE QUE VOUS SOUHAITEZ</h1>
          </div>

          <div className="type_services">
            <div className="service">a</div>
            <div className="service">a</div>
          </div>
          <div className="type_services">
            <div className="service">a</div>
            <div className="service">a</div>
          </div>
        </div>
      </div>
      <div className="block_3">
        <div className="clients_box">
          <div className="clients_box_title">
            <h1>Nos Clients</h1>
          </div>
          <div className="type_clinets">
            <div className="clients_cont">
              <div className="clients">
                <img src={pic2}></img>
              </div>
              <div className="pic_title">
                <h1>Investisseur</h1>
              </div>
            </div>
            <div className="clients_cont">
              <div className="clients">
                <img src={pic3}></img>
              </div>
              <div className="pic_title">
                <h1>Entrepreneur</h1>
              </div>
            </div>
            <div className="clients_cont">
              <div className="clients">
                <img src={pic4}></img>
              </div>
              <div className="pic_title">
                <h1>Etudaint</h1>
              </div>
            </div>
            <div className="clients_cont">
              <div className="clients">
                <img src={pic5}></img>
              </div>
              <div className="pic_title">
                <h1>Direction Publique</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block_4">a</div>
    </div>
  );
}

export default Home;
