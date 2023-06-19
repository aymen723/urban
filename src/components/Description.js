import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./Description.css";
function Description() {
  var [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setanswers] = useState([]);
  const prevbtn = useRef();
  const nextbtn = useRef();

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  function nextquestion() {
    if (currentQuestion < 4) {
      console.log(currentQuestion);

      // if (currentQuestion == 1) {
      //   prevbtn.current.disaled = false;
      // }
      prevbtn.current.disaled = false;
      console.log(prevbtn.current.disabled);

      setCurrentQuestion(currentQuestion + 1);
      console.log(currentQuestion);
    }
    const element = {
      questions: questions[currentQuestion],
    };
    // setanswers((oldArray) => [...oldArray, element]);
    // console.log(answers);
    answers[currentQuestion] = element;
    console.log(answers);
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
        <h3 className="question-text">{questions[currentQuestion].text}</h3>

        {questions[currentQuestion].options.map((option) => {
          return (
            <div>
              <input type="checkbox" key={option.id}></input>
              <label>{option.text}</label>
            </div>
          );
        })}
        <button
          onClick={() => {
            nextquestion();
          }}
          ref={nextbtn}
        >
          next
        </button>
        <button
          ref={prevbtn}
          onClick={() => {
            perviousquestion();
          }}
        >
          pervious
        </button>
      </div>
    </div>
  );
}

export default Description;
