import React from "react";
import "./SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <div>
      <div
        className={`section-header ${props.className ? props.className : ""}`}
      >
        <span>{props.icon}</span>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default SectionHeader;
