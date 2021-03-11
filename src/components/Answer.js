import React from "react";

function Answer({ text, handleClick }) {
  return <div onClick={() => handleClick()}>{text}</div>;
}

export default Answer;