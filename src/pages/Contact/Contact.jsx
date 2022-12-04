import styles from "./Contact.module.css";
import Header from "../../components/PagesHeader/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        perferendis voluptatem veniam inventore aut fuga.
      </Header>

      <section className={styles.contact}>
        <div className={`container ${styles.contact_container}`}>
          <div className={styles.contact_wrapper}>
            <a
              href="mailto:support@egattor.com"
              target="_blank"
              rel="noreferrer nooper"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/mohaned"
              target="_blank"
              rel="noreferrer nooper"
            >
              <BsMessenger />
            </a>
            <a
              href="https://m.me/id=100012953357329"
              target="_blank"
              rel="noreferrer nooper"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
