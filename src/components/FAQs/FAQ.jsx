import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const FAQ = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const showAnswerHandler = function () {
    setShowAnswer((prevAnswer) => !prevAnswer);
  };

  return (
    <article className={styles.faq} onClick={showAnswerHandler}>
      <div>
        <h4>{props.question}</h4>
        <button className={styles.faq_icon}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAnswer && <p>{props.answer}</p>}
    </article>
  );
};

export default FAQ;
