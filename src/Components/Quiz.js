import React, { useContext, useState } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";

const Quiz = () => {
  const { score, setScore } = useContext(QuizContext);
  const [currentQuestion, setCurrentQueston] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState("");

  const nextQuesion = () => {};

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="Options">
        <button onClick={() => setOptionChoosen("A")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setOptionChoosen("B")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setOptionChoosen("C")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setOptionChoosen("D")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      <button>Next Question</button>
    </div>
  );
};

export default Quiz;