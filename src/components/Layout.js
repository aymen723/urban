import React, { Profiler } from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./signup";
import Choice_page from "./Choice_page";
import Select_page from "./Select_page";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from "./Description";
import Description2 from "./Description2";
import Formaulaire from "./Formulaire";
import Result from "./Result";
import Thanks from "./Thanks";
import Profileadmin from "./Profileadmin";
import Payment from "./Payment";
import Service from "./Service";

function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="" element={<Home />}> */}
        <Route path="/" element={<Home />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Singup" element={<Signup />} />
        <Route path="/Choice page" element={<Choice_page />} />
        <Route path="/Selection" element={<Select_page />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Description" element={<Description />} />
        <Route path="/Admin" element={<Profileadmin />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Service" element={<Service />} />

        <Route path="/Formulaire/:id" element={<Formaulaire />} />
        <Route path="/Thankyou" element={<Thanks />} />

        <Route path="/Result" element={<Result />} />

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;
