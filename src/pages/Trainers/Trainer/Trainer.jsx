import styles from "./Trainer.module.css";
import Card from "../../Ui/Card/Card";

const Trainer = (props) => {
  return (
    <Card className={`trainer ${styles.trainer}`}>
      <div className={styles.trainer_img}>
        <img src={props.image} alt={props.name} />
      </div>
      <h3>{props.name}</h3>
      <p>{props.job}</p>
      <div className={styles.trainer_socials}>
        {props.socials.map((data, index) => (
          <a
            key={index}
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.icon}
          </a>
        ))}
      </div>
    </Card>
  );
};

export default Trainer;
