import styles from "./FAQs.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../../data";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section className={styles.faqs}>
      <div className={`container ${styles.faqs_container}`}>
        <SectionHeader icon={<FaQuestion />} title="FAQs" />
        <div className={styles.faqs_wrapper}>
          {faqs.map((data) => (
            <FAQ key={data.id} question={data.question} answer={data.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
