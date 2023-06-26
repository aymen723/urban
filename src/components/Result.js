import React, { Component, useState } from "react";
import "./result.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
function Result() {
  const location = useLocation();

  const [from, setform] = useState();
  const [resp, setresp] = useState(null);
  const [labelss, setlabelss] = useState([]);
  // const labels = ["January", "February", "March", "April", "May", "June"];
  // const data = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: "My First dataset",
  //       backgroundColor: "rgb(255, 99, 132)",
  //       borderColor: "rgb(255,255,255)",
  //       data: [0, 10, 5, 2, 20, 30, 45],
  //     },
  //   ],
  // };

  // Generate an array of random colors
  function generateColors(length) {
    const colors = [];
    for (let i = 0; i < length; i++) {
      const color = getRandomColor();
      colors.push(color);
    }
    return colors;
  }

  // Generate a random color
  function getRandomColor() {
    const letters = "4123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getdata(a) {
    // setlabelss([]);
    // console.log(resp.questions[a].answers);
    // const newLabels = resp.questions[a].answers.map((option) => {
    //   return option.answer_text;
    // });
    const label = resp.questions[a].text;
    let newLabels;
    const filteredAnswers = resp.questions[a].answers.filter(
      (option) => option.answer_count !== 0
    );
    newLabels = filteredAnswers.map((option) => {
      return option.answer_text;
    });
    let count;
    count = filteredAnswers.map((option) => {
      return option.answer_count;
    });

    const backgroundColor = generateColors(newLabels.length);
    // for (let i = 0; i < resp.questions[a].answers.legth(); i++) {
    //   newLabels.push(resp.questions[a].answers[i].answer_text);
    // }
    console.log("lablss", newLabels);
    // console.log("lables", labels);

    const dataa = {
      labels: newLabels,
      datasets: [
        {
          label: label,
          backgroundColor: backgroundColor,
          borderColor: "rgb(255,255,255)",
          data: count,
        },
      ],
    };
    return dataa;
  }

  useEffect(() => {
    console.log("hna fl useeffect", location.state.id);
    setform(location.state.id);

    axios
      .post("http://localhost:8080/User/Results", location.state.id)
      .then((response) => {
        console.log(response);
        setresp(response.data);
      });
  }, []);
  return (
    <div className="container_res">
      <div className="res_title">
        <h1>Résultat sur le projet</h1>
      </div>
      {from != null ? (
        <div className="container_info">
          <div className="project_res_title">
            <h2>{from.questoins[0].answers[0]}</h2>
          </div>
          <div className="info_cont">
            <div className="info_projet">
              <text className="title_question"> {from.questoins[1].text} </text>
              <br></br>
              {from.questoins[1].answers.map((value) => {
                return <text>{value}</text>;
              })}
            </div>
            <div className="info_projet">
              {" "}
              <text className="title_question"> {from.questoins[2].text} </text>
              <br></br>
              {from.questoins[2].answers.map((value) => {
                return <text>{value}</text>;
              })}{" "}
            </div>
            <div className="info_projet">
              {" "}
              <text className="title_question"> {from.questoins[3].text} </text>
              <br></br>
              {from.questoins[3].answers.map((value) => {
                return <text>{value}</text>;
              })}{" "}
            </div>
            <div className="info_projet">
              {" "}
              <text className="title_question"> {from.questoins[4].text}</text>
              <br></br>
              {from.questoins[4].answers.map((value) => {
                return <text>{value}</text>;
              })}{" "}
            </div>
            <div className="info_projet">
              {" "}
              <text className="title_question"> {from.questoins[5].text}</text>
              <br></br>
              {from.questoins[5].answers.map((value) => {
                return <text>{value}</text>;
              })}{" "}
            </div>
            <div className="info_projet">
              {" "}
              <text className="title_question"> {from.questoins[6].text}</text>
              <br></br>
              {from.questoins[6].answers.map((value) => {
                return <text>{value}</text>;
              })}{" "}
            </div>
          </div>
        </div>
      ) : null}

      {resp != null ? (
        <div className="result_container">
          <div className="result_info">
            <h3> {resp.questions[0].text}</h3>
            <div className="chart">
              <Doughnut data={getdata(0)} />
            </div>
          </div>
          <div className="result_info">
            <h3> {resp.questions[1].text}</h3>{" "}
            <div className="chart">
              <Doughnut data={getdata(1)} />
            </div>
          </div>
          <div className="result_info">
            <h3> {resp.questions[2].text}</h3>{" "}
            <div className="chart">
              <Doughnut data={getdata(2)} />
            </div>
          </div>
          <div className="result_info">
            <h3> {resp.questions[3].text}</h3>{" "}
            <div className="chart">
              <Doughnut data={getdata(3)} />
            </div>
          </div>
          <div className="result_info">
            <h3> {resp.questions[4].text}</h3>{" "}
            <div className="chart">
              <Doughnut data={getdata(4)} />
            </div>
          </div>
          <div className="result_info">
            <h3> {resp.questions[5].text}</h3>{" "}
            <div className="chart">
              <Doughnut data={getdata(5)} />
            </div>
          </div>
          <div className="result_info">
            <h3> {resp.questions[6].text}</h3>{" "}
            <div className="chart">
              <Doughnut data={getdata(6)} />
            </div>
          </div>
          <div className="result_info">
            <h3> {resp.questions[7].text}</h3>{" "}
            <div className="chart">
              <Doughnut data={getdata(7)} />
            </div>
          </div>
          <div className="result_info">
            <h3> {resp.questions[8].text}</h3>{" "}
            <div className="chart">
              <Doughnut data={getdata(8)} />
            </div>
          </div>
          <div className="result_info">
            <h3> {resp.questions[9].text}</h3>{" "}
            <div className="chart">
              <Doughnut data={getdata(9)} />
            </div>
          </div>
          <div className="result_info">
            <h3> {resp.questions[10].text}</h3>{" "}
            <div className="chart">
              <Doughnut data={getdata(10)} />
            </div>
          </div>
          <div className="result_info">
            <h3> {resp.questions[11].text}</h3>{" "}
            <div className="chart">
              <Doughnut data={getdata(11)} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Result;
