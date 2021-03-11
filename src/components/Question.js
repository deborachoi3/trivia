import React from "react";
import Answer from "./Answer";

function Question({ text, answerChoices, setChosenAnswer }) {
  //answerChoices.map();
  return (
    <div className="questionBox">
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

export default Question;