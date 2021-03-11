import React from "react";

function NextQuestion({ makeItNext }) {
  
  return <button onClick={makeItNext}>Next Question</button>;
}

export default NextQuestion;