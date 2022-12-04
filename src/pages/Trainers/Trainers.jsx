import styles from "./Trainers.module.css";
import Header from "../../components/PagesHeader/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Trainer from "./Trainer/Trainer";
import { Fragment } from "react";

const Trainers = () => {
  return (
    <Fragment>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta
        illum inventore, repellat perferendis dignissimos aut.
      </Header>

      <section className={`container ${styles.trainers_container}`}>
        {trainers.map((data) => (
          <Trainer
            key={data.id}
            image={data.image}
            name={data.name}
            job={data.job}
            socials={[
              { icon: <BsInstagram />, link: data.socials[0] },
              { icon: <AiOutlineTwitter />, link: data.socials[1] },
              { icon: <FaFacebookF />, link: data.socials[2] },
              { icon: <FaLinkedinIn />, link: data.socials[3] },
            ]}
          />
        ))}
      </section>

      <section></section>
    </Fragment>
  );
};

export default Trainers;
