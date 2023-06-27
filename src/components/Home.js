import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import pic1 from "./homepic.png";
// import logo from "./src/images/logo.png";
// import logo from "./components/images/logo.png";
import pic2 from "./Investing-rafiki.png";
import pic3 from "./Leader-rafiki.png";
import pic4 from "./Library-rafiki.png";
import pic5 from "./Office management-rafiki.png";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import logo from "./logo.png";
import icon3 from "./icon3.png";
import shape3 from "./shape_3.png";
import icon4 from "./icon4.png";
import puls from "./plus.png";
import google from "./google.png";
import home from "./home.png";
import ecplise1 from "./Ellipse 3.png";
import ecplise2 from "./Ellipse 4.png";
import profile from "./profile.png";
import { useEffect } from "react";
import axios from "axios";
import social from "./socials.png";
function Home() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/ses", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setuser(response.data);
      });
  }, []);
  return (
    <div className="container_home">
      <div className="header">
        <div className="headbar">
          <div className="buttons">
            <img src={logo}></img>
            <a>Home</a>
            <a href="#block_1">About Us</a>
            <a href="#block_2">Service</a>
            <a>Blog</a>
            <a>Portfolio</a>
            <a href="#block4">Contact Us</a>
          </div>
          {user == null ? (
            <div className="Sign">
              <Link to="/login">
                <button className="btn">Sign Up</button>
              </Link>
            </div>
          ) : (
            <div className="Sign">
              <img style={{ width: "50px" }} src={profile}></img>
              <Link to="/Profile">
                <button className="btn">profile</button>
              </Link>
            </div>
          )}
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
            <img style={{ width: "600px" }} src={home}></img>
            {/* <img className="ecplise1" src={ecplise1}></img>
            <img className="ecplise2" src={ecplise2}></img> */}
          </div>
        </div>
      </div>

      <div className="block_2">
        <div className="box_block2" id="block_1">
          <div className="split">
            <img src={pic1} style={{ width: "720px" }}></img>
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
      <div className="block_2" id="block_2">
        <div className="service_box">
          <div className="service_title">
            <h1>LES SERVICE QUE VOUS SOUHAITEZ</h1>
          </div>

          <div className="type_services">
            <div className="service">
              <div className="service_icon">
                <img src={icon1}></img>
              </div>
              <div className="service_dec">
                <h3>Etude De Faisabilité Complète</h3>
                <text>
                  Est une étude globale qui touche tous les aspects de la
                  faisabilité du projet qui est comme suit
                </text>
              </div>
              <div className="service_plus">
                <img src={puls}></img>
              </div>
            </div>
            <div className="service">
              <div className="service_icon">
                <img src={icon2}></img>
              </div>
              <div className="service_dec">
                <h3>Etude De Faisabilité Complète Avec Suivi</h3>
                <text>
                  Est une étude globale qui touche tous les aspects de la
                  faisabilité du projet Avec un suivi, à distance ou présentiel
                  du développement du projet
                </text>
              </div>
              <div className="service_plus">
                <img src={puls}></img>
              </div>
            </div>
          </div>
          <div className="type_services">
            <div className="service">
              <div className="service_icon">
                <img src={icon3}></img>
              </div>
              <div className="service_dec">
                <h3>Etude De Faisabilité Partielle</h3>
                <text>
                  sert à étudier L’une des types d'études de faisabilité selon
                  le choix et les besoins de l'utilisateur
                </text>
              </div>
              <div className="service_plus">
                <img src={puls}></img>
              </div>
            </div>
            <div className="service">
              <div className="service_icon">
                <img src={icon4}></img>
              </div>
              <div className="service_dec">
                <h3>Etude De Faisabilité Partielle Avec Suivi</h3>
                <text>
                  sert à étudier L’une des types d'études de faisabilité selon
                  le choix et les besoins de l'utilisateur, avec un suivi à
                  distance ou presentiel du développement du projet
                </text>
              </div>
              <div className="service_plus">
                <img src={puls}></img>
              </div>
            </div>
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
              <div style={{ backgroundColor: "#DCC7FF" }} className="clients">
                <img src={pic2}></img>
              </div>
              <div className="pic_title">
                <h1>Investisseur</h1>
              </div>
            </div>
            <div className="clients_cont">
              <div style={{ backgroundColor: "#AACBFC" }} className="clients">
                <img src={pic3}></img>
              </div>
              <div className="pic_title">
                <h1>Entrepreneur</h1>
              </div>
            </div>
            <div className="clients_cont">
              <div style={{ backgroundColor: "#FFC7E1" }} className="clients">
                <img src={pic4}></img>
              </div>
              <div className="pic_title">
                <h1>Etudaint</h1>
              </div>
            </div>
            <div className="clients_cont">
              <div style={{ backgroundColor: "#FCFFCE" }} className="clients">
                <img src={pic5}></img>
              </div>
              <div className="pic_title">
                <h1>Direction Publique</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block_4" id="#block4">
        <div className="footer_box">
          <div className="image_footer">
            <img src={shape3}></img>
          </div>
          <div className="aboutus_footer">
            <div className="text_footer">
              <div>
                <img src={google}></img>
              </div>
              <text>
                Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at
                placerat tincidunt. Nam sem lacus, ornare non ante sed,
                ultricies fringilla massa.
              </text>
            </div>

            <div className="text_footer">
              <h3>COMPANY</h3>
              <ul>
                <li>About us</li>
                <li>Contact us</li>

                <li>Careers</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="text_footer">
              <h3>About us</h3>

              <ul>
                <li>FAQ </li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="text_footer">
              <h3>Contact</h3>
              <ul>
                <li>Phone: +1 605 722 2032</li>
                <li>Email: example@mail.com</li>

                <li>Address: Charlotte, North Carolina, United States</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resaux_icon_footer">
          <div>
            <img src={social}></img>
          </div>
          <div>
            <text>© 2020 — All Rights Reserved</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
