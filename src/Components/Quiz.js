import React, { useContext, useState } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";

const Quiz = () => {
  const { score, setScore } = useContext(QuizContext);
  const { gameState, setGameState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQueston] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState("");

  const nextQuesion = () => {
    if (Questions[currentQuestion].answer == optionChoosen) {
      setScore(score + 1);
    }
    setCurrentQueston(currentQuestion + 1);
  };

  const finishGame = () => {
    if (Questions[currentQuestion].answer == optionChoosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

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
      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishGame}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuesion}>Next Question</button>
      )}
    </div>
  );
};

export default Quiz;
