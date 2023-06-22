import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./Description.css";
import { createRoot } from "react-dom/client";
import Select from "react-select";
import { TextField } from "@mui/material";

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
      prevbtn.current.disaled = false;
      console.log(prevbtn.current.disabled);

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
      questions: questions[currentQuestion].text,
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
      if (currentQuestion == 1) {
        prevbtn.current.disabled = true;
      }
    }
  }
  return (
    <div className="description">
      <div className="title_description">
        <h1>Description sur le project</h1>
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
            <button
              className="btn_nav"
              ref={prevbtn}
              onClick={() => {
                perviousquestion();
              }}
            >
              Pervious
            </button>
            <button
              className="btn_nav"
              onClick={() => {
                nextquestion();
              }}
              ref={nextbtn}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
