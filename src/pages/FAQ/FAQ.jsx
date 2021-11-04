import React from "react";
import "./FAQ.scss";
import { questions } from "./data";
const FAQ = () => {
  return (
    <main id="faq">
      <h1 className="faqTitle">Duvidas mais frequentes</h1>
      <div className="questionContent">
        {questions.map((question, index) => {
          return (
            <div key={index} className="questionBox">
              <h1>{question.question}</h1>
              <p>{question.answer}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default FAQ;
