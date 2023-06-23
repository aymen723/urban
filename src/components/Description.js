import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./Description.css";
import { createRoot } from "react-dom/client";
import Select from "react-select";
import { TextField } from "@mui/material";
import axios from "axios";

function Description() {
  var [currentQuestion, setCurrentQuestion] = useState(0);
  const [formaulaire, setformaulaire] = useState([]);
  // const [selected, setselected] = useState([]);

  const [selectedoption, setselectedoption] = useState([]);
  const [input, setinput] = useState("");
  const prevbtn = useRef();
  const nextbtn = useRef();

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
          value: "ofire des poste de travail",
          label: "ofire des poste de travail",
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
      text: "le sexe ?",
      label: "test",

      options: [
        {
          value: "male",
          label: "male",
        },
        {
          value: "femelle ",
          label: "femelle ",
        },
      ],
      addinp: false,
      addselect: true,
      isMulti: false,
    },
    {
      text: "La willaya ?",
      label: "test",

      options: [
        {
          value: "Adrar",
          label: "Adrar",
        },
        {
          value: "Chlef",
          label: "Chlef",
        },
        {
          value: "Laghouat",
          label: "Laghouat",
        },
        {
          value: "Oum El Bouaghi",
          label: "Oum El Bouaghi",
        },
        {
          value: "Batna",
          label: "Batna",
        },
        {
          value: "Béjaïa",
          label: "Béjaïa",
        },
        {
          value: "Biskra",
          label: "Biskra",
        },
        {
          value: "Bechar",
          label: "Bechar",
        },
        {
          value: "Blida",
          label: "Blida",
        },
        {
          value: "Bouira",
          label: "Bouira",
        },
        {
          value: "Tamanrasset",
          label: "Tamanrasset",
        },
        {
          value: "Tbessa",
          label: "Tbessa",
        },
        {
          value: "Tlemcen",
          label: "Tlemcen",
        },
        {
          value: "Tiaret",
          label: "Tiaret",
        },
        {
          value: "Tizi Ouzou",
          label: "Tizi Ouzou",
        },
        {
          value: "Alger",
          label: "Alger",
        },
        {
          value: "Djelfa",
          label: "Djelfa",
        },
        {
          value: "Jijel",
          label: "Jijel",
        },
        {
          value: "Se9tif",
          label: "Se9tif",
        },
        {
          value: "Saefda",
          label: "Saefda",
        },
        {
          value: "Skikda",
          label: "Skikda",
        },
        {
          value: "Sidi Bel Abbes",
          label: "Sidi Bel Abbes",
        },
        {
          value: "Annaba",
          label: "Annaba",
        },
        {
          value: "Guelma",
          label: "Guelma",
        },
        {
          value: "Constantine",
          label: "Constantine",
        },
        {
          value: "Medea",
          label: "Medea",
        },
        {
          value: "Mostaganem",
          label: "Mostaganem",
        },
        {
          value: "M'Sila",
          label: "M'Sila",
        },
        {
          value: "Mascara",
          label: "Mascara",
        },
        {
          value: "Ouargla",
          label: "Ouargla",
        },
        {
          value: "Oran",
          label: "Oran",
        },
        {
          value: "El Bayadh",
          label: "El Bayadh",
        },
        {
          value: "Illizi",
          label: "Illizi",
        },
        {
          value: "Bordj Bou Arreridj",
          label: "Bordj Bou Arreridj",
        },
        {
          value: "Boumerdes",
          label: "Boumerdes",
        },
        {
          value: "El Tarf",
          label: "El Tarf",
        },
        {
          value: "Tindouf",
          label: "Tindouf",
        },
        {
          value: "Tissemsilt",
          label: "Tissemsilt",
        },
        {
          value: "El Oued",
          label: "El Oued",
        },
        {
          value: "Khenchela",
          label: "Khenchela",
        },
        {
          value: "Souk Ahras",
          label: "Souk Ahras",
        },
        {
          value: "Tipaza",
          label: "Tipaza",
        },
        {
          value: "Mila",
          label: "Mila",
        },
        {
          value: "Ain Defla",
          label: "Ain Defla",
        },
        {
          value: "Naama",
          label: "Naama",
        },
        {
          value: "Ain Temouchent",
          label: "Ain Temouchent",
        },
        {
          value: "Ghardaia",
          label: "Ghardaia",
        },
        {
          value: "Relizane",
          label: "Relizane",
        },
        {
          value: "Djanet",
          label: "Djanet",
        },
        {
          value: "In Amenas",
          label: "In Amenas",
        },
        {
          value: "In Guezzam",
          label: "In Guezzam",
        },
        {
          value: "Ain Salah",
          label: "Ain Salah",
        },
      ],
      addinp: false,
      addselect: true,
      isMulti: false,
    },
    {
      text: "La Commune ?",
      label: "test",

      // options: [
      //   {
      //     value: "male",
      //     label: "male",
      //   },
      //   {
      //     value: "femalle",
      //     label: "femalle",
      //   },
      // ],
      addinp: true,
      addselect: false,
      isMulti: false,
    },
    {
      text: "Quelle est votre revenue menusuelle  ?",
      label: "test",

      // options: [
      //   {
      //     value: "male",
      //     label: "male",
      //   },
      //   {
      //     value: "femalle",
      //     label: "femalle",
      //   },
      // ],
      addinp: true,
      addselect: false,
      isMulti: false,
    },
    {
      text: "Avez-vous l'habitude d'aller a faisabot ?",
      label: "test",

      options: [
        {
          value: true,
          label: "oui",
        },
        {
          value: false,
          label: "non",
        },
      ],
      addinp: false,
      addselect: true,
      isMulti: false,
    },
    {
      text: "  Allez vous seul ou en famille si vous y allez en famille combien de personnes?",
      label: "test",

      // options: [
      //   {
      //     value: "male",
      //     label: "male",
      //   },
      //   {
      //     value: "femalle",
      //     label: "femalle",
      //   },
      // ],
      addinp: true,
      addselect: false,
      isMulti: false,
    },
    {
      text: "  combien avez vous l'habitude de payer dans telles equipement par personnes ?",
      label: "test",

      // options: [
      //   {
      //     value: "male",
      //     label: "male",
      //   },
      //   {
      //     value: "femalle",
      //     label: "femalle",
      //   },
      // ],
      addinp: true,
      addselect: false,
      isMulti: false,
    },
    {
      text: "pensez vous que la situation de ce projet est un emplacement ideal pour celui-ci ?",
      label: "test",

      options: [
        {
          value: true,
          label: "oui",
        },
        {
          value: false,
          label: "non",
        },
      ],
      addinp: false,
      addselect: true,
      isMulti: false,
    },
    {
      text: "pensez vous que ce project aura un impact au niveau ?",
      label: "test",

      // options: [
      //   {
      //     value: true,
      //     label: "oui",
      //   },
      //   {
      //     value: false,
      //     label: "non",
      //   },
      // ],
      addinp: true,
      addselect: false,
      isMulti: false,
    },
    {
      text: "Que pensez vous du bien-fondé de ce projet ?",
      label: "test",

      // options: [
      //   {
      //     value: true,
      //     label: "oui",
      //   },
      //   {
      //     value: false,
      //     label: "non",
      //   },
      // ],
      addinp: true,
      addselect: false,
      isMulti: false,
    },
    {
      text: "Que pensez-vous des risques que ce projet laissera ?",
      label: "test",

      // options: [
      //   {
      //     value: true,
      //     label: "oui",
      //   },
      //   {
      //     value: false,
      //     label: "non",
      //   },
      // ],
      addinp: true,
      addselect: false,
      isMulti: false,
    },
    {
      text: "vous voyez vous etre un jour investisseur dans ce projet ?",
      label: "test",

      options: [
        {
          value: true,
          label: "oui",
        },
        {
          value: false,
          label: "non",
        },
      ],
      addinp: false,
      addselect: true,
      isMulti: false,
    },
  ];

  const duree = [
    { value: "1 a 2 ans", label: "1 a 2 ans" },
    { value: "2 a 3 ans", label: "2 a 3 ans" },
    { value: "3 a 5", label: "3 a 5 ans" },
    { value: "plus de 5 ans", label: "plus de 5 ans" },
  ];
  const marche = [
    { value: "local", label: "local" },
    { value: "national", label: "national" },
    { value: "international", label: "international" },
  ];
  const type_financ = [{ value: "ofrire", label: "personal" }];
  const avantages = [
    {
      value: "ofire des poste de travail",
      label: "ofire des poste de travail",
    },
    {
      value: "il renforce le tourisme dans le region ",
      label: "il renforce le tourisme dans le region",
    },
    {
      value: "il le developpemenet social ",
      label: "il le developpemenet social",
    },
  ];

  const risque = [
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
  ];

  const sexe = [
    {
      value: "male",
      label: "male",
    },
    {
      value: "femalle",
      label: "femalle",
    },
  ];

  const trueorflase = [
    {
      value: true,
      label: "oui",
    },
    {
      value: false,
      label: "non",
    },
  ];

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  function nextquestion() {
    if (currentQuestion < 13) {
      console.log(currentQuestion);

      // if (currentQuestion == 1) {
      //   prevbtn.current.disaled = false;
      // }
      // prevbtn.current.disaled = false;
      // console.log(prevbtn.current.disabled);XX

      setCurrentQuestion(currentQuestion + 1);
      console.log(currentQuestion);
    }

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
      .post("http://localhost:8080/User/New_Forum", data)
      .then((response) => {
        console.log(response);
      });
  }
  function testsession() {
    // axios
    //   .get("http://localhost:8080/ses", { withCredentials: true })
    //   .then((response) => {
    //     console.log(response);
    //   });

    axios.interceptors.request.use(
      (config) => {
        // Add the 'withCredentials' option to allow sending cookies and authorization headers
        config.withCredentials = true;
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Make a request to your API
    axios
      .get("http://localhost:8080/ses")
      .then((response) => {
        // Handle the response
        console.log("hna data ", response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }
  return (
    <div className="description">
      <div className="title_description">
        <h1 className="title_desc">Description sur le project</h1>
      </div>
      <div className="question_box">
        <div className="questions_container">
          <div className="title_box">
            <h3 className="question-text">{questions[currentQuestion].text}</h3>
          </div>

          <div className="options_box">
            <div className="selector_inp">
              {questions[currentQuestion].addselect ? (
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
              ) : (
                <div>walo</div>
              )}
            </div>
            <div className="selector_inp">
              {questions[currentQuestion].addinp ? (
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
              ) : (
                <div>walo</div>
              )}
            </div>

            {/* {questions[currentQuestion].map((option) => {
              return (
                <div>
                  <h1>{option.text}</h1>
                  <Select
                    // defaultValue={[colourOptions[2], colourOptions[3]]}
                    isMulti
                    name="colors"
                    // key={option.id}
                    options={options.option}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                  <li
                    type="checkbox"
                    className="checked"
                    value={option.text}
                    key={option.id}
                    ref={checked}
                    onChange={(e) => {
                      console.log(e.target.value);
                      hundlecheckbox(e);
                    }}
                  ></li>

                  <label>{option.text}</label>
                </div>
              );
            })} */}
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
            {currentQuestion == 13 ? (
              <button
                className="btn_nav"
                style={{ backgroundColor: "green", border: "none" }}
                onClick={() => {
                  // savedescription();
                  testsession();
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
            {currentQuestion < 13 ? (
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
