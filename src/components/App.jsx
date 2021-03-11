import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import Question from "./Question";
import Answer from "./Answer";
import NextQuestion from "./NextQuestion";

function App() {
  let [questionNumber, changeQuestionNumber] = useState(0);
  let [answerDisplayed, setAnswerDisplayed] = useState(false);
  let [selectedAnswer, changeSelectedAnswer] = useState("");
  var testQuestion = "";
  var correctChoice = data[questionNumber].question.correct_choice_index;
  console.log(selectedAnswer, correctChoice);
  if (selectedAnswer === data[questionNumber].question.choices[correctChoice]) {
    testQuestion = "Correct"; // `Correct! You guessed ${}`
  } else if (selectedAnswer !== "") {
    testQuestion = "Wrong";
  }
console.log(questionNumber)

  return (
    <div>
      <div className="app">Trivia!</div>
      <Question
        text={data[questionNumber].question.text}
        answerChoices={data[questionNumber].question.choices}
        setChosenAnswer={changeSelectedAnswer}
      /> 

      <NextQuestion
        makeItNext={() => {
          if (questionNumber === 3) {
            changeQuestionNumber(0)
          }
          
          else {
            changeQuestionNumber(questionNumber + 1);
          }
        }}
      />

      <button
        onClick={() =>
          setAnswerDisplayed(
            data[questionNumber].question.choices[correctChoice]
          )
        }
      >
        Answer
      </button>

      <div>{testQuestion}</div>
      <div>{answerDisplayed}</div>
    </div>
  );
}

export default App;

/* function Question({ text, answerChoices, setChosenAnswer }) {
  //answerChoices.map();
  return (
    <div class="questionBox">
      {text}
      <Answer text={"Answer goes here"} />
      {answerChoices.map((answer, i) => (
        <Answer
          key={i}
          text={answer}
          handleClick={() => setChosenAnswer(answer)}
        />
      ))}
    </div>
  );
} 
*/

/* function NextQuestion({ makeItNext }) {
/* function NextQuestion({ makeItNext }) {
  return <button onClick={makeItNext}>Next Question</button>;
}
*/

/* function Answer({ text, handleClick }) {
  return <div onClick={() => handleClick()}>{text}</div>;
}
*/