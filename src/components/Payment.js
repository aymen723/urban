import React, { useState } from "react";
import "./payment.css";
import { TextField } from "@mui/material";
import baridi from "./baridi.png";
import visa from "./visa.png";
import pay from "./backgroundpay.png";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  const handlePayment = () => {
    // Perform payment processing logic here
  };

  return (
    <div className="payment_container">
      <div className="payment_background">
        <img src={pay}></img>
      </div>
      <div className="payment_box">
        <div className="payment_package">
          <h3>Le montant : </h3> <h1> {"  "}10000 DA</h1>
        </div>
        <div className="payment_choice">
          <img className="png_pay" src={baridi}></img>
          <img className="png_pay" src={visa}></img>
        </div>
        <div className="payment_inp">
          <TextField
            className="inp_p"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />

          <div className="two_inp">
            <TextField
              className="inp_two"
              id="outlined-basic"
              label="Nom"
              variant="outlined"
            />

            <TextField
              className="inp_two"
              id="outlined-basic"
              label="Prenom"
              variant="outlined"
            />
          </div>

          <TextField
            className="inp_p"
            id="outlined-basic"
            label="Numero de la cards"
            variant="outlined"
          />
          <div className="two_inp">
            <TextField
              className="inp_two"
              id="outlined-basic"
              label="CVV"
              variant="outlined"
            />
            <TextField
              className="inp_two"
              id="outlined-basic"
              label="Expritation"
              variant="outlined"
            />
          </div>
        </div>
        <div className="payment_btn">
          <button className="btn_payer">Payer</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
