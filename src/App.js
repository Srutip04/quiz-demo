import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Progress } from "reactstrap";
import "./App.css";

const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [cvalue,setcValue] = useState(0);
  const [wval,setwvalue] = useState(0);
  const [cans,setcans] = useState(0);
  const [wans, setwans] = useState(0);
  const [progress,setProgress] = useState(0);

  function handleAnswer(isCorrect) {
    setProgress(progress + 25);
    if (isCorrect) {
      setScore(score + 1);
      setcValue(cvalue + 25);
      setcans(cans + 1);
    }else{
       setwvalue(wval + 25);
       setwans(wans + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <section>
      <div className="mb-5 d-flex flex-row justify-content-between w-full">
        <div className="w-100">
          <div className="w-100 progress">
            <Progress bar color="success" value={cvalue} />
          </div>
          <span className="text-dark">{`${cans} / 4`}</span>
        </div>
        <div className="mx-5">
          <span class="rounded-circle text-white bg-dark p-2 fw-bold">{`${progress}`}</span>
        </div>
        <div className="w-100">
          <div className="w-100 progress">
            <Progress bar color="danger" value={wval} />
          </div>
          <span className="text-dark">{`${wans} / 4`}</span>
        </div>
      </div>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            Você pontuou {score} de {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Questão {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    onClick={() => handleAnswer(answerOption.isCorrect)}
                    key={index}
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default App;
