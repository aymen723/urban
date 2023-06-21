import React from "react";
import "./Description2.css";
import Select from "react-select";
import { TextField } from "@mui/material";
function Description2() {
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

  return (
    <div className="container_description">
      <div className="question_box">
        <div>
          <h1>Description sur le project</h1>
        </div>

        <div className="questions">
          <div className="question">
            <div className="title_inp">
              <text>Le titre de project?</text>
            </div>
            <TextField
              size="small"
              id="standard-basic"
              label="Standard"
              variant="standard"
            />{" "}
          </div>
          <div className="question">
            <text>La situation enacte de projet ?</text>
            <input type="text"></input>
          </div>
          <div className="question">
            <text>La durée prévue ?</text>
            <Select options={duree} />
          </div>
          <div className="question">
            <text>Le marche de votre projet ?</text>
            <Select options={marche} />
          </div>
          <div className="question">
            <text>Le type de financement?</text>
            <Select options={type_financ} />
          </div>
          <div className="question">
            <text>
              Quelle est l'importance de ce projet et quelle seront ses
              avantages pour la sociéte ?
            </text>
            <Select options={avantages} />
          </div>
          <div className="question">
            <text>
              Que pensez-vous que votre projet crée comme des risques pour la
              societe ?
            </text>
            <Select options={risque} />
          </div>
          <div className="question">
            <text>le sexe ?</text>
            <Select options={risque} />
          </div>
          <div className="question">
            <text>l'age ?</text>
            <input type="text"></input>
          </div>
          <div className="question">
            <text>La willaya ?</text>
            <input type="text"></input>
          </div>
          <div className="question">
            <text>La commune ?</text>
            <input type="text"></input>
          </div>
          <div className="question">
            <text>Quelle est votre revenue menusuelle ?</text>
            <input type="text"></input>
          </div>
          <div className="question">
            <text>Avez-vous l'habitude d'aller a faisabot ?</text>
            <Select options={trueorflase} />
          </div>
          <div className="question">
            <text>
              Allez vous seul ou en famille si vous y allez en famille combien
              de personnes ?
            </text>
            <input type="text"></input>
          </div>
          <div className="question">
            <text>
              combien avez vous l'habitude de payer dans telles equipement par
              personnes ?
            </text>
            <input type="text"></input>
          </div>
          <div className="question">
            <text>
              pensez vous que la situation de ce projet est un emplacement ideal
              pour celui-ci ?
            </text>
            <Select options={trueorflase} />
          </div>
          <div className="question">
            <text>pensez vous que ce project aura un impact au niveau ?</text>
            <input type="text"></input>
          </div>
          <div className="question">
            <text>Que pensez vous du bien-fondé de ce projet ?</text>
            <input type="text"></input>
          </div>
          <div className="question">
            <text>Que pensez-vous des risques que ce projet laissera ? </text>
            <input type="text"></input>
          </div>
          <div className="question">
            <text>
              vous voyez vous etre un jour investisseur dans ce projet ?
            </text>
            <Select options={trueorflase} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description2;
