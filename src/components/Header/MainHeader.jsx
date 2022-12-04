import { Link } from "react-router-dom";
import styles from "./MainHeader.module.css";
import MainIMG from "../../images/main_header.png";

const MainHeader = () => {
  return (
    <header className={styles.main_header}>
      <div className={`container ${styles.main__header_container}`}>
        <div className={styles.main__header_left}>
          <h4>#100DaysOfWorkout</h4>
          <h1>Join The Legends Of Fitness World</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis explicabo reprehenderit laboriosam doloribus quidem
            earum modi eius vitae et? Recusandae.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>

        <div className={styles.main__header_right}>
          <div className={styles.main__header_circle}></div>
          <div className={styles.main__header_image}>
            <img src={MainIMG} alt="Main header img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
