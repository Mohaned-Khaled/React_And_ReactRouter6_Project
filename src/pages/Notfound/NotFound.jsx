import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={styles.notfound}>
      <div className={`container ${styles.notfound_container}`}>
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
