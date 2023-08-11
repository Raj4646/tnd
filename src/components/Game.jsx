import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { dares } from "./dares";
import { truths } from "./truths";

function Game() {
  const location = useLocation();
  const [mode, setMode] = useState(location.state);
  const [type, setType] = useState("Select: Truth or Dare");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  if (mode === null) {
    setMode({ mode: "friendly" });
  }

  function getRandomTruthQuestionByType(type) {
    const questionsOfType = truths.filter((question) => question.type === type);
    const randomIndex = Math.floor(Math.random() * questionsOfType.length);
    return questionsOfType[randomIndex].question;
  }
  function getRandomDareQuestionByType(type) {
    const questionsOfType = dares.filter((question) => question.type === type);
    const randomIndex = Math.floor(Math.random() * questionsOfType.length);
    return questionsOfType[randomIndex].question;
  }

  function getTruth() {
    setType("Truth");
    if (mode.mode === "friendly") {
      const randomQuestion = getRandomTruthQuestionByType(mode.mode);
      setQuestion(randomQuestion);
    }
    if (mode.mode === "challenging") {
      const randomQuestion = getRandomTruthQuestionByType(mode.mode);
      setQuestion(randomQuestion);
    } else {
      const randomQuestion = getRandomTruthQuestionByType(mode.mode);
      setQuestion(randomQuestion);
    }
  }

  function getDare() {
    setType("Dare");
    if (mode.mode === "friendly") {
      const randomQuestion = getRandomDareQuestionByType(mode.mode);
      setQuestion(randomQuestion);
    }
    if (mode.mode === "challenging") {
      const randomQuestion = getRandomDareQuestionByType(mode.mode);
      setQuestion(randomQuestion);
    } else {
      const randomQuestion = getRandomDareQuestionByType(mode.mode);
      setQuestion(randomQuestion);
    }
  }

  // console.log(mode);
  return (
    <>
      <div className="container">
        {location.state === null ? (
          <p >
            <Link className="go-home" to="/">Go Home</Link>
          </p>
        ) : (
          <>
            <p>{type}</p>
            <h1 className="question">{question}</h1>
            <div>
              <button className="btn truth" onClick={getTruth}>
                Truth
              </button>
              <button className="btn dare" onClick={getDare}>
                Dare
              </button>
            </div>
            <br />
            <p>
              <Link className="go-home" to="/">Go Home</Link>
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default Game;
