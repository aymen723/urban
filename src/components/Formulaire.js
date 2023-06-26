import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./Description.css";
import { createRoot } from "react-dom/client";
import Select from "react-select";
import { TextField } from "@mui/material";
import axios from "axios";
import { json, useLocation } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
// import { ObjectId } from "mongodb";
import "./formulaire.css";
function Formaulaire() {
  var [currentQuestion, setCurrentQuestion] = useState(0);
  const [formaulaire, setformaulaire] = useState([]);

  const [respone, setresponse] = useState();
  const [selectedoption, setselectedoption] = useState([]);
  const [input, setinput] = useState("");
  const prevbtn = useRef();
  const nextbtn = useRef();
  const location = useLocation();
  const [id_from, setid_from] = useState();
  const [situation, setsituation] = useState();
  var [answerss, setanswerss] = useState([]);

  // const descr = {
  //   options:
  //     "Nous somme l'entreprise de FAIS-BOT pour etudier la faisablite des projets dans le cadre de l'etude de faisabilite sociale de la realisation de ce projet , nous vous representons ce questionnaire et vous remercions de prendre quelques miniutes pour le remplir  . vos reponse sont anonymes ",
  //   label: "test",

  //   // options: [
  //   //   {
  //   //     value: "male",
  //   //     label: "male",
  //   //   },
  //   //   {
  //   //     value: "femelle ",
  //   //     label: "femelle ",
  //   //   },
  //   // ],
  //   // addinp: false,
  //   // addselect: true,
  //   // isMulti: false,
  // };
  const questions = [
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
      text: "Quelle est votre revenu mensuel ?",
      label: "test",

      options: [
        {
          value: "10000 da",
          label: "10000 da",
        },
        {
          value: "10000 a 20000 da",
          label: "10000 a 20000 da",
        },
        {
          value: "20000 a 50000 da",
          label: "20000 a 50000 da",
        },
        {
          value: "50000 a 70000 da",
          label: "50000 a 70000 da",
        },
      ],
      addinp: true,
      addselect: false,
      isMulti: false,
    },
    {
      text: "Avez-vous l'habitude d'aller à faisabot ?",
      label: "test",

      options: [
        {
          value: "oui",
          label: "oui",
        },
        {
          value: "non",
          label: "non",
        },
      ],
      addinp: false,
      addselect: true,
      isMulti: false,
    },
    {
      text: "Allez-vous seul ou en famille ? Si vous y allez en famille, combien de personnes ?",
      label: "test",

      options: [
        {
          value: "seul",
          label: "seul",
        },
        {
          value: "1 personnes",
          label: "1 personnes",
        },
        {
          value: "2 personnes",
          label: "2 personnes",
        },
        {
          value: "3 personnes",
          label: "3 personnes",
        },
        {
          value: "3 personnes",
          label: "3 personnes",
        },
        {
          value: "plus que 3",
          label: "plus que 3",
        },
      ],
      addinp: true,
      addselect: false,
      isMulti: false,
    },
    {
      text: "Combien avez-vous l'habitude de payer dans de tels équipements par personne ?",
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
      text: `Pensez-vous que la situation de ce projet ${
        respone != null ? respone.questoins[1].answers[0] : null
      } est un emplacement idéal pour celui-ci ?`,
      label: "test",

      options: [
        {
          value: "oui",
          label: "oui",
        },
        {
          value: "non",
          label: "non",
        },
      ],
      addinp: false,
      addselect: true,
      isMulti: false,
    },
    {
      text: "Pensez-vous que ce projet aura un impact au niveau ?",
      label: "test",

      options: [
        { value: "local", label: "local" },
        { value: "national", label: "national" },
        { value: "international", label: "international" },
      ],
      addinp: false,
      addselect: true,
      isMulti: false,
    },
    {
      text: "Que pensez-vous du bien-fondé de ce projet ?",
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
      isMulti: false,
    },
    {
      text: "Que pensez-vous des risques que ce projet laissera ?",
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
      // addinp: true,
      addselect: true,
      isMulti: false,
    },
    {
      text: "Vous voyez-vous être un jour investisseur dans ce projet ?",
      label: "test",

      options: [
        {
          value: "oui",
          label: "oui",
        },
        {
          value: "non",
          label: "non",
        },
      ],
      addinp: false,
      addselect: true,
      isMulti: false,
    },
    {
      text: "Le Questionnaire est termine vous pouvez l'enregistrez ?",
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
  // const result = `pensez vous que la situation de ce projet ${respone.questoins[1].answers[0]} est un emplacement ideal pour celui-ci ?`;

  function nextquestion() {
    if (currentQuestion < 12) {
      console.log(currentQuestion);

      // if (currentQuestion == 1) {
      //   prevbtn.current.disaled = false;
      // }
      // prevbtn.current.disaled = false;
      // console.log(prevbtn.current.disabled);XX

      setCurrentQuestion(currentQuestion + 1);
      console.log(currentQuestion);

      console.log(selectedoption);

      const element = {
        text: questions[currentQuestion].text,
        answers: [
          {
            answer_text: selectedoption,
            // answer_text: testanswer,
            answer_count: 1,
          },
        ],
        // answers: testanswer,
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

  function saveformulaire() {
    let form = {
      id: respone.forum_id,
      idstring: id_from,
      questions: formaulaire,
    };

    console.log("putting id", form);

    axios
      .post("http://localhost:8080/NewQuestionnaire", form)
      .then((respone) => {
        console.log(respone);
      });
    // axios.get;
  }
  useEffect(() => {
    console.log(location.pathname.slice(12));

    console.log(location.pathname.length);
    setid_from(location.pathname.slice(12));

    console.log("idforum", id_from);
    let body = {
      data: location.pathname.slice(12),
    };

    axios.post("http://localhost:8080/User/Forum", body).then((respone) => {
      console.log(respone.data);
      setresponse(respone.data);
    });

    // http://localhost:3000/Formulaire/64972afb03e0fa634be5e4a0
  }, []);
  return (
    <div className="description">
      <div className="title_description">
        <h1 className="title_desc">Questionner sur le projet</h1>
      </div>
      <div className="questioner_box">
        <div className="descrption_box">
          {respone != null ? (
            <h3>
              Nous somme l'entreprise de FAIS-BOT pour etudier la faisablite des
              projets dans le cadre de l'etude de faisabilite sociale de la
              realisation de {respone.questoins[0].answers[0]}
              ,suite a {respone.questoins[1].answers[0]} nous vous representons
              ce questionnaire et vous remercions de prendre quelques miniutes
              pour le remplir . vos reponse sont anonymes
            </h3>
          ) : (
            <div>test</div>
          )}
        </div>
        <div className="questions_container">
          <div className="title_box">
            <h3 className="question-text">{questions[currentQuestion].text}</h3>
          </div>

          <div className="options_box">
            {/* {currentQuestion == -1 ? (
              <div className="selector_inp">
                <h3>{descr.options}</h3>
              </div>
            ) : null} */}
            {
              questions[currentQuestion].addselect ? (
                <div className="selector_inp">
                  <Select
                    isMulti={questions[currentQuestion].isMulti}
                    name="colors"
                    // key={option.id}
                    // questions[currentQuestion].isMulti
                    onChange={(e) => {
                      console.log(e.value);
                      setselectedoption(e.value);
                      // if (questions[currentQuestion].isMulti == false) {
                      //   const test = [
                      //     {
                      //       value: e.value,
                      //       label: e.value,
                      //     },
                      //   ];
                      //   // console.log(test.value);
                      //   setselectedoption(test);
                      // } else {
                      //   setselectedoption(e);
                      // }

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
            {
              questions[currentQuestion].addinp ? (
                <div className="selector_inp">
                  <TextField
                    id="outlined-basic"
                    label={questions[currentQuestion].label}
                    variant="outlined"
                    className="descr_inp"
                    value={input}
                    onChange={(e) => {
                      setinput(e.target.value);

                      setselectedoption(e.target.value);
                      console.log(e.target.value);
                    }}
                  ></TextField>
                </div>
              ) : null
              // <div>walo</div>
            }
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
            {currentQuestion == 12 ? (
              <button
                className="btn_nav"
                style={{ backgroundColor: "green", border: "none" }}
                onClick={() => {
                  saveformulaire();
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
            {currentQuestion < 12 ? (
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

export default Formaulaire;
