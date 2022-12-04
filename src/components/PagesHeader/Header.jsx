import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header_pages}>
      <div className={styles.header_container}>
        <div className={styles.header__container_bg}>
          <img src={props.image} alt="Header Background" />
        </div>
        <div className={styles.header_content}>
          <h2>{props.title}</h2>
          <p>{props.children}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
