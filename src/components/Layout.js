import React from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./signup";
import Choice_page from "./Choice_page";
import Select_page from "./Select_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Layout() {

    return(
    <BrowserRouter>
      <Routes>
        {/* <Route path="" element={<Home />}> */}
        <Route path="/" element={<Home />}/>

          <Route path="/Login" element={<Login/>} />
          <Route path="/Singup" element={<Signup />} />
          <Route path="/Choice page" element={<Choice_page />} />
          <Route path="/Selection" element={<Select_page />} />

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    )
};


export default Layout;