import React, { useState } from "react";
import "./styles/style.scss";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Что такое DOM?",
    variants: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Model",
    ],
    correct: 0,
  },
  {
    title:
      "Какой язык используется для создания серверной части веб-приложений?",
    variants: ["Python", "Java", "Node.js"],
    correct: 2,
  },
  {
    title: "Что такое API?",
    variants: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Application Protocol Interface",
    ],
    correct: 0,
  },
  {
    title: "Какой язык используется для стилизации веб-страниц?",
    variants: ["HTML", "JavaScript", "CSS"],
    correct: 2,
  },
  {
    title: "Что такое Git?",
    variants: [
      "система контроля версий",
      "язык программирования",
      "база данных",
    ],
    correct: 0,
  },
  {
    title: "Что такое ООП?",
    variants: [
      "Объектно-ориентированное программирование",
      "Основы объектного программирования",
      "Объектно-ориентированный подход",
    ],
    correct: 0,
  },
  {
    title: "Что такое фреймворк?",
    variants: ["библиотека", "структура", "инструмент разработки"],
    correct: 1,
  },
  {
    title: "Что такое SQL?",
    variants: [
      "Structured Query Language",
      "Simple Query Language",
      "Standard Query Language",
    ],
    correct: 0,
  },
  {
    title: "Что такое AJAX?",
    variants: [
      "Asynchronous JavaScript and XML",
      "Asynchronous JavaScript and XML requests",
      "Asynchronous JavaScript and XML technology",
    ],
    correct: 0,
  },
];

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        <li>
          {question.variants.map((text, i) => (
            <li onClick={() => onClickVariant(i)} key={i}>{text}</li>
          ))}
        </li>
      </ul>
    </>
  );
}

function Result({ correct }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt=""
      />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/"><button>Попробовать снова</button></a>
    </div>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0)
  const question = questions[step];
  
  const onClickVariant = (index) => {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
        step != questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} /> : <Result correct={correct} />
      }
    </div>
  );
}

export default App;
