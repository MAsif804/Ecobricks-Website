import React from "react";
import "./Question.css";
import { ChevronDown } from "../../assets/Index";
import FAQ from "../FAQ/FAQ";

const Question = () => {
  return (
    <>
      <section id="question" className="white">
        <div className="wrapper">
          <h1>Frequently Asked Questions</h1>
          <FAQ />
        </div>
      </section>
    </>
  );
};

export default Question;
