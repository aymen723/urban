import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// import logo from "./src/images/logo.png";
// import logo from "./components/images/logo.png";
function Home() {
  return (
    <div className="container">
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
      
          <Link to="/login" ><button className="btn">Sign Up</button></Link>

          </div>
        </div>
        <div className="content">
          <div className="titles">
            <div className="titles_content">
              <h3>Nous vous aidons</h3>
              <h1>À Construire Votre </h1>
              <h3>Étude De Faisabilité</h3>
              <button></button>
            </div>
          </div>
          <div className="images">
            <img src=""></img>
          </div>
        </div>
      </div>

      <div className="block_2"></div>
    </div>
  );
}

export default Home;
