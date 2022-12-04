import { Fragment } from "react";
import Header from "../../components/PagesHeader/Header";
import img from "../../images/header_bg_1.jpg";
import styles from "./About.module.css";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const about = () => {
  return (
    <Fragment>
      <Header title="About Us" image={img}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        veritatis quibusdam nihil doloremque libero aut reprehenderit? Officiis
        repellat aliquid aperiam.
      </Header>

      <section className={styles.about_story}>
        <div className={`container ${styles.about__story_container}`}>
          <div className={styles.about__section_image}>
            <img src={StoryImage} alt="About img" />
          </div>
          <div className={styles.about__section_content}>
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              doloremque quidem sint harum! Nisi magnam debitis rem omnis.
              Deleniti id voluptatibus, assumenda dicta necessitatibus
              similique!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae porro qui rerum iure aperiam? Beatae culpa magni vel
              in voluptatibus! Quo eaque accusantium deserunt maxime, velit
              tenetur omnis voluptatibus dignissimos.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              amet ab modi perferendis?
            </p>
          </div>
        </div>
      </section>

      <section className={styles.about_vision}>
        <div className={`container ${styles.about__vision_container}`}>
          <div className={styles.about__section_content}>
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              doloremque quidem sint harum! Nisi magnam debitis rem omnis.
              Deleniti id voluptatibus, assumenda dicta necessitatibus
              similique!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae porro qui rerum iure aperiam? Beatae culpa magni vel
              in voluptatibus! Quo eaque accusantium deserunt maxime, velit
              tenetur omnis voluptatibus dignissimos.
            </p>
          </div>
          <div className={styles.about__section_image}>
            <img src={VisionImage} alt="About img" />
          </div>
        </div>
      </section>

      <section className={styles.about_mission}>
        <div className={`container ${styles.about__mission_container}`}>
          <div className={styles.about__section_image}>
            <img src={MissionImage} alt="About img" />
          </div>
          <div className={styles.about__section_content}>
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              doloremque quidem sint harum! Nisi magnam debitis rem omnis.
              Deleniti id voluptatibus, assumenda dicta necessitatibus
              similique!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae porro qui rerum iure aperiam? Beatae culpa magni vel
              in voluptatibus! Quo eaque accusantium deserunt maxime, velit
              tenetur omnis voluptatibus dignissimos.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              amet ab modi perferendis?
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default about;
