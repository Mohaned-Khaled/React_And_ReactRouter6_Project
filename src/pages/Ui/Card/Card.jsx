import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <article className={`card ${props.className}`}>{props.children}</article>
  );
};

export default Card;
