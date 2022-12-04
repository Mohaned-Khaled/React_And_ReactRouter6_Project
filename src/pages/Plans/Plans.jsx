import styles from "./Plans.module.css";
import Header from "../../components/PagesHeader/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../Ui/Card/Card";
import { plans } from "../../data";
import { Fragment } from "react";

const Plans = () => {
  return (
    <Fragment>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
        dignissimos eos reprehenderit dolores quasi. Incidunt.
      </Header>
      <section className={styles.plans}>
        <div className={`container ${styles.plans_container}`}>
          {plans.map((data) => (
            <Card key={data.id} className="plan">
              <h3>{data.name}</h3>
              <small>{data.desc}</small>
              <h1>{`$${data.price}`}</h1>
              <h2>/mo</h2>
              <h4>Features</h4>
              {data.features.map((info, index) => (
                <p
                  key={index}
                  className={info.available ? styles.enable : styles.disable}
                >
                  {info.feature}
                </p>
              ))}
              <button className="btn lg">Choose Plan</button>
            </Card>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Plans;
