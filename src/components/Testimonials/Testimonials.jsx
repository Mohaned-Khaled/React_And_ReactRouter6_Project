import styles from "./Testimonials.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import Card from "../../pages/Ui/Card/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";
import { testimonials } from "../../data";
import { useState } from "react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  const testi = testimonials[index];

  const increaseIndexHandler = function () {
    if (index < testimonials.length - 1) setIndex((prev) => prev + 1);
    else setIndex(0);
  };

  const decreaseIndexHandler = function () {
    if (index === 0) setIndex(testimonials.length - 1);
    else setIndex((prev) => prev - 1);
  };

  return (
    <section className={styles.testi}>
      <div className={`container ${styles.testi_container}`}>
        <SectionHeader
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testi-head"
        />
        <Card className={`testimonials ${styles.testimonials}`}>
          <div className={styles.testi_avatar}>
            <img src={testi.avatar} alt={testi.name} />
          </div>
          <p className={styles.testi_quote}>{`"${testi.quote}"`}</p>
          <h5>{testi.name}</h5>
          <small className={styles.testi_title}>{testi.job}</small>
        </Card>
        <div className={styles.testi_btn__container}>
          <button className={styles.testi_btn} onClick={decreaseIndexHandler}>
            <IoIosArrowDropleftCircle />
          </button>
          <span className={styles.testi_total}>{`${index + 1} / ${
            testimonials.length
          }`}</span>
          <button className={styles.testi_btn} onClick={increaseIndexHandler}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
