import React from "react";
import styles from "./Programs.module.css";
import { FaCrown } from "react-icons/fa";
import SectionHeader from "../SectionHeader/SectionHeader";
import { programs } from "../../data";
import Card from "../../pages/Ui/Card/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

const Programs = () => {
  return (
    <section className={styles.programs}>
      <div className={`container ${styles.programs_container}`}>
        <SectionHeader title="Programs" icon={<FaCrown />} />

        <div className={styles.programs_wrapper}>
          {programs.map((data) => (
            <Card className="programs_program" key={data.id}>
              <span>{data.icon}</span>
              <h4>{data.title}</h4>
              <small>{data.info}</small>
              <Link to={data.path} className={`btn sm ${styles.link_btn}`}>
                Learn More <AiFillCaretRight />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
