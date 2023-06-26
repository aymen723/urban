import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./Description.css";
import { createRoot } from "react-dom/client";
import Select from "react-select";
import { TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Description() {
  var [currentQuestion, setCurrentQuestion] = useState(0);
  const [formaulaire, setformaulaire] = useState([]);

  const [selectedoption, setselectedoption] = useState([]);
  const [input, setinput] = useState("");
  const [response, setresponse] = useState(null);
  const prevbtn = useRef();
  const nextbtn = useRef();
  const navigate = useNavigate();

  // function hundlecheckbox(e) {
  //   console.log(e.target.value);
  //   setselected();
  //   answers[currentQuestion] = [...e.target.value];
  //   setselected((oldArray) => [...oldArray, e]);
  //   selected[currentQuestion] = e.target.value;
  // }

  const questions = [
    {
      text: "Le titre de project?",
      label: "test",
      // options: [
      //   { value: "chocolate", label: "Chocolate" },
      //   { value: "strawberry", label: "Strawberry" },
      //   { value: "vanilla", label: "Vanilla" },
      // ],
      addinp: true,
      addselect: false,
    },
    {
      text: "La situation enacte de projet ?",
      label: "test",

      // options: [
      //   { value: "chocolate", label: "Chocolate" },
      //   { value: "strawberry", label: "Strawberry" },
      //   { value: "vanilla", label: "Vanilla" },
      // ],
      addinp: true,
      addselect: false,
    },
    {
      text: "La durée prévue ?",
      label: "test",

      options: [
        { value: "1 a 2 ans", label: "1 a 2 ans" },
        { value: "2 a 3 ans", label: "2 a 3 ans" },
        { value: "3 a 5", label: "3 a 5 ans" },
        { value: "plus de 5 ans", label: "plus de 5 ans" },
      ],
      addinp: false,
      addselect: true,
      isMulti: false,
    },
    {
      text: "Le marche de votre projet ?",
      label: "test",

      options: [
        { value: "local", label: "local" },
        { value: "national", label: "national" },
        { value: "international", label: "international" },
      ],
      addinp: false,
      addselect: true,
      isMulti: true,
    },
    {
      text: "Le type de financement?",
      label: "test",

      options: [{ value: "personnel", label: "personnel" }],
      addinp: true,
      addselect: true,
      isMulti: false,
    },
    {
      text: "Quelle est l'importance de ce projet et quelle seront ses avantages pour la sociéte ?",
      label: "test",

      options: [
        {
          value: "ofrire des poste de travail",
          label: "ofrire des poste de travail",
        },
        {
          value: "il renforce le tourisme dans le region ",
          label: "il renforce le tourisme dans le region",
        },
        {
          value: "il le developpemenet social ",
          label: "il le developpemenet social",
        },
      ],
      addinp: false,
      addselect: true,
      isMulti: true,
    },
    {
      text: "Que pensez-vous que votre projet crée comme des risques pour la societe ?",
      label: "test",

      options: [
        {
          value: "Risques de securite",
          label: "Risques de securite",
        },
        {
          value: "pollution",
          label: "pollution",
        },
        {
          value: "risque de l'encombrement",
          label: "risque de l'encombrement",
        },
      ],
      addinp: false,
      addselect: true,
      isMulti: true,
    },
    {
      text: "c'est la fin des questione voulez vous l'enregistre  ?",
      // label: "test",

      // options: [
      //   {
      //     value: "Risques de securite",
      //     label: "Risques de securite",
      //   },
      //   {
      //     value: "pollution",
      //     label: "pollution",
      //   },
      //   {
      //     value: "risque de l'encombrement",
      //     label: "risque de l'encombrement",
      //   },
      // ],
      // addinp: false,
      // addselect: true,
      // isMulti: true,
    },
  ];

  function nextquestion() {
    if (currentQuestion < 7) {
      console.log(currentQuestion);

      // if (currentQuestion == 1) {
      //   prevbtn.current.disaled = false;
      // }
      // prevbtn.current.disaled = false;
      // console.log(prevbtn.current.disabled);XX

      setCurrentQuestion(currentQuestion + 1);
      console.log(currentQuestion);

      console.log(selectedoption);

      const testanswer = selectedoption.map((option) => {
        return option.value;
      });

      if (input != "") {
        testanswer.push(input);
      }
      const element = {
        text: questions[currentQuestion].text,
        answers: testanswer,
      };

      formaulaire[currentQuestion] = element;

      console.log("formaulaire ", formaulaire);
      console.log(" elements ", element);

      setselectedoption([]);
      setinput("");
    }
  }
  function perviousquestion() {
    if (currentQuestion > 0) {
      console.log(currentQuestion);
      setCurrentQuestion(currentQuestion - 1);
      // if (currentQuestion == 1) {
      //   prevbtn.current.disabled = true;
      // }
    }

    setselectedoption([]);
    setinput("");
  }

  function savedescription() {
    console.log("saved");
    console.log(formaulaire);
    let data = { questoins: formaulaire };
    console.log(data);
    axios
      .post("http://localhost:8080/User/New_Forum", data, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setresponse(response.data);
        console.log(response.data.idString);
        navigate("/Thankyou", { state: { id: response.data.idstring } });
      });
  }
  function testsession() {
    axios
      .get("http://localhost:8080/ses", { withCredentials: true })
      .then((response) => {
        console.log(response);
      });

    // axios.interceptors.request.use(
    //   (config) => {
    //     // Add the 'withCredentials' option to allow sending cookies and authorization headers
    //     return config;
    //   },
    //   (error) => Promise.reject(error)
    // );

    // // Make a request to your API
    // axios
    //   .get("http://localhost:8080/ses")
    //   .then((response) => {
    //     // Handle the response
    //     console.log("hna data ", response.data);
    //   })
    //   .catch((error) => {
    //     // Handle any errors
    //     console.error(error);
    //   });
  }
  return (
    <div className="description">
      <div className="title_description">
        <h1 className="title_desc">Description du project</h1>
      </div>
      <div className="question_box">
        <div className="questions_container">
          <div className="title_box">
            <h3 className="question-text">{questions[currentQuestion].text}</h3>
          </div>

          <div className="options_box">
            {
              questions[currentQuestion].addselect ? (
                <div className="selector_inp">
                  <Select
                    isMulti={questions[currentQuestion].isMulti}
                    name="colors"
                    // key={option.id}
                    // questions[currentQuestion].isMulti
                    onChange={(e) => {
                      // console.log(e.value);
                      if (questions[currentQuestion].isMulti == false) {
                        const test = [
                          {
                            value: e.value,
                            label: e.value,
                          },
                        ];
                        console.log(test);
                        setselectedoption(test);
                      } else {
                        setselectedoption(e);
                      }

                      // setselectedoption(e);
                      // console.log(e[0].value);
                    }}
                    value={selectedoption}
                    options={questions[currentQuestion].options}
                    className="selector"
                    // styles={}
                    // className="basic-multi-select"
                    // classNamePrefix="select"
                  />
                </div>
              ) : null
              // <div>walo</div>
            }
            {questions[currentQuestion].addinp ? (
              <div className="selector_inp">
                <TextField
                  id="outlined-basic"
                  label={questions[currentQuestion].label}
                  variant="outlined"
                  className="descr_inp"
                  value={input}
                  onChange={(e) => {
                    setinput(e.target.value);

                    console.log(e.target.value);
                  }}
                ></TextField>
              </div>
            ) : null}
          </div>
          <div className="navigate_btn">
            {currentQuestion > 0 ? (
              <button
                className="btn_nav"
                ref={prevbtn}
                onClick={() => {
                  perviousquestion();
                }}
              >
                Pervious
              </button>
            ) : null}
            {currentQuestion == 7 ? (
              <button
                className="btn_nav"
                style={{ backgroundColor: "green", border: "none" }}
                onClick={() => {
                  savedescription();

                  // testsession();
                }}
                // ref={nextbtn}
              >
                Enregistrer
              </button>
            ) : null}
            {/* <button
              className="btn_nav"
              onClick={() => {
                nextquestion();
              }}
              ref={nextbtn}
            >
              Next
            </button> */}
            {currentQuestion < 7 ? (
              <button
                className="btn_nav"
                onClick={() => {
                  nextquestion();
                }}
                ref={nextbtn}
              >
                Next
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
