import React from "react";
import styles from "./Values.module.css";
import Image from "../../images/values.jpg";
import SectionHeader from "../SectionHeader/SectionHeader";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../../data";
import Card from "../../pages/Ui/Card/Card";

const Values = () => {
  return (
    <section className={styles.values}>
      <div className={`container ${styles.values_container}`}>
        <div className={styles.values_left}>
          <div className={styles.values_image}>
            <img src={Image} alt="Value img" />
          </div>
        </div>

        <div className={styles.values_right}>
          <SectionHeader icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            culpa possimus at iste quos inventore animi fuga libero.
          </p>
          <div className={styles.values_wrapper}>
            {values.map((data) => (
              <Card className="values_value" key={data.id}>
                <span>{data.icon}</span>
                <h4>{data.title}</h4>
                <small>{data.desc}</small>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
